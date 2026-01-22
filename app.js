/**
 * MojoJS Security Research GUI
 * Main Application Logic
 */

(function () {
    'use strict';

    // ========================================
    // State Management
    // ========================================
    const state = {
        interfaces: [],
        selectedInterface: null,
        selectedMethod: null,
        paramValues: {},
        mojoAvailable: false,
        panelVisible: false,
        trafficCount: 0,
        interceptResponses: false
    };

    // ========================================
    // Security Helpers
    // ========================================
    function escapeHtml(str) {
        if (typeof str !== 'string') return str;
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // ========================================
    // Trusted Types Policy
    // ========================================
    let trustedPolicy = null;
    if (typeof window.trustedTypes !== 'undefined') {
        trustedPolicy = window.trustedTypes.createPolicy('mojoGUI', {
            createHTML: (input) => input,
            createScript: (input) => input,
            createScriptURL: (input) => input
        });
    }

    function safeHTML(html) {
        if (trustedPolicy) {
            return trustedPolicy.createHTML(html);
        }
        return html;
    }

    function safeStringify(value, space) {
        return JSON.stringify(value, (key, val) =>
            typeof val === 'bigint' ? val.toString() + 'n' : val, space);
    }

    function safeParse(json) {
        return JSON.parse(json, (key, value) => {
            if (typeof value === 'string' && /^-?\d+n$/.test(value)) {
                return BigInt(value.slice(0, -1));
            }
            return value;
        });
    }

    // ========================================
    // Mojo Dependency Loader Patch
    // ========================================
    // Ensure we take control of dependency loading to prevent race conditions and 404s
    if (typeof mojo !== 'undefined' && mojo.config) {
        mojo.config.autoLoadMojomDeps = false;
        console.log('[MojoGUI] Disabled autoLoadMojomDeps to handle dependencies manually.');
    }

    // Overwrite MojoBindings.loadBinding to be more robust
    if (typeof MojoBindings !== 'undefined') {
        const originalLoadBinding = MojoBindings.loadBinding;

        MojoBindings.loadBinding = async function (filename) {
            if (this._loadedModules[filename]) {
                return this._loadedModules[filename];
            }

            this._loadedModules[filename] = (async () => {
                // Load index to resolve dependencies
                const data = await this.loadIndex();
                const fileEntry = data.files.find(f => f.filename === filename);

                if (fileEntry && fileEntry.imports && fileEntry.imports.length > 0) {
                    const loadPromises = fileEntry.imports.map(async (importPath) => {
                        // Improved matching logic:
                        // 1. Exact match
                        // 2. Ends with match (handling relative paths)
                        // 3. Handle 'skia' vs 'skia.public' discrepancies if needed

                        let importEntry = data.files.find(f => f.source === importPath);

                        if (!importEntry) {
                            // Try looser matching
                            importEntry = data.files.find(f => f.source.endsWith(importPath) || f.source.endsWith('/' + importPath));
                        }

                        if (importEntry) {
                            console.log(`[MojoGUI] Resolving ${importPath} -> ${importEntry.filename}`);
                            try {
                                await this.loadBinding(importEntry.filename);
                            } catch (e) {
                                console.error(`[MojoGUI] Failed to load dependency ${importEntry.filename}`, e);
                                throw e;
                            }
                        } else {
                            console.warn(`[MojoGUI] Import not found in index: ${importPath}. This may cause undefined types.`);
                        }
                    });

                    try {
                        await Promise.all(loadPromises);
                    } catch (e) {
                        console.error(`[MojoGUI] Dependency loading failed for ${filename}`, e);
                        // We continue anyway, hoping for the best? Or fail hard?
                        // Fail hard is safer to avoid confusing TypeErrors.
                        throw e;
                    }
                }

                return new Promise((resolve, reject) => {
                    const script = document.createElement('script');
                    const scriptUrl = `./bindings/${filename}`;

                    if (trustedPolicy) {
                        script.src = trustedPolicy.createScriptURL(scriptUrl);
                    } else {
                        script.src = scriptUrl;
                    }

                    script.onload = () => {
                        console.log(`[MojoGUI] Loaded ${filename}`);
                        resolve(true);
                    };
                    script.onerror = () => {
                        console.error(`[MojoGUI] Failed to load script: ${filename}`);
                        reject(new Error(`Failed to load binding: ${filename}`));
                    };
                    document.head.appendChild(script);
                });
            })();

            return this._loadedModules[filename];
        };
    }

    // ========================================
    // DOM Elements
    // ========================================
    const elements = {
        // Status
        mojoStatus: document.getElementById('mojoStatus'),

        // Search & List
        interfaceSearch: document.getElementById('interfaceSearch'),
        interfaceList: document.getElementById('interfaceList'),
        interfaceCount: document.getElementById('interfaceCount'),

        // Interface Panel
        selectedInterfaceName: document.getElementById('selectedInterfaceName'),
        selectedModule: document.getElementById('selectedModule'),
        methodsList: document.getElementById('methodsList'),

        // Params Panel
        selectedMethodName: document.getElementById('selectedMethodName'),
        paramsForm: document.getElementById('paramsForm'),
        resetBtn: document.getElementById('resetBtn'),

        // Code Panel
        generatedCode: document.getElementById('generatedCode'),
        copyBtn: document.getElementById('copyBtn'),
        executeBtn: document.getElementById('executeBtn'),

        // Toast
        toastContainer: document.getElementById('toastContainer'),

        // Interceptor
        interceptToggleBtn: document.getElementById('interceptToggleBtn'),
        interceptStatusDot: document.getElementById('interceptStatusDot'),
        noScrambleToggle: document.getElementById('noScrambleToggle'),
        viewTrafficBtn: document.getElementById('viewTrafficBtn'),
        trafficBadge: document.getElementById('trafficBadge'),
        interceptorPanel: document.getElementById('interceptorPanel'),
        interceptorTableBody: document.getElementById('interceptorTableBody'),
        interceptorDetails: document.getElementById('interceptorDetails'),
        codeContainer: document.getElementById('codeContainer'),
        // resultsSection duplicate in original, keeping last

        clearActivityBtn: document.getElementById('clearActivityBtn'),

        // New UI Elements
        closeInterceptorBtn: document.getElementById('closeInterceptorBtn'),
        interfacePanel: document.getElementById('interfacePanel'),
        paramsPanel: document.getElementById('paramsPanel')
    };

    // ========================================
    // Initialization
    // ========================================
    async function init() {
        checkMojoAvailability();

        // Version Extraction for Scrambler
        if (navigator.userAgentData) {
            try {
                const ua = await navigator.userAgentData.getHighEntropyValues(['fullVersionList']);
                const ver = ua.fullVersionList.find(v => v.brand === 'Google Chrome' || v.brand === 'Chromium');
                if (ver) {
                    window.mojoVersion = ver.version;
                    console.log('[MojoGUI] Detected Chrome Version:', window.mojoVersion);
                }
            } catch (e) {
                console.warn('[MojoGUI] Failed to get version:', e);
            }
        }

        await loadInterfaces();

        // Initialize Welcome/Update Manager
        let trackerVersion = window.mojoVersion;
        if (typeof MojoBindings !== 'undefined' && MojoBindings.getMetadata) {
            const meta = MojoBindings.getMetadata();
            if (meta && meta.version) {
                trackerVersion = meta.version;
                console.log('[MojoGUI] Bindings Version:', trackerVersion);
            }
        }

        if (window.WelcomeManager) {
            WelcomeManager.init(state.interfaces, safeHTML, trackerVersion);
        }

        setupEventListeners();
    }



    function checkMojoAvailability() {
        // Check for both legacy (Mojo) and standard (mojo) namespaces
        state.mojoAvailable = (typeof Mojo !== 'undefined' && Mojo.bindInterface) ||
            (typeof mojo !== 'undefined' && mojo.bindInterface);

        const statusEl = elements.mojoStatus;
        const statusText = statusEl.querySelector('.status-text');

        if (state.mojoAvailable) {
            statusEl.classList.add('connected');
            statusEl.classList.remove('error');
            statusText.textContent = 'MojoJS Enabled';
            elements.interceptToggleBtn.disabled = false;
        } else {
            statusEl.classList.add('error');
            statusEl.classList.remove('connected');
            statusEl.querySelector('.status-text').textContent = 'MojoJS Disabled';
            elements.interceptToggleBtn.disabled = true;
        }
    }

    async function loadInterfaces() {
        try {
            // Try to load from bindings index
            if (typeof MojoBindings !== 'undefined') {
                const interfaces = await MojoBindings.getInterfaces();
                if (interfaces && interfaces.length > 0) {
                    state.interfaces = interfaces;
                    renderInterfaceList(interfaces);
                    // AUTO-MONITOR ALL (Quietly)
                    setTimeout(() => toggleMonitorAll(true), 100);
                    return;
                }
            }

            // Fallback: load demo interfaces
            loadDemoInterfaces();
            setTimeout(() => toggleMonitorAll(true), 100);
        } catch (error) {
            console.error('Error loading interfaces:', error);
            loadDemoInterfaces();
        }
    }

    function loadDemoInterfaces() {
        // Demo interfaces removed as requested.
        // We rely solely on bindings loaded from the page/extension context.
        state.interfaces = [];
    }

    // ========================================
    // Mojo Loader Service
    // ========================================
    window.MojoLoader = {
        async ensureBinding(interfaceName) {
            // Check if already resolved
            if (MojoProxy.getInterfaceComponents(interfaceName).Interface) {
                return true;
            }

            console.log(`[MojoLoader] resolving binding for ${interfaceName}...`);

            // Find metadata
            let iface = state.interfaces.find(i => i.name === interfaceName);
            // Try matching full name if simple name failed, or vice versa
            if (!iface) {
                // Try to find by suffix (e.g. searching 'VibrationManager' in 'device.mojom.VibrationManager')
                iface = state.interfaces.find(i => i.name.endsWith('.' + interfaceName));
            }
            if (!iface) {
                // Try reverse: searching 'device.mojom.VibrationManager' for 'VibrationManager'
                const parts = interfaceName.split('.');
                const shortName = parts.pop();
                iface = state.interfaces.find(i => i.name === shortName);
            }

            // Universal Fuzzy Match: If exact match fails, try suffix match
            if (!iface) {
                const suffix = '.' + interfaceName;
                iface = state.interfaces.find(i => i.name.endsWith(suffix));
                if (iface) {
                    console.log(`[MojoLoader] Fuzzy resolved '${interfaceName}' to '${iface.name}'`);
                }
            }

            if (iface && iface.file && typeof MojoBindings !== 'undefined') {
                try {
                    await MojoBindings.loadBinding(iface.file);
                    console.log(`[MojoLoader] Loaded ${iface.file} for ${interfaceName}`);
                    return true;
                } catch (e) {
                    console.error(`[MojoLoader] Failed to load ${iface.file}`, e);
                }
            } else {
                console.warn(`[MojoLoader] Could not find binding file for ${interfaceName}`);
            }
            return false;
        }
    };

    // ========================================
    // Event Listeners
    // ========================================
    function setupEventListeners() {
        // Search
        elements.interfaceSearch.addEventListener('input', handleSearch);

        // Copy button
        elements.copyBtn.addEventListener('click', copyCode);

        // Execute button
        elements.executeBtn.addEventListener('click', executeCode);

        // Reset button
        elements.resetBtn.addEventListener('click', resetParams);

        // Manual Params Form Delegation (Unified State Management)
        if (elements.paramsForm) {
            const handleParamChange = (e) => {
                const input = e.target;
                if (input.matches('input, textarea, select')) {
                    // Re-collect entire form to ensure deep structure (Arrays/Maps) is synced
                    state.paramValues = collectFormData(elements.paramsForm, false);
                    updateGeneratedCode();
                }
            };
            elements.paramsForm.addEventListener('input', handleParamChange);
            elements.paramsForm.addEventListener('change', handleParamChange);
        }



        // Registry for lazy-loaded array templates
        window.MojoTemplateRegistry = {};

        // Interceptor
        elements.interceptToggleBtn.addEventListener('click', toggleInterceptor);
        elements.clearActivityBtn?.addEventListener('click', clearActivityLog);

        // No Scramble Toggle
        if (elements.noScrambleToggle) {
            elements.noScrambleToggle.addEventListener('change', (e) => {
                window.mojoNoScramble = e.target.checked;
                showToast(`Force No Scramble: ${window.mojoNoScramble ? 'ON' : 'OFF'}`);
            });
        }

        // Intercept Responses Toggle
        elements.interceptRespToggle = document.getElementById('interceptRespToggle');
        if (elements.interceptRespToggle) {
            elements.interceptRespToggle.checked = state.interceptResponses || false;
            elements.interceptRespToggle.addEventListener('change', (e) => {
                state.interceptResponses = e.target.checked;
                showToast(state.interceptResponses ? 'Response Interception Enabled' : 'Response Interception Disabled');
            });
        }

        // Traffic Events
        window.addEventListener('mojo-protocol-ready', (e) => {
            const { interface: iface } = e.detail;
            showToast(`Protocol Synchronized for ${iface}`, 'success');

            // Update UI if the current interface list is showing this interface
            const items = elements.interfaceList.querySelectorAll(`[data-name="${iface}"]`);
            items.forEach(item => {
                if (!item.querySelector('.sync-badge')) {
                    const badge = document.createElement('span');
                    badge.className = 'sync-badge';
                    badge.title = 'Protocol Synchronized';
                    badge.innerHTML = '✓';
                    item.appendChild(badge);
                }
            });
        });

        // Traffic View
        if (elements.viewTrafficBtn) {
            elements.viewTrafficBtn.addEventListener('click', () => showInterceptorPanel(!state.panelVisible));
        }

        if (elements.closeInterceptorBtn) {
            elements.closeInterceptorBtn.addEventListener('click', () => showInterceptorPanel(false));
        }

        // Global functions for inline handlers
        window.resumeIntercept = resumeIntercept;
        window.addEventListener('mojo-intercept', handleMojoIntercept);
        window.addEventListener('mojo-response', handleMojoResponse);
        window.addEventListener('mojo-response-intercept', handleMojoResponseIntercept); // Fix: Add missing listener
        window.addEventListener('mojo-error', handleMojoError);
        window.switchToInterceptMode = switchToInterceptMode;
    }

    function toggleMonitorAll(quiet = false) {
        if (!state.mojoAvailable) {
            if (!quiet) showToast('MojoJS not available', 'error');
            return;
        }

        // Monitoring is now always background/automatic by default
        let count = 0;
        state.interfaces.forEach(iface => {
            let started = false;
            if (!InterceptorManager.isActive(iface.name)) {
                if (InterceptorManager.start(iface.name, 'LOG')) started = true;
            }
            const fqn = iface.module ? `${iface.module}.${iface.name}` : null;
            if (fqn && fqn !== iface.name && !InterceptorManager.isActive(fqn)) {
                if (InterceptorManager.start(fqn, 'LOG')) started = true;
            }
            if (started) count++;
        });

        if (!quiet) {
            if (count > 0) showToast(`Started monitoring ${count} new interfaces`, 'success');
            showInterceptorPanel(true);
        } else {
            console.log(`[AutoMonitor] Background monitoring active for ${count} interfaces.`);
        }
    }

    function switchToInterceptMode(interfaceName) {
        InterceptorManager.start(interfaceName, 'INTERCEPT');
        showToast(`Switched ${interfaceName} to Intercept Mode`, 'success');
        // Update UI if needed
    }

    function handleSearch(e) {
        const query = e.target.value.toLowerCase();
        const filtered = state.interfaces.filter(iface =>
            iface.name.toLowerCase().includes(query) ||
            iface.module.toLowerCase().includes(query) ||
            (iface.methods && iface.methods.some(m => m.toLowerCase().includes(query)))
        );
        renderInterfaceList(filtered);
    }

    // ========================================
    // Rendering
    // ========================================
    function renderInterfaceList(interfaces) {
        elements.interfaceCount.textContent = interfaces.length;

        if (interfaces.length === 0) {
            elements.interfaceList.innerHTML = safeHTML(`
                <div class="empty-state small">
                    <p>No interfaces found</p>
                </div>
            `);
            return;
        }

        elements.interfaceList.innerHTML = safeHTML(interfaces.map(iface => {
            const isSynced = window.MojoLearnedProtocols && window.MojoLearnedProtocols.has(iface.name);
            return `
            <div class="interface-item" data-name="${escapeHtml(iface.name)}" data-module="${escapeHtml(iface.module)}">
                <span class="name">${escapeHtml(iface.name)}</span>
                <span class="module">${escapeHtml(iface.module)}</span>
                <span class="method-count">${iface.methods?.length || 0} methods</span>
                ${isSynced ? '<span class="sync-badge" title="Protocol Synchronized">✓</span>' : ''}
            </div>
        `;
        }).join(''));

        // Add click handlers + Staggered Animation
        elements.interfaceList.querySelectorAll('.interface-item').forEach((item, index) => {
            item.style.animation = `listItemEnter 0.3s ease-out backwards`;
            item.style.animationDelay = `${Math.min(index * 0.03, 0.5)}s`; // Cap delay at 0.5s
            item.addEventListener('click', () => selectInterface(item.dataset.name, item.dataset.module));
        });
    }

    async function selectInterface(name, module) {
        // Find interface by both name and module to ensure uniqueness
        const iface = state.interfaces.find(i => i.name === name && i.module === module);
        if (!iface) return;

        state.selectedInterface = iface;
        state.selectedMethod = null;
        state.paramValues = {};

        // Update UI
        elements.interfaceList.querySelectorAll('.interface-item').forEach(item => {
            const isActive = item.dataset.name === name && item.dataset.module === module;
            item.classList.toggle('active', isActive);
            if (isActive) item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });

        elements.selectedInterfaceName.textContent = iface.name;
        elements.selectedModule.textContent = iface.module;

        // Auto-load the binding file
        if (iface.file && typeof MojoBindings !== 'undefined') {
            try {
                elements.selectedModule.textContent = iface.module + ' (loading...)';
                await MojoBindings.loadBinding(iface.file);
                elements.selectedModule.textContent = iface.module + ' ✓';
                showToast(`Loaded binding: ${iface.file}`, 'success');
            } catch (error) {
                console.warn('Failed to load binding file:', iface.file, error);
                elements.selectedModule.textContent = iface.module + ' (file not found)';
            }
        }

        // Render "Associated" toggle
        renderAssociatedToggle();

        renderMethods(iface);
        renderParamsForm(null);
        updateGeneratedCode();

        // Auto-hide traffic log when switching interfaces
        if (state.panelVisible) {
            showInterceptorPanel(false);
        }
    }

    function renderAssociatedToggle() {
        const header = elements.interfacePanel.querySelector('.panel-title');
        // Remove existing toggle if present
        const existing = header.querySelector('.associated-toggle');
        if (existing) existing.remove();

        const toggle = document.createElement('div');
        toggle.className = 'associated-toggle';
        toggle.style.marginTop = '8px';
        toggle.innerHTML = `
            <label style="display: flex; align-items: center; gap: 8px; font-size: 0.9em; cursor: pointer;">
                <input type="checkbox" id="associatedInterfaceToggle">
                Associated Interface (requires Master Handle)
            </label>
            <div id="associatedInputs" style="display: none; margin-top: 8px; padding: 8px; background: var(--bg-input); border-radius: 4px;">
                <div style="margin-bottom: 8px;">
                    <label style="display: block; font-size: 0.8em; margin-bottom: 4px;">Master Pipe Handle (e.g. from Renderer)</label>
                    <input type="number" id="masterHandleInput" placeholder="Master Handle ID" style="width: 100%; padding: 4px;">
                </div>
                <div>
                    <label style="display: block; font-size: 0.8em; margin-bottom: 4px;">Interface ID (Ordinal)</label>
                    <input type="number" id="interfaceIdInput" placeholder="Interface ID" style="width: 100%; padding: 4px;">
                </div>
            </div>
        `;
        header.appendChild(toggle);

        const checkbox = toggle.querySelector('#associatedInterfaceToggle');
        const inputs = toggle.querySelector('#associatedInputs');
        const masterInput = toggle.querySelector('#masterHandleInput');
        const idInput = toggle.querySelector('#interfaceIdInput');

        checkbox.addEventListener('change', (e) => {
            inputs.style.display = e.target.checked ? 'block' : 'none';
            state.isAssociated = e.target.checked;
            updateGeneratedCode();
        });

        masterInput.addEventListener('input', (e) => {
            state.masterHandleId = e.target.value;
            updateGeneratedCode();
        });

        idInput.addEventListener('input', (e) => {
            state.interfaceId = e.target.value;
            updateGeneratedCode();
        });
    }

    function renderMethods(iface) {
        if (!iface.methods || iface.methods.length === 0) {
            elements.methodsList.innerHTML = safeHTML(`
                <div class="empty-state">
                    <p>No methods available</p>
                </div>
            `);
            return;
        }

        elements.methodsList.innerHTML = safeHTML(iface.methods.map(method => {
            const methodName = typeof method === 'string' ? method : method.name;
            return `
                <div class="method-item" data-method="${escapeHtml(methodName)}">
                    <span class="name">${escapeHtml(methodName)}</span>
                    <span class="returns">→</span>
                </div>
            `;
        }).join(''));

        // Add click handlers
        elements.methodsList.querySelectorAll('.method-item').forEach(item => {
            item.addEventListener('click', () => selectMethod(item.dataset.method));
        });
    }

    function selectMethod(methodName) {
        state.selectedMethod = methodName;
        state.paramValues = {};

        // Update UI
        elements.methodsList.querySelectorAll('.method-item').forEach(item => {
            item.classList.toggle('active', item.dataset.method === methodName);
        });

        elements.selectedMethodName.textContent = `${methodName}()`;

        // Get method params (demo data)
        const params = getMethodParams(state.selectedInterface.name, methodName);
        renderParamsForm(params);
        updateGeneratedCode();

        elements.executeBtn.disabled = !state.mojoAvailable;
        elements.resetBtn.disabled = false;
    }


    function getMethodParams(interfaceName, methodName) {
        let ifaceMetadata = null;
        // 0. Prioritize current selected interface if names match (avoids collisions for same-named interfaces across modules)
        if (state.selectedInterface && (state.selectedInterface.name === interfaceName || interfaceName.endsWith('.' + state.selectedInterface.name))) {
            ifaceMetadata = state.selectedInterface;
        }

        // 1. Fallback look up from metadata registry
        if (!ifaceMetadata) {
            ifaceMetadata = state.interfaces.find(i => i.name === interfaceName);
        }

        // If not found by exact match, try matching by suffix (e.g. blink.mojom.Foo vs Foo)
        if (!ifaceMetadata) {
            ifaceMetadata = state.interfaces.find(i =>
                i.name.endsWith('.' + interfaceName) || interfaceName.endsWith('.' + i.name)
            );
        }

        // If called from Manual Execution (selectMethod), state.selectedInterface is reliable
        if (!ifaceMetadata && state.selectedInterface && state.selectedInterface.name === interfaceName) {
            ifaceMetadata = state.selectedInterface;
        }

        // Delegate to the schema parser
        const resolved = resolveMethodSpecs(ifaceMetadata, methodName);
        return resolved ? resolved.parameters : null;
    }

    function findMethodDefinition(interfaceName, methodName) {
        // 1. Try resolving specs dynamically
        const resolved = resolveMethodSpecs({ name: interfaceName, module: null }, methodName);
        // Note: resolveMethodSpecs handles fuzzy interface lookup if we provide metadata

        // Actually, we need reliable metadata first.
        let iface = state.interfaces.find(i => {
            const fqn = i.module ? `${i.module}.${i.name}` : i.name;
            return fqn === interfaceName;
        });

        if (!iface) iface = state.interfaces.find(i => i.name === interfaceName); // Simple name
        if (!iface) iface = state.interfaces.find(i => i.name.endsWith('.' + interfaceName)); // Suffix

        if (iface) {
            const specs = resolveMethodSpecs(iface, methodName);
            if (specs) {
                return {
                    name: methodName,
                    parameters: specs.parameters,
                    responseParams: specs.responseParams
                };
            }

            // Fallback to parser results if dynamic resolution fails
            const m = iface.methods.find(m => {
                const mName = typeof m === 'string' ? m : m?.name;
                return mName && (mName === methodName || mName.toLowerCase() === methodName.toLowerCase());
            });
            if (m) return typeof m === 'string' ? { name: m } : m;
        }

        return null; // No definition found
    }

    // Helper for Array rendering
    window.reindexArrayItems = function (container, prefix) {
        if (!container) return;
        Array.from(container.children).forEach((item, index) => {
            // Update names in inputs
            // Helper to replace [x] with [index] in names
            const updateName = (el) => {
                if (el.name) {
                    // Replace the last [...] segment or typical array pattern
                    // Logic: replace `[oldIndex]` with `[index]`
                    // But specifically for this array's level.
                    // Simplified: Just use the prefix + [index] + suffix?
                    // Too complex to parse reliably.
                    // Alternative: just update the [index] that corresponds to THIS array.
                    // For now, simpler approach: names are mostly for debugging or manual mode.
                    // Manual mode requires correct paths.

                    // Let's try to infer from data-original-name or just patch the string.
                    // Assume name ends with `[digits]` or `[digits].subprop`
                    // This is hard.

                    // Better approach: Re-render? No.
                    // Let's rely on the fact that for Manual Mode, users might not delete/add complex nested arrays much?
                    // Actually, let's just use a monotonically increasing counter for names to avoid collision, 
                    // and rely on Order for value collection (Interceptor).
                    // For Manual Mode, `updateParamValue` maps names to object structure.
                    // If we have `arr[5]` and `arr[9]`, that creates a sparse array. 
                    // `JSON.stringify` will show nulls.
                    // That might be okay for Mojo (it might filter nulls? No array is strict).

                    // Robust Solution: reindex manually.
                    const inputs = item.querySelectorAll('[name]');
                    inputs.forEach(input => {
                        // naive replace of the specific index in the path?
                        // Difficult without knowing which [x] belongs to us.
                        // The input name is fully qualified: `a.b[0].c`.
                        // We want to change it to `a.b[index].c`.
                        // The prefix stored in data-prefix is `a.b`.
                        // Replace the last index in the name, which corresponds to THIS array's index
                        // Name format: prefix[oldIndex].suffix or prefix[oldIndex]
                        // We can't rely on prefix matching exactly due to complex nesting,
                        // but we know we are iterating over immediate children.
                        // The safest way: find the part of the name corresponding to this item's index.

                        // Actually, since we have the prefix (e.g. "param.list"), 
                        // and the input name is "param.list[5].subfield",
                        // we can replace the first occurrence of `[number]` after the prefix.

                        if (prefix && input.name.startsWith(prefix)) {
                            const suffix = input.name.substring(prefix.length);
                            // suffix starts with `[oldIndex]`
                            const newSuffix = suffix.replace(/^\[\d+\]/, `[${index}]`);
                            input.name = prefix + newSuffix;
                        } else if (input.name.startsWith('[')) {
                            // Root array case: `[oldIndex].subfield`
                            input.name = input.name.replace(/^\[\d+\]/, `[${index}]`);
                        }
                    });
                }
            };
            updateName(item); // Process the item itself if it's an input? Likely a wrapper.
            item.querySelectorAll('[name]').forEach(updateName);

            // Update label or badge if present?
            const label = item.querySelector('.array-index-label');
            if (label) label.textContent = index;
        });
        // Notify change for state inputs
        container.dispatchEvent(new Event('change', { bubbles: true }));
    };

    window.removeArrayItem = function (btn, prefix) {
        const item = btn.closest('.array-item, .map-entry');
        if (!item) return;
        const container = item.parentElement;
        item.remove();
        if (container) {
            reindexArrayItems(container, prefix);
            updateContainerCount(container);
        }
    };

    window.updateContainerCount = function (container) {
        const group = container.closest('.array-group, .map-group');
        if (!group) return;
        const badge = group.querySelector('.count-badge');
        if (badge) {
            const count = container.children.length;
            badge.textContent = `${count} ${count === 1 ? 'item' : 'items'}`;
        }
    };

    window.addArrayItem = function (btn) {
        const group = btn.closest('.array-group') || btn.closest('.map-group');
        const container = group.querySelector('.array-items-container') || group.querySelector('.map-entries-container');
        const template = group.querySelector('.item-template').innerHTML;
        const prefix = group.dataset.prefix;

        // Use current length as index for new item
        const index = container.children.length;

        let newItemHtml;
        if (!template || template.trim() === '') {
            const spec = window.MojoTemplateRegistry[group.id];
            if (spec) {
                let itemType = inferTypeFromMojomType(spec.elementSpec);
                if (itemType !== 'string16' && spec.structSpec) {
                    itemType = 'struct';
                }
                const itemParam = {
                    name: `[${index}]`,
                    type: itemType,
                    structSpec: spec.structSpec,
                    elementSpec: (spec.elementSpec.elementType || (spec.elementSpec.$ && spec.elementSpec.$.elementType)) || null
                };

                const siblingInput = group.querySelector('.param-input');
                const interceptId = siblingInput ? siblingInput.dataset.id : '';
                const isInterceptor = !!interceptId;

                newItemHtml = renderInput(itemParam, null, {
                    isInterceptor,
                    interceptId,
                    parentName: prefix,
                    isTemplate: false
                });
            } else {
                console.error("No template and no registry spec found for", group.id);
                return;
            }
        } else {
            newItemHtml = template.replace(/\{index\}/g, index);
        }

        // Create temp div to parse HTML
        const temp = document.createElement('div');
        temp.innerHTML = safeHTML(newItemHtml);
        // Actually templateHtml usually has one root element? No, renderedItems joining.
        // renderInput returns a string... wait.
        // My template generator wrapped it in nothing?
        // See code: `const templateHtml = renderItemHtml(...)`.
        // renderInput returns a `div.form-group` or string.

        // Wait, my loop code was:
        // `const renderedItems = items.map(...) => <div class="array-item">...</div>`
        // So the template should also represent the inner content of `.array-item`?
        // No, `renderItemHtml` returns the CONTENT of the item.
        // The wrapper `<div class="array-item">` is in the loop in `renderInput`.

        // I need to ensure the template includes the wrapper if I want consistent styling?
        // Or I construct the wrapper here.

        const wrapper = document.createElement('div');
        wrapper.className = 'array-item';

        // If templateHtml is just the input, we wrapper it.
        wrapper.innerHTML = safeHTML(`<div class="item-content">${newItemHtml}</div>
                        <button type="button" class="remove-item-btn" onclick="removeArrayItem(this, '${prefix || ''}')">&times;</button>`);

        container.appendChild(wrapper);
        updateContainerCount(container);

        // No need to reindex since we appended, unless we want to be safe.
        // But typically we should just valid index.
        container.dispatchEvent(new Event('change', { bubbles: true }));
    };

    function renderInput(param, value, options = {}) {
        const { isInterceptor, index, interceptId, parentName, isTemplate, depth } = options;

        const typeString = typeof param.type === 'object' ? param.type.type : param.type;
        let inputType = MojoParser.getInputType(typeString);

        // Special Handling for Common Mojo Types
        // 1. URL: Unwrap { arg_url: "..." } to simple string
        if (typeString === 'Url' || typeString.endsWith('.Url') || (typeof value === 'object' && value && (value.arg_url || value.url))) {
            const urlVal = value ? (value.arg_url || value.url || '') : '';
            return `
                <div class="form-group" data-original-name="${escapeHtml(param.name)}">
                    <label>
                        ${escapeHtml(param.name ? param.name.replace(/^arg_/, '') : '')}
                        <span class="type">Url</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ''}
                    </label>
                    <input type="text" 
                   class="intercept-input param-input" 
                           data-id="${interceptId}" 
                           data-index="${index}" 
                           data-type="url_wrapped" 
                           value="${escapeHtml(urlVal)}" 
                           placeholder="https://...">
                </div>`;
        }


        // 1.5 String16 and BigString16 (Prioritize over Struct)
        let effectiveType = param.type;
        if (effectiveType === 'struct' && param.structSpec) {
            const manualInfer = inferTypeFromMojomType(param.structSpec);
            if (manualInfer === 'string16' || manualInfer === 'bigstring16' || manualInfer === 'bigstring') {
                effectiveType = manualInfer;
            } else {
                if (param.structSpec.fields && param.structSpec.fields.length === 1 && param.structSpec.fields[0].name === 'data') {
                    if (value && value.data && typeof value.data === 'object') {
                        if ('bytes' in value.data || 'arg_bytes' in value.data || 'shared_memory' in value.data) {
                            effectiveType = 'bigstring16';
                        } else if (Array.isArray(value.data) || value.data.length !== undefined) {
                            effectiveType = 'string16';
                        }
                    }
                }
            }
        }

        if (effectiveType === 'string16') {
            let displayValue = value;
            const arrayData = value ? (value.arg_data || value.data) : null;
            if (arrayData && (Array.isArray(arrayData) || (arrayData.length !== undefined && typeof arrayData !== 'string'))) {
                try {
                    let u8;
                    if (arrayData instanceof Uint8Array) {
                        u8 = arrayData;
                    } else if (arrayData instanceof Uint16Array) {
                        u8 = new Uint8Array(arrayData.buffer, arrayData.byteOffset, arrayData.byteLength);
                    } else {
                        // Regular array
                        u8 = new Uint8Array(new Uint16Array(arrayData).buffer);
                    }
                    displayValue = new TextDecoder('utf-16le').decode(u8);
                } catch (e) {
                    displayValue = String.fromCharCode(...arrayData);
                }
            } else if (typeof value === 'object' && value !== null) {
                displayValue = safeStringify(sanitizeKeys(value), 2);
            }

            return `
                <div class="form-group" data-original-name="${escapeHtml(param.name)}">
                    <label>
                        ${escapeHtml(param.name ? param.name.replace(/^arg_/, '') : '')}
                        <span class="type">String16</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ''}
                    </label>
                    <textarea 
                           class="intercept-input param-input" 
                           data-id="${interceptId}" 
                           data-index="${index}" 
                           data-type="string16" 
                           placeholder="String16 value"
                           rows="2"
                           style="width: 100%; font-family: monospace;">${escapeHtml(displayValue)}</textarea>
                </div>`;
        }

        if (effectiveType === 'bigstring16') {
            let displayValue = value;
            const bigBuffer = value ? (value.arg_data || value.data) : null;
            let arrayData = null;

            if (bigBuffer) {
                if (bigBuffer.bytes) arrayData = bigBuffer.bytes;
                else if (bigBuffer.arg_bytes) arrayData = bigBuffer.arg_bytes;
            }

            if (arrayData && (Array.isArray(arrayData) || (arrayData.length !== undefined && typeof arrayData !== 'string'))) {
                try {
                    const u8 = (arrayData instanceof Uint8Array) ? arrayData : new Uint8Array(arrayData);
                    // Decode using TextDecoder (safe for large strings)
                    displayValue = new TextDecoder('utf-16le').decode(u8);
                } catch (e) {
                    displayValue = safeStringify(sanitizeKeys(value), 2);
                }
            } else if (typeof value === 'object' && value !== null) {
                displayValue = safeStringify(sanitizeKeys(value), 2);
            }

            return `
                <div class="form-group" data-original-name="${escapeHtml(param.name)}">
                    <label>
                        ${escapeHtml(param.name ? param.name.replace(/^arg_/, '') : '')}
                        <span class="type">BigString16</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ''}
                    </label>
                    <textarea
                           class="intercept-input param-input" 
                           data-id="${interceptId}" 
                           data-index="${index}" 
                           data-type="bigstring16" 
                           placeholder="BigString16 value"
                           rows="4"
                           style="width: 100%; font-family: monospace;">${escapeHtml(displayValue)}</textarea>
                </div>`;
        }

        if (effectiveType === 'bigstring') {
            let displayValue = value;
            const bigBuffer = value ? (value.arg_data || value.data) : null;
            let arrayData = null;

            if (bigBuffer) {
                if (bigBuffer.bytes) arrayData = bigBuffer.bytes;
                else if (bigBuffer.arg_bytes) arrayData = bigBuffer.arg_bytes;
            }

            if (arrayData && (Array.isArray(arrayData) || (arrayData.length !== undefined && typeof arrayData !== 'string'))) {
                try {
                    const u8 = (arrayData instanceof Uint8Array) ? arrayData : new Uint8Array(arrayData);
                    // Decode using TextDecoder (utf-8 for BigString)
                    displayValue = new TextDecoder('utf-8').decode(u8);
                } catch (e) {
                    displayValue = safeStringify(sanitizeKeys(value), 2);
                }
            } else if (typeof value === 'object' && value !== null) {
                displayValue = safeStringify(sanitizeKeys(value), 2);
            }

            return `
                <div class="form-group" data-original-name="${escapeHtml(param.name)}">
                    <label>
                        ${escapeHtml(param.name ? param.name.replace(/^arg_/, '') : '')}
                        <span class="type">BigString</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ''}
                    </label>
                    <textarea
                           class="intercept-input param-input" 
                           data-id="${interceptId}" 
                           data-index="${index}" 
                           data-type="bigstring" 
                           placeholder="BigString value"
                           rows="4"
                           style="width: 100%; font-family: monospace;">${escapeHtml(displayValue)}</textarea>
                </div>`;
        }

        // 2. Mojo Handles: Special Card UI
        const isHandleType = (typeof effectiveType === 'object' && effectiveType.type === 'mojo_handle') || effectiveType === 'mojo_handle' || typeString === 'mojo_handle';
        const isHandleValue = (value && value.__mojoType === 'Handle') ||
            (value && value.$ && value.proxy && typeof value.$ === 'object') ||
            (value && value.handle && value.handle.router_);

        if (isHandleType || isHandleValue) {
            let ifaceName = 'Unknown';
            let ifaceId = '0';
            let typeLabel = 'Mojo Handle';
            let currentAction = 'preserve';
            let isReceiver = false;

            if (value && value.__mojoType === 'Handle') {
                ifaceName = value.interface;
                ifaceId = value.interfaceId;
                typeLabel = value.isReceiver ? 'Pending Receiver' : 'Mojo Remote';
                currentAction = value.action || 'preserve';
                isReceiver = !!value.isReceiver;
            } else if (value && value.$ && value.proxy) {
                const meta = value.$;
                ifaceName = meta.interfaceName || (meta.proxy && meta.proxy.interfaceName) || 'Unknown';
                ifaceId = meta.interfaceId || (meta.proxy && meta.proxy.interfaceId) || '0';
                typeLabel = 'Mojo Remote';
            } else if (value && value.handle && value.handle.router_) {
                typeLabel = 'Pending Receiver';
                ifaceId = value.handle.interfaceId_ || '0';
                ifaceName = 'PendingReceiver';
                isReceiver = true;
            } else if (isHandleType) {
                // Manual Mode, no value yet.
                if (typeof effectiveType === 'object' && effectiveType.interface) {
                    ifaceName = effectiveType.interface;
                } else if (param.structSpec?.name) {
                    ifaceName = param.structSpec.name;
                }
                typeLabel = 'Mojo Handle';
                currentAction = 'new_pipe';
            }

            const displayName = escapeHtml(param.name ? param.name.replace(/^arg_/, '') : '');

            return `
                <div class="form-group handle-group" data-original-name="${escapeHtml(param.name)}">
                    <label>
                        ${displayName}
                        <span class="type">${typeLabel}</span>
                    </label>
                    <div class="mojo-handle-card ${currentAction === 'close' ? 'closed' : (currentAction === 'new_pipe' ? 'new' : '')}">
                        <div class="handle-icon">${currentAction === 'close' ? '❌' : (currentAction === 'new_pipe' ? '🆕' : '🔌')}</div>
                        <div class="handle-info">
                            <div class="handle-interface">${escapeHtml(ifaceName)}</div>
                            <div class="handle-meta">ID: ${escapeHtml(ifaceId)}</div>
                        </div>
                        <div class="handle-actions">
                            <select class="handle-action-select" onchange="
                                const card = this.closest('.mojo-handle-card');
                                const icon = card.querySelector('.handle-icon');
                                const customInput = card.querySelector('.handle-custom-input');
                                card.className = 'mojo-handle-card ' + (this.value === 'close' ? 'closed' : (this.value === 'new_pipe' ? 'new' : (this.value === 'use_handle' ? 'custom' : '')));
                                icon.textContent = (this.value === 'close' ? '❌' : (this.value === 'new_pipe' ? '🆕' : (this.value === 'use_handle' ? '🔢' : '🔌')));
                                customInput.style.display = this.value === 'use_handle' ? 'block' : 'none';
                                
                                // Update hidden input
                                const updateHidden = () => {
                                    this.nextElementSibling.value = JSON.stringify({
                                        __mojoType: 'Handle',
                                        interface: '${escapeHtml(ifaceName)}',
                                        interfaceId: '${escapeHtml(ifaceId)}',
                                        isReceiver: ${isReceiver},
                                        action: this.value,
                                        customHandle: customInput.value
                                    });
                                    this.dispatchEvent(new Event('change', {bubbles: true}));
                                };
                                updateHidden();
                                customInput.oninput = updateHidden;
                            ">
                                <option value="preserve" ${currentAction === 'preserve' ? 'selected' : ''}>Keep Original</option>
                                <option value="close" ${currentAction === 'close' ? 'selected' : ''}>Close Handle</option>
                                <option value="new_pipe" ${currentAction === 'new_pipe' ? 'selected' : ''}>New Pipe</option>
                                <option value="use_handle" ${currentAction === 'use_handle' ? 'selected' : ''}>Use Handle ID</option>
                            </select>
                            <input type="hidden" class="param-input" name="${escapeHtml(param.name)}" data-type="mojo_handle" value='${escapeHtml(JSON.stringify({ __mojoType: 'Handle', interface: ifaceName, interfaceId: ifaceId, isReceiver: isReceiver, action: currentAction }))}'>
                            <input type="number" class="handle-custom-input" placeholder="Handle ID" style="display:none; width: 100%; margin-top: 5px; padding: 4px; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-input); color: var(--text-main);">
                        </div>
                    </div>
                </div>
            `;
        }

        // 3. Structs: Recursive Rendering
        if (param.type === 'struct' && param.structSpec) {
            const childParams = mapFieldsToUIParams(param.structSpec.fields);
            const childValues = (value && typeof value === 'object') ? value : {};

            const renderedFields = childParams.map(p => {
                let pValue = childValues[p.name];
                if (pValue === undefined && p.name.startsWith('arg_')) {
                    pValue = childValues[p.name.substring(4)];
                }
                return renderInput(p, pValue, {
                    isInterceptor,
                    interceptId,
                    parentName: parentName ? `${parentName}.${param.name}` : param.name,
                    isTemplate
                });
            }).join('');

            return `
                <div class="form-group struct-group" 
                     data-type="struct" 
                     data-original-name="${escapeHtml(param.name)}">
                    <label style="cursor: pointer;" onclick="this.nextElementSibling.hidden = !this.nextElementSibling.hidden">
                        <span style="display:inline-block; transform: rotate(90deg); font-size: 0.8em;">&#10095;</span>
                        ${escapeHtml(param.name ? param.name.replace(/^arg_/, '') : '')}
                        <span class="type">Struct</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ''}
                    </label>
                    <div class="struct-content" style="padding-left: 10px; border-left: 2px solid var(--border-subtle); margin-left: 4px; margin-top: 4px;">
                        ${renderedFields}
                    </div>
                </div>`;
        }

        // 4. Arrays: Recursive List Rendering
        if (param.type === 'array' && param.elementSpec) {
            const items = (Array.isArray(value)) ? value : [];
            const prefix = parentName ? `${parentName}${param.name.startsWith('[') ? '' : '.'}${param.name}` : param.name;

            const renderItemHtml = (val, idx, options = {}) => {
                let itemType = inferTypeFromMojomType(param.elementSpec);
                const itemStructSpec = (param.elementSpec.$ && param.elementSpec.$.structSpec) ? param.elementSpec.$.structSpec : null;

                // Prioritize string16, but upgrade generic strings to struct if available
                if (itemType !== 'string16' && itemStructSpec) {
                    itemType = 'struct';
                }

                const itemParam = {
                    name: `[${idx}]`,
                    type: itemType,
                    structSpec: itemStructSpec,
                    elementSpec: (param.elementSpec.elementType || (param.elementSpec.$ && param.elementSpec.$.elementType)) || null
                };
                return renderInput(itemParam, val, {
                    isInterceptor,
                    interceptId,
                    parentName: prefix,
                    isTemplate: options.isTemplate || isTemplate
                });
            };

            const renderedItems = items.map((val, i) => `
                <div class="array-item">
                    <div class="item-content">${renderItemHtml(val, i)}</div>
                    <button type="button" class="remove-item-btn" onclick="removeArrayItem(this, '${prefix || ''}')">&times;</button>
                </div>
            `).join('');

            // Template for new items
            // If we are already inside a template (isTemplate=true), we do NOT generate the inner template to avoid infinite recursion.
            let templateHtml = '';

            // Generate a unique ID for this array container to link it to the registry
            const containerId = 'array_group_' + Math.random().toString(36).substr(2, 9);

            if (!isTemplate) {
                templateHtml = renderItemHtml(null, 'TEMPLATE_INDEX', { isTemplate: true })
                    .replace(/name="([^"]*?)\[TEMPLATE_INDEX\]"/g, 'name="$1[{index}]"');
            } else {
                // Register the spec for lazy loading
                window.MojoTemplateRegistry[containerId] = {
                    elementSpec: param.elementSpec,
                    structSpec: (param.elementSpec.$ && param.elementSpec.$.structSpec) ? param.elementSpec.$.structSpec : null,
                    type: param.type
                };
            }

            return `
                <div class="form-group array-group" 
                     id="${containerId}"
                     data-type="array" 
                     data-original-name="${escapeHtml(param.name)}"
                     data-prefix="${escapeHtml(prefix)}">
                    <label style="cursor: pointer;" onclick="this.nextElementSibling.hidden = !this.nextElementSibling.hidden">
                        <span style="display:inline-block; transform: rotate(90deg); font-size: 0.8em;">&#10095;</span>
                        ${escapeHtml(param.name ? param.name.replace(/^arg_/, '') : '')}
                        <span class="type">Array&lt;${inferTypeFromMojomType(param.elementSpec)}&gt;</span>
                        <span class="badge count-badge" style="margin-left: 8px; font-size: 0.8em; background: var(--bg-hover);">${items.length} ${items.length === 1 ? 'item' : 'items'}</span>
                    </label>
                    <div class="array-content" style="padding-left: 10px; border-left: 2px solid var(--border-subtle); margin-left: 4px; margin-top: 4px;">
                        <div class="array-items-container">
                            ${renderedItems}
                        </div>
                        <template class="item-template">${templateHtml}</template>
                        <button type="button" class="btn btn-secondary btn-small add-item-btn" 
                                onclick="addArrayItem(this)">+ Add Item</button>
                    </div>
                </div>`;
        }

        // 5. Maps: Key/Value Pairs
        if (param.type === 'map' && param.mapSpec) {
            let entries = [];
            if (Array.isArray(value)) {
                // Manual Mode State: [{key, value}, ...]
                entries = value.map(item => [item.key, item.value]);
            } else {
                const mapObj = (value && typeof value === 'object') ? value : {};
                entries = Object.entries(mapObj);
            }
            const prefix = parentName ? `${parentName}${param.name.startsWith('[') ? '' : '.'}${param.name}` : param.name;

            const renderEntryHtml = (entryKey, entryValue, idx) => {
                const keyParam = {
                    name: 'key',
                    type: inferTypeFromMojomType(param.mapSpec.key),
                };
                const valParam = {
                    name: 'value',
                    type: inferTypeFromMojomType(param.mapSpec.value),
                    structSpec: param.mapSpec.value && param.mapSpec.value.$ ? param.mapSpec.value.$.structSpec : null,
                    elementSpec: param.mapSpec.value && (param.mapSpec.value.elementType || param.mapSpec.value.$.elementType) || null,
                    mapSpec: param.mapSpec.value && (param.mapSpec.value.keyType || param.mapSpec.value.$.keyType) ? {
                        key: param.mapSpec.value.keyType || param.mapSpec.value.$.keyType,
                        value: param.mapSpec.value.valueType || param.mapSpec.value.$.valueType
                    } : null
                };

                const keyHtml = renderInput(keyParam, entryKey, { isInterceptor, interceptId, parentName: `${prefix}[${idx}]`, depth: (depth || 0) + 1 });
                const valHtml = renderInput(valParam, entryValue, { isInterceptor, interceptId, parentName: `${prefix}[${idx}]`, depth: (depth || 0) + 1 });

                return `
                        <div class="form-group struct-group map-entry" 
                             data-original-name="${idx === 'TEMPLATE_INDEX' ? 'TEMPLATE_INDEX' : idx}"
                             style="margin-bottom: 0;">
                            <div class="struct-content" style="display: flex; gap: 8px; align-items: flex-start;">
                                <div style="flex: 1;">${keyHtml}</div>
                                <div style="flex: 2;">${valHtml}</div>
                            </div>
                        </div>`;
            };

            const renderedEntries = entries.map((entry, i) => `
                    <div class="array-item" style="display: flex; align-items: flex-start; margin-bottom: 4px;">
                        <div style="flex-grow: 1;">${renderEntryHtml(entry[0], entry[1], i)}</div>
                        <button type="button" class="remove-item-btn" onclick="this.closest('.array-item').remove()" style="margin-left: 8px; padding: 4px 8px; background: transparent; border: 1px solid var(--border-subtle); color: var(--text-muted); cursor: pointer;">&times;</button>
                    </div>
                `).join('');

            const templateHtml = renderEntryHtml('', null, 'TEMPLATE_INDEX')
                .replace(/name="([^"]*?)\[TEMPLATE_INDEX\]"/g, 'name="$1[{index}]"');

            return `
                <div class="form-group map-group" 
                     data-type="map" 
                     data-original-name="${escapeHtml(param.name)}"
                     data-prefix="${escapeHtml(prefix)}"
                     style="margin-bottom: 8px;">
                    <label style="cursor: pointer;" onclick="this.nextElementSibling.hidden = !this.nextElementSibling.hidden">
                        <span style="display:inline-block; transform: rotate(90deg); font-size: 0.8em;">&#10095;</span>
                        ${escapeHtml(param.name ? param.name.replace(/^arg_/, '') : '')}
                        <span class="type">Map&lt;${inferTypeFromMojomType(param.mapSpec.keySpec)}, ${inferTypeFromMojomType(param.mapSpec.valueSpec)}&gt;</span>
                        <span class="badge count-badge" style="margin-left: 8px; font-size: 0.8em; background: var(--bg-hover);">${entries.length} ${entries.length === 1 ? 'item' : 'items'}</span>
                    </label>
                    <div class="map-content" style="padding-left: 10px; border-left: 2px solid var(--border-subtle); margin-left: 4px; margin-top: 4px;">
                        <div class="map-entries-container">
                            ${renderedEntries}
                        </div>
                        <template class="item-template">${templateHtml}</template>
                        <button type="button" class="btn btn-secondary btn-small add-item-btn" 
                                onclick="addArrayItem(this, true)">+ Add Entry</button>
                    </div>
                </div>`;
        }

        // 6. Unions: Discriminator + Active Field
        if (param.type === 'union' && param.structSpec) {
            const unionFields = mapFieldsToUIParams(param.structSpec.fields);

            if (!unionFields || unionFields.length === 0) {
                return `<div class="form-group error-state">Union ${escapeHtml(param.name)} has no fields.</div>`;
            }

            // Value for a Union is an object like { tag: value }
            // We need to find the active tag.
            let activeTag = unionFields[0].name; // Default to first
            let activeValue = undefined;

            if (value && typeof value === 'object') {
                const keys = Object.keys(value);
                // If we have keys, find the one that matches a field name
                for (const k of keys) {
                    if (unionFields.some(f => f.name === k)) {
                        activeTag = k;
                        activeValue = value[k];
                        break;
                    }
                }
            }

            const options = unionFields.map(f =>
                `<option value="${f.name}" ${f.name === activeTag ? 'selected' : ''}>${f.name.replace(/^arg_/, '')}</option>`
            ).join('');

            const renderedFields = unionFields.map(f => {
                const isHidden = f.name !== activeTag;
                // We pre-render all fields but hide inactive ones
                // We pass the activeValue ONLY to the active field to avoid confusion, 
                // or we could pass null to others.
                const val = f.name === activeTag ? activeValue : undefined;

                // We need to prevent ID conflicts if we render all? No, IDs are fine.
                return `
                    <div class="union-field" data-tag="${f.name}" ${isHidden ? 'hidden' : ''}>
                        ${renderInput(f, val, { isInterceptor, interceptId, parentName: parentName ? `${parentName}.${param.name}` : param.name, depth: (depth || 0) + 1 })}
                    </div>
                 `;
            }).join('');

            return `
                <div class="form-group union-group" 
                     data-type="union" 
                     data-original-name="${escapeHtml(param.name)}"
                     style="margin-bottom: 8px; border-left: 3px solid var(--primary); padding-left: 8px;">
                     <label>
                        ${escapeHtml(param.name ? param.name.replace(/^arg_/, '') : '')}
                        <span class="type">Union</span>
                     </label>
                     <div style="margin-bottom: 6px;">
                        <span class="badget">Active Member:</span>
                        <select class="union-discriminator" onchange="
                            const group = this.closest('.union-group');
                            const tag = this.value;
                            group.querySelectorAll('.union-field').forEach(el => el.hidden = (el.dataset.tag !== tag));
                            // Trigger change to update state
                            group.dispatchEvent(new Event('change', {bubbles: true}));
                        " style="padding: 2px 4px; border: 1px solid var(--border-subtle); border-radius: 4px; background: var(--bg-input); color: var(--text-main);">
                            ${options}
                        </select>
                     </div>
                     <div class="union-content">
                        ${renderedFields}
                     </div>
                </div>
             `;
        }

        let displayValue = value;

        // 2. BigBuffer: Handle as raw text/bytes
        if (typeString.endsWith('BigBuffer')) {
            // simplified display for big buffer
            inputType = 'textarea';
        }





        // Force textarea for 'json', complex types, or if it's a BigInt value (to allow editing as text)
        // Auto-switch to textarea if simple string is long or has newlines
        if (typeString === 'string' && typeof value === 'string' && (value.length > 50 || value.includes('\n'))) {
            inputType = 'textarea';
        }

        if (typeString === 'json' || typeString.includes('array') || typeString.includes('map') || (value && typeof value === 'object' && typeString !== 'string16' && typeString !== 'bigstring16' && typeString !== 'bigstring')) {
            inputType = 'textarea';
        }

        // Clean handling of BigInts/Objects for display
        if (typeof value === 'bigint') {
            displayValue = value.toString() + 'n';
            if (inputType === 'number') inputType = 'text';
        } else if (typeof value === 'object' && value !== null && typeString !== 'string16' && typeString !== 'bigstring16' && typeString !== 'bigstring') {
            // DEEP Sanitize before stringifying to remove inner arg_
            displayValue = safeStringify(sanitizeKeys(value), 2);
        } else if (value === undefined || value === null) {
            // Handle defaults if value is not provided (for Manual Form)
            if (!isInterceptor) {
                const def = MojoParser.getDefaultValue(typeString);
                if (def !== undefined) {
                    displayValue = def;
                    if (typeof def === 'object') displayValue = safeStringify(def, 2);
                } else if (typeString === 'json') {
                    displayValue = '{}';
                }
            }
        }

        // Attributes generation
        let attributes = '';
        if (isInterceptor) {
            attributes = `class="intercept-input param-input ${inputType === 'textarea' ? 'params-editor' : ''}"
                          name="${escapeHtml(param.name)}"
                          data-id="${interceptId}"
                          data-index="${index}"
                          data-type="${escapeHtml(typeString)}"`;
            if (inputType === 'textarea') attributes += ' style="min-height: 100px;"';
        } else {
            // Manual Form attributes
            const sep = param.name.startsWith('[') ? '' : '.';
            const fullName = parentName ? `${parentName}${sep}${param.name}` : param.name;
            attributes = `class="param-input" name="${escapeHtml(fullName)}" data-type="${escapeHtml(typeString)}"`;
        }

        const displayName = escapeHtml(param.name ? param.name.replace(/^arg_/, '') : '');

        if (inputType === 'checkbox') {
            return `
                <div class="form-group" data-original-name="${escapeHtml(param.name)}">
                    <label>
                        <input type="checkbox" ${attributes} ${displayValue ? 'checked' : ''}>
                        ${displayName}
                        <span class="type">${escapeHtml(typeString)}</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ''}
                    </label>
                </div>
            `;
        } else if (inputType === 'textarea') {
            return `
                <div class="form-group" data-original-name="${escapeHtml(param.name)}">
                    <label>
                        ${displayName}
                        <span class="type">${escapeHtml(typeString)}</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ''}
                    </label>
                    <textarea ${attributes} placeholder="Enter ${typeString}...">${escapeHtml(displayValue || '')}</textarea>
                </div>
            `;
        } else if (typeof param.type === 'object' && param.type.type === 'enum') {
            // Render Enum Dropdown
            let optionsHtml = '';
            const options = param.type.options || {};
            // Helper to find the key for the current value (if any)
            // displayValue might be the number.
            for (const [key, val] of Object.entries(options)) {
                const isSelected = (String(val) === String(displayValue));
                optionsHtml += `<option value="${val}" ${isSelected ? 'selected' : ''}>${escapeHtml(key)} (${val})</option>`;
            }

            return `
                 <div class="form-group" data-original-name="${escapeHtml(param.name)}">
                     <label>
                         ${displayName}
                         <span class="type">enum</span>
                         ${param.optional ? '<span class="optional">(optional)</span>' : ''}
                     </label>
                     <select class="param-input" data-type="enum" ${attributes} style="background:var(--bg-dark); color:var(--text-light); border:1px solid var(--border-color); padding:4px; border-radius:4px; width:100%;">
                         ${optionsHtml}
                     </select>
                 </div>
             `;
        } else {
            return `
                <div class="form-group" data-original-name="${escapeHtml(param.name)}">
                    <label>
                        ${displayName}
                        <span class="type">${escapeHtml(typeString)}</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ''}
                    </label>
                    <input type="${inputType === 'number' && typeof displayValue === 'string' && displayValue.endsWith('n') ? 'text' : inputType}"
                           ${attributes}
                           value="${escapeHtml(displayValue ?? '')}"
                           placeholder="Enter ${typeString}...">
                </div>
            `;
        }
    }

    window.parseInputValue = function (input) {
        const type = input.dataset.type;
        let val = input.value;

        if (input.type === 'checkbox') {
            val = input.checked;
        } else if (type === 'number' || input.type === 'number') {
            val = Number(val);
        } else if (type === 'int64' || type === 'uint64') {
            if (val.endsWith('n')) val = val.slice(0, -1);
            try { val = BigInt(val); } catch (e) { val = BigInt(0); }
        } else if (type === 'json' || (type && (type.includes('array') || type.includes('map') || type.includes('object')))) {
            try { val = JSON.parse(val); } catch (e) { }
        } else if (type === 'url_wrapped') {
            val = { url: val };
        } else if (type === 'string16') {
            // Convert string to array of char codes (uint16)
            const data = [];
            for (let i = 0; i < val.length; i++) {
                data.push(val.charCodeAt(i));
            }
            // Mojo Lite bindings often expect 'arg_' prefix for struct fields
            val = { arg_data: data };
        } else if (type === 'enum') {
            // Parse Enum value as integer
            val = parseInt(val, 10);
            if (isNaN(val)) val = 0; // Default safety
        } else if (type === 'bigstring16') {
            // Convert to Little Endian Uint16 bytes
            const bytes = [];
            for (let i = 0; i < val.length; i++) {
                const code = val.charCodeAt(i);
                bytes.push(code & 0xFF);
                bytes.push((code >> 8) & 0xFF);
            }
            // BigBuffer (union) -> bytes (array<uint8>)
            val = { arg_data: { arg_bytes: bytes } };
        } else if (type === 'bigstring') {
            // Convert to UTF-8 bytes
            const encoder = new TextEncoder(); // defaults to utf-8
            const u8 = encoder.encode(val);
            // Array.from needed because Mojo expects regular array, not TypedArray sometimes? 
            // Or TypedArray is fine. Let's send regular array to be safe.
            val = { arg_data: { arg_bytes: Array.from(u8) } };
        }
        return val;
    };

    window.collectFormData = function (container, isArray) {
        const result = isArray ? [] : {};
        const nodes = Array.from(container.children);

        nodes.forEach((node) => {
            let group = node;

            if (!group.classList.contains('form-group')) {
                const inner = group.querySelector('.form-group');
                if (inner) group = inner;
            }
            if (!group || !group.classList.contains('form-group')) return;

            let value;
            let key;

            if (group.classList.contains('struct-group')) {
                key = group.dataset.originalName;
                const content = group.querySelector('.struct-content');
                value = collectFormData(content, false);
            } else if (group.classList.contains('array-group')) {
                key = group.dataset.originalName;
                const content = group.querySelector('.array-items-container');
                value = collectFormData(content, true);
            } else if (group.classList.contains('map-group')) {
                key = group.dataset.originalName;
                const content = group.querySelector('.map-entries-container');
                value = {};
                if (content && content.children) {
                    const entries = collectFormData(content, true);
                    entries.forEach(entry => {
                        if (entry.key !== undefined) value[entry.key] = entry.value;
                    });
                }
            } else if (group.classList.contains('union-group')) {
                key = group.dataset.originalName;
                const activeTag = group.querySelector('.union-discriminator').value;
                if (activeTag) {
                    const activeContent = group.querySelector(`.union-field[data-tag="${activeTag}"]`);
                    // We need to collect the value from the active field NO MATTER WHAT
                    // The active field is a .form-group wrapper, so we need to recurse into it?
                    // But collectFormData iterates children.
                    // Let's create a temporary container or just target the input/content directly?
                    // Actually, activeContent contains the rendered input from renderInput.
                    // We can just call collectFormData on activeContent.parentNode? No.

                    // Better: The union-field div CONTAINS the rendered input from renderInput.
                    // renderInput returns a .form-group.
                    // So activeContent has a single .form-group child.
                    const innerGroup = activeContent.querySelector('.form-group');
                    if (innerGroup) {
                        const innerData = collectFormData({ children: [innerGroup] }, false);
                        // innerData is { fieldName: value }
                        // We want { activeTag: value }
                        // But wait, the inner field name IS the activeTag (usually args are named).
                        // Mojo Union JS format: { tag: value }
                        value = { [activeTag]: Object.values(innerData)[0] };
                    }
                }
            } else {
                const input = group.querySelector('.param-input');
                if (!input) return;

                // key fallback: dataset.originalName (Struct/Map), or input.name (Manual Primitive)
                key = group.dataset.originalName || input.name;
                if (!isArray && !key) return; // Should not happen for named params

                value = parseInputValue(input);
            }

            if (isArray) {
                result.push(value);
            } else {
                // Ensure key is valid string
                if (key) result[key] = value;
            }
        });
        return result;
    };

    function getInterceptorFormValues(id) {
        const formContainer = document.getElementById(`interceptForm_${id}`);
        if (!formContainer) return {};
        // Intercept params are named arguments, so return Object
        return collectFormData(formContainer, false);
    }

    function convertParamsObjectToArray(paramsObj, methodDef) {
        if (!methodDef || !methodDef.parameters) return [];
        return methodDef.parameters.map(p => {
            // paramsObj keys match p.name exactly (including arg_ prefix if present in mojom)
            // collectFormData uses dataset.originalName which is exact param.name
            return paramsObj[p.name];
        });
    }

    function renderInterceptorForm(paramsDef, values, interceptId) {
        if (!paramsDef || paramsDef.length === 0) {
            return `<div class="empty-state small"><p>No parameters</p></div>`;
        }

        const inputs = paramsDef.map((param, index) => {
            let value;
            if (Array.isArray(values)) {
                value = values[index];
            } else if (values && typeof values === 'object') {
                // Try exact name, then name without arg_ prefix (since values might be sanitized)
                value = values[param.name];
                if (value === undefined && param.name.startsWith('arg_')) {
                    value = values[param.name.substring(4)];
                }
            }
            return renderInput(param, value, { isInterceptor: true, index, interceptId });
        }).join('');

        return `<div id="interceptForm_${interceptId}">${inputs}</div>`;
    }


    function renderParamsForm(params) {
        if (!params || params.length === 0) {
            elements.paramsForm.innerHTML = safeHTML(`
                    <p>This method has no parameters</p>
                </div>
            `);
            return;
        }

        elements.paramsForm.innerHTML = safeHTML(params.map(param => {
            return renderInput(param, undefined, { isInterceptor: false });
        }).join(''));

        // Initialize state from default values in DOM
        // We use a small timeout to ensure DOM is ready? No, synchronous is fine.
        state.paramValues = collectFormData(elements.paramsForm, false);
        updateGeneratedCode();
    }

    function resolveNamespace(moduleName) {
        const parts = moduleName.split('.');

        // Try safe scope first (Universal Fix)
        if (typeof mojo !== 'undefined' && mojo.internal && mojo.internal.bindings) {
            let current = mojo.internal.bindings;
            let found = true;
            for (const part of parts) {
                if (current[part]) {
                    current = current[part];
                } else {
                    found = false;
                    break;
                }
            }
            if (found) return current;
        }

        return null;
    }

    function inferTypeFromMojomType(mojomType) {
        // Best effort mapping from runtime Mojo types to strings for UI
        if (!mojomType) return 'any';

        // Check availability of mojo global to avoid ReferenceError
        const mojoLib = (typeof mojo !== 'undefined') ? mojo : ((typeof Mojo !== 'undefined') ? Mojo : null);

        if (mojoLib && mojoLib.internal) {
            // generated bindings use mojo.internal.String etc.
            if (mojomType === mojoLib.internal.String) return 'string';
            if (mojomType === mojoLib.internal.Bool) return 'bool';

            // Specific handling for 64-bit types to ensure Text Input (BigInt support)
            if (mojomType === mojoLib.internal.Int64) return 'int64';
            if (mojomType === mojoLib.internal.Uint64) return 'uint64';

            if (mojomType === mojoLib.internal.Int8 ||
                mojomType === mojoLib.internal.Int16 ||
                mojomType === mojoLib.internal.Int32 ||
                mojomType === mojoLib.internal.Uint8 ||
                mojomType === mojoLib.internal.Uint16 ||
                mojomType === mojoLib.internal.Uint32 ||
                mojomType === mojoLib.internal.Float ||
                mojomType === mojoLib.internal.Double) return 'number';
        }



        // Explicitly handle String16 struct
        // mojomType is often a constructor function with a static $ property containing the spec
        if (mojomType) {
            const spec = mojomType.$ || mojomType;
            let name = spec.name || (spec.structSpec && spec.structSpec.name);

            // Discovery: If name is missing, try to find it in the global bindings namespace
            if (!name && typeof mojomType === 'object') {
                // Heuristic: Search mojo.internal.bindings for this object
                if (window.mojo && window.mojo.internal && window.mojo.internal.bindings) {
                    const findInObj = (obj, path = '') => {
                        if (obj === mojomType || (obj && obj.$ === spec)) return path;
                        if (!obj || typeof obj !== 'object' || seen.has(obj)) return null;
                        seen.add(obj);

                        for (const key in obj) {
                            const res = findInObj(obj[key], path ? `${path}.${key}` : key);
                            if (res) return res;
                        }
                        return null;
                    };
                    const seen = new WeakSet();
                    name = findInObj(window.mojo.internal.bindings);
                    if (name) {
                        // console.log(`[MojoGUI-Debug] Discovered name for unnamed type: ${name}`);
                    }
                }
            }

            if (name && (name === 'mojo_base.mojom.String16' || name.endsWith('.String16'))) {
                return 'string16';
            }
            if (name && (name === 'mojo_base.mojom.BigString16' || name.endsWith('.BigString16'))) {
                return 'bigstring16';
            }
            if (name && (name === 'mojo_base.mojom.BigString' || name.endsWith('.BigString'))) {
                return 'bigstring';
            }

            // Enum Detection:
            // Enums in Mojo Lite often appear as simple objects with integer values.
            // Some might lack metadata.
            if (mojomType && typeof mojomType === 'object') {
                // Check for "Mojo Enum" signatures
                const hasMeta = mojomType.MIN_VALUE !== undefined && mojomType.MAX_VALUE !== undefined;

                // Explicit Enum Spec check (e.g. { $: { enumSpec: ... } } or similar)
                // Also check discovered name
                let isEnumSpec = mojomType.$ && (
                    (mojomType.$.name && mojomType.$.name.includes('Enum')) ||
                    (mojomType.$.enumSpec) ||
                    (name && (name.includes('Enum') || name.endsWith('Spec'))) // Common in Lite
                );

                // Additional heuristic for unnamed Enum Specs returned by mojo.internal.Enum()
                if (!isEnumSpec && mojomType.$ && mojomType.$.isValidObjectKeyType === true && mojomType.$.arrayElementSize && mojomType.$.arrayElementSize(false) === 4) {
                    isEnumSpec = true;
                }

                if (hasMeta || isEnumSpec) {
                    // It's likely an Enum!
                    let options = {};
                    let foundOptions = false;

                    // If it's a Spec, try to find the Value object (sister object)
                    if (isEnumSpec && name && name.endsWith('Spec')) {
                        const baseName = name.substring(0, name.length - 4);
                        // Resolve the baseName from window.mojo.internal.bindings
                        const parts = baseName.split('.');
                        let current = window.mojo.internal.bindings;
                        for (const part of parts) {
                            if (current && current[part]) current = current[part];
                            else { current = null; break; }
                        }
                        if (current && current !== mojomType) {
                            // Found the Enum value object!
                            // console.log(`[MojoGUI-Debug] Found sister Enum object for ${name}: ${baseName}`);
                            for (const key in current) {
                                if (typeof current[key] === 'number' && key !== 'MIN_VALUE' && key !== 'MAX_VALUE' && key !== '$') {
                                    options[key] = current[key];
                                    foundOptions = true;
                                }
                            }
                        }
                    }

                    // Fallback to searching mojomType itself if not found in sister
                    if (!foundOptions) {
                        for (const key in mojomType) {
                            // Skip internal mojo properties and reverse mappings (if any)
                            if (typeof mojomType[key] === 'number' && key !== 'MIN_VALUE' && key !== 'MAX_VALUE' && key !== '$') {
                                options[key] = mojomType[key];
                                foundOptions = true;
                            }
                        }
                    }

                    if (foundOptions) {
                        return { type: 'enum', options: options };
                    }

                    // Fallback for Enums where we can't find values - at least mark as number
                    if (isEnumSpec) return 'number';
                }

                // Handle/Interface Detection:
                // Check the decode function to see if it's a handle or interface type
                if (spec.decode && typeof spec.decode === 'function') {
                    const decodeStr = spec.decode.toString();
                    if (decodeStr.includes('decodeHandle')) return 'mojo_handle';
                    if (decodeStr.includes('decodeInterfaceRequest') || decodeStr.includes('decodeInterfaceProxy') || decodeStr.includes('decodeAssociatedEndpoint')) {
                        // Try to get the actual interface name from the type property
                        if (spec.type) {
                            const typeSpec = spec.type.$ || spec.type;
                            const interfaceName = typeSpec.name || typeSpec.interfaceName || (typeSpec.structSpec && typeSpec.structSpec.name) || 'Mojo Interface';
                            // We return a structured type for these
                            return { type: 'mojo_handle', interface: interfaceName };
                        }
                        return 'mojo_handle';
                    }
                }
            }

        // Debug logging for description field specifically (Safe check)
        if (mojomType && mojomType.$ && mojomType.$.name && mojomType.$.name.includes('String16')) {
            console.log('[MojoGUI-Debug] Found String16-like type:', mojomType.$.name);
        }

        // Fallback: Check function name directly just in case (though less reliable)
        if (typeof mojomType === 'function' && mojomType.name === 'String16') {
            return 'string16';
        }

        if (typeof mojomType === 'string') return mojomType;
        return 'string'; // Default to string input for complex types so user can paste JSON/values
    }
}

    function resolveMethodSpecs(ifaceMetadata, methodName) {
        // Attempts to resolve parameters from the Loaded Bindings in the page
        if (ifaceMetadata && ifaceMetadata.module) {
            const simpleInterfaceName = ifaceMetadata.name.split('.').pop();
            const namespace = resolveNamespace(ifaceMetadata.module);

            if (namespace) {
                // Try exact match first (e.g. Vibrate)
                let pascalMethod = methodName.charAt(0).toUpperCase() + methodName.slice(1);

                // Helper to try find spec
                const findSpec = (suffix) => {
                    // Try methodName_Suffix
                    let p = `${simpleInterfaceName}_${methodName}_${suffix}`;
                    if (namespace[p]) return namespace[p];
                    // Try PascalMethod_Suffix
                    p = `${simpleInterfaceName}_${pascalMethod}_${suffix}`;
                    if (namespace[p]) return namespace[p];
                    return null;
                };

                const paramsWrapper = findSpec('ParamsSpec');
                const responseParamsWrapper = findSpec('ResponseParamsSpec');

                const result = { parameters: null, responseParams: null };

                if (paramsWrapper) {
                    const structSpec = paramsWrapper.$ ? paramsWrapper.$.structSpec : paramsWrapper.structSpec;
                    if (structSpec && structSpec.fields) {
                        result.parameters = mapFieldsToUIParams(structSpec.fields);
                    }
                }

                if (responseParamsWrapper) {
                    const structSpec = responseParamsWrapper.$ ? responseParamsWrapper.$.structSpec : responseParamsWrapper.structSpec;
                    if (structSpec && structSpec.fields) {
                        result.responseParams = mapFieldsToUIParams(structSpec.fields);
                    }
                }

                if (result.parameters || result.responseParams) return result;
            }
        }
        return null;
    }

    function mapFieldsToUIParams(fields) {
        let fieldsArray = fields;
        if (!fields) return [];

        if (!Array.isArray(fields) && typeof fields === 'object') {
            // Handle Union/Object-based fields: convert to array
            // console.log('[MojoGUI] Converting Object fields to Array:', fields);
            fieldsArray = Object.entries(fields).map(([key, spec]) => {
                // Ensure name property exists
                return { name: key, ...spec };
            });
            // Sort by ordinal to ensure consistent order
            fieldsArray.sort((a, b) => (a.ordinal || 0) - (b.ordinal || 0));
        }

        if (!Array.isArray(fieldsArray)) {
            // console.warn('[MojoGUI] mapFieldsToUIParams: fields is not an array', fields);
            return [];
        }

        return fieldsArray.map(field => {
            let type = 'any';
            let originalName = field.name;

            // Check for generated binding artifacts (nullable value structs)
            if (field.nullableValueKindProperties && field.nullableValueKindProperties.isPrimary) {
                originalName = field.nullableValueKindProperties.originalFieldName;
            }

            // Use the runtime type inference
            type = inferTypeFromMojomType(field.type);

            // Detect generic Structs (Nested objects)
            let structSpec = null;
            let elementSpec = null; // For arrays
            let mapSpec = null;     // For maps

            if (type !== 'string16' && field.type && field.type.$ && field.type.$.structSpec) {
                const sName = field.type.$.structSpec.name;
                if (sName && (sName === 'url.mojom.Url' || sName.endsWith('.Url'))) {
                    type = 'Url';
                } else {
                    type = 'struct';
                    structSpec = field.type.$.structSpec;
                }
            } else if (field.type && (field.type.elementType || (field.type.$ && (field.type.$.elementType || (field.type.$.arraySpec && field.type.$.arraySpec.elementType))))) {
                type = 'array';
                elementSpec = field.type.elementType || (field.type.$ && (field.type.$.elementType || field.type.$.arraySpec.elementType));
            } else if (field.type && (field.type.keyType || (field.type.$ && (field.type.$.keyType || (field.type.$.mapSpec && field.type.$.mapSpec.keyType))))) {
                type = 'map';
                const sourceSpec = field.type.keyType ? field.type : (field.type.$ && field.type.$.mapSpec ? field.type.$.mapSpec : field.type.$);
                mapSpec = {
                    key: sourceSpec.keyType,
                    value: sourceSpec.valueType
                };
            } else if (field.type && (field.type.unionSpec || (field.type.$ && field.type.$.unionSpec))) {
                type = 'union';
                // Union Spec extraction
                structSpec = field.type.unionSpec || field.type.$.unionSpec;
            }

            // Use original name without prefix (safe in function scope)
            // e.g. 'location' -> 'location'

            return {
                name: originalName,
                type: type,
                structSpec: structSpec,
                elementSpec: elementSpec,
                mapSpec: mapSpec,
                optional: !!field.nullable
            };
        }).filter(f => !f.name.endsWith('_$flag') && !f.name.endsWith('_$value'));
    }

    // ========================================
    // Code Generation
    // ========================================
    function updateGeneratedCode() {
        if (!state.selectedInterface) {
            elements.generatedCode.textContent = '// Select an interface and method to generate code';
            return;
        }

        const code = generateCode();
        // Use syntax highlighting and safeHTML
        const highlighted = highlightSyntax(code);
        elements.generatedCode.innerHTML = safeHTML(highlighted);
    }

    function generateCode(isExecution = false) {
        const iface = state.selectedInterface;
        const method = state.selectedMethod;

        if (!iface) return '// Select an interface';

        const moduleParts = iface.module.split('.');
        const namespace = moduleParts.join('.');

        let code = `// MojoJS Code for ${iface.name}${method ? '.' + method : ''}\n`;
        code += `// Module: ${iface.module}\n`;
        code += `// File: ${iface.file}\n\n`;

        if (!method) {
            code += `// Step 1: Get the interface remote\n`;
            code += `// The binding file defines the interface strictly in 'mojo.internal.bindings'\n`;
            code += `const root = mojo.internal.bindings.${namespace};\n\n`;

            code += `let ${iface.name.toLowerCase()}Remote;\n`;
            code += `if (typeof root.${iface.name}.getRemote === 'function') {\n`;
            code += `    ${iface.name.toLowerCase()}Remote = root.${iface.name}.getRemote();\n`;
            code += `} else {\n`;
            code += `    ${iface.name.toLowerCase()}Remote = new root.${iface.name}Remote();\n`;
            code += `    const receiver = ${iface.name.toLowerCase()}Remote.bindNewPipeAndPassReceiver();\n`;
            code += `    const handle = receiver.handle || receiver;\n`;
            code += `    Mojo.bindInterface("${iface.module + '.' + iface.name}", handle, "context");\n`;
            code += `}\n`;
            code += `// Select a method to see the full call...`;
            return code;
        }

        const remoteName = iface.name.charAt(0).toLowerCase() + iface.name.slice(1) + 'Remote';
        const methodName = method.charAt(0).toLowerCase() + method.slice(1);

        code += `// Define Root Namespace\n`;
        code += `const root = mojo.internal.bindings.${namespace};\n\n`;

        code += `// Get remote for the interface\n`;
        code += `let ${remoteName};\n`;
        
        if (state.isAssociated) {
            const masterHandleId = state.masterHandleId || '/* INSERT_MASTER_HANDLE_ID */';
            const interfaceId = state.interfaceId || '/* INSERT_INTERFACE_ID */';
            
            code += `// Associated Interface Binding\n`;
            code += `// Requires an existing Master Pipe Handle (e.g. from a parent interface interception)\n`;
            code += `const masterHandle = { value: ${masterHandleId} }; // Wrap raw handle ID\n`;
            code += `const router = new mojo.internal.interfaceSupport.Router(masterHandle);\n`;
            code += `const endpoint = new mojo.internal.interfaceSupport.Endpoint(router, ${interfaceId});\n`;
            code += `${remoteName} = new root.${iface.name}Remote(endpoint);\n`;
        } else {
            code += `if (typeof root.${iface.name}.getRemote === 'function') {\n`;
            code += `    ${remoteName} = root.${iface.name}.getRemote();\n`;
            code += `} else {\n`;
            code += `    // Manual binding for Lite bindings without getRemote()\n`;
            code += `    ${remoteName} = new root.${iface.name}Remote();\n`;
            code += `    const receiver = ${remoteName}.bindNewPipeAndPassReceiver();\n`;
            code += `    const handle = receiver.handle || receiver;\n`;
            code += `    // Default to 'context' scope for safety, can be 'process'\n`;
            code += `    Mojo.bindInterface("${iface.module + '.' + iface.name}", handle, "context");\n`;
            code += `}\n`;
        }
        code += `\n`;

        // Generate method call with params
        const paramsDef = getMethodParams(state.selectedInterface.name, method);
        const args = [];

        if (paramsDef && paramsDef.length > 0) {
            code += `// Method parameters\n`;
            paramsDef.forEach(p => {
                const key = p.name;
                // Strip 'arg_' from variable name if present
                const safeVarName = key.startsWith('arg_') ? key.substring(4) : key;
                let value = state.paramValues[key];

                // Logic needed for Execution:
                // If isExecution=true, we reconcile keys (add arg_).
                // If isExecution=false (Display), we keep them clean.
                if (isExecution && value && typeof value === 'object') {
                    // Disable heuristics for Execution because state.paramValues keys come from form inputs 
                    // which already have correct names (with arg_ prefix if needed).
                    value = reconcileKeys(value, null, false);
                }

                let valueStr;
                if (typeof value === 'bigint') {
                    valueStr = value.toString() + 'n';
                } else if (p.type === 'map' && Array.isArray(value)) {
                    // Fix for Manual Mode: Convert Array of {key, value} entries back to Map Object
                    const mapObj = {};
                    value.forEach(item => {
                        if (item.key !== undefined) mapObj[item.key] = item.value;
                    });
                    // Reconcile keys on the constructed object if needed
                    // Disable heuristics here too as we just built it from form data
                    const processedMap = isExecution ? reconcileKeys(mapObj, null, false) : mapObj;
                    valueStr = safeStringify(processedMap);
                } else {
                    valueStr = typeof value === 'string' ? `"${value}"` : safeStringify(value);
                }

                // If value is undefined (optional/skipped), we might want to pass null or undefined
                // But for the generated code, let's show what's in the state or null
                const safeValue = valueStr === undefined ? 'null' : valueStr;

                code += `const ${safeVarName} = ${safeValue};\n`;
                args.push(safeVarName);
            });
            code += `\n`;
        }

        code += `// Call the method\n`;
        code += `try {\n`;
        if (args.length > 0) {
            code += `  const result = await ${remoteName}.${methodName}(${args.join(', ')});\n`;
        } else {
            code += `  const result = await ${remoteName}.${methodName}();\n`;
        }
        code += `  console.log('Success:', result);\n`;
        code += `} catch (error) {\n`;
        code += `  console.error('Error:', error);\n`;
        code += `}`;

        return code;
    }

    function highlightSyntax(code) {
        // Escape HTML
        let escaped = code
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        // Define patterns (Order matters for priority!)
        const patterns = {
            comment: /\/\/.*$|\/\*[\s\S]*?\*\//,
            string: /'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`/,
            // Regex literals: Simplified version to avoid catastrophic backtracking, matches common cases
            regex: /\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[gimuy]*/,
            keyword: /\b(const|let|var|function|return|new|async|await|if|else|try|catch|throw|import|from|export|class|extends|static|yield|debugger|switch|case|default|for|while|do|break|continue|typeof|instanceof|void|delete)\b/,
            builtin: /\b(this|window|document|console|mojo|Mojo|InterceptorManager|MojoProxyRegistry|MojoProxy|MojoBindings|JSON|Math|Date|Promise|Error)\b/,
            const: /\b(true|false|null|undefined|NaN|Infinity)\b/,
            number: /\b(?:0x[a-fA-F0-9]+|0b[01]+|0o[0-7]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)n?\b/,
            property: /\.[a-zA-Z_$][\w$]*/,
            class: /\b[A-Z][a-zA-Z0-9_$]*\b/,
            function: /\b[a-zA-Z_$][\w$]*(?=\()/,
            operator: /[+\-*/%=&|!^~<>?:]+/
        };

        // Construct combined regex with named groups: (?<name>pattern)|...
        const combinedSource = Object.entries(patterns)
            .map(([name, regex]) => `(?<${name}>${regex.source})`)
            .join('|');

        const combinedRegex = new RegExp(combinedSource, 'gm');

        return escaped.replace(combinedRegex, (...args) => {
            const groups = args.pop(); // Last arg is groups object in replace callback for named groups
            const match = args[0]; // Full match

            for (const [name, groupMatch] of Object.entries(groups)) {
                if (groupMatch !== undefined) {
                    if (name === 'property') {
                        // Property includes the dot, highlight only the name
                        return `.<span class="property">${match.substring(1)}</span>`;
                    }
                    if (name === 'class') {
                        // Heuristic: Don't highlight ALL CAPS as class (usually constants) unless it looks like a type
                        if (match === match.toUpperCase() && match.length > 1) return match;
                    }
                    return `<span class="${name}">${match}</span>`;
                }
            }
            return match;
        });
    }

    // ========================================
    // Actions
    // ========================================
    async function copyCode() {
        const code = generateCode();

        try {
            await navigator.clipboard.writeText(code);
            showToast('Code copied to clipboard!', 'success');
        } catch (error) {
            // Fallback
            const textarea = document.createElement('textarea');
            textarea.value = code;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            showToast('Code copied to clipboard!', 'success');
        }
    }

    async function executeCode() {
        if (!state.mojoAvailable) {
            showToast('MojoJS is not available. Enable with --enable-blink-features=MojoJS', 'error');
            return;
        }

        const code = generateCode(true); // true = isExecution (add arg_)
        const interfaceName = state.selectedInterface?.name || 'Unknown';
        const methodName = state.selectedMethod || 'Unknown';

        const manualId = 'manual_' + Date.now();
        // Use existing interfaceName/methodName from scope

        // Ensure Activity Panel is visible
        showInterceptorPanel(true);

        const startTime = performance.now();

        try {
            // Use script injection approach that works with Trusted Types
            // Wrap code in an async IIFE that stores result in window
            const wrappedCode = `
            (async () => {
                "use strict";
                try {
                    ${code}
                    window.__mojoExecuteResult = { success: true, result: typeof result !== 'undefined' ? result : null };
                } catch (error) {
                    window.__mojoExecuteResult = { success: false, error: error.message, stack: error.stack };
                }
                window.dispatchEvent(new Event('mojoExecuteComplete_${manualId}'));
            })();
        `;

            // Create promise to wait for execution
            const resultPromise = new Promise((resolve) => {
                window.addEventListener(`mojoExecuteComplete_${manualId}`, function handler() {
                    window.removeEventListener(`mojoExecuteComplete_${manualId}`, handler);
                    resolve(window.__mojoExecuteResult);
                    delete window.__mojoExecuteResult;
                });
            });

            // Create script element with trusted script
            const script = document.createElement('script');
            if (trustedPolicy) {
                script.textContent = trustedPolicy.createScript(wrappedCode);
            } else {
                script.textContent = wrappedCode;
            }
            document.head.appendChild(script);
            document.head.removeChild(script);

            // Wait for result
            const result = await resultPromise;
            // Interceptor handles the traffic logging.
            if (!result.success) {
                showToast('Execution Error: ' + result.error, 'error');
            }

        } catch (e) {
            showToast('Script Injection Error: ' + e.toString(), 'error');
        }
    }



    function resetParams() {
        state.paramValues = {};
        if (state.selectedMethod) {
            const params = getMethodParams(state.selectedInterface.name, state.selectedMethod);
            renderParamsForm(params);
            updateGeneratedCode();
        }
    }

    function clearResults() {
        elements.executionResults.innerHTML = safeHTML(`
            <div class="empty-state small">
                <p>Results will appear here</p>
            </div>
        `);
    }

    // ========================================
    // Interceptor Logic
    // ========================================
    function toggleInterceptor() {
        if (!state.selectedInterface) {
            showToast('Select an interface first', 'warning');
            return;
        }

        // Use Fully Qualified Name if available (module + . + name)
        // MojoInterfaceInterceptor for Blink services usually requires FQN OR the Name_ string
        // If module is present, try FQN.
        const shortName = state.selectedInterface.name;
        const moduleName = state.selectedInterface.module;

        // Try FQN first if module exists
        const nameTypeToUse = (moduleName && moduleName.length > 0) ? `${moduleName}.${shortName}` : shortName;

        const isActive = InterceptorManager.toggle(nameTypeToUse);

        updateInterceptButtonState(isActive, nameTypeToUse);

        if (isActive) {
            showToast(`Blocking ${nameTypeToUse}`, 'success');
            // Show panel
            showInterceptorPanel(true);
        } else {
            showToast(`Logging ${nameTypeToUse}`, 'info');
        }
    }

    // State for Selective Interception (Auto-Forwarding)
    // Key: "InterfaceName.MethodName" -> true (Auto Forward / Ignored)
    state.autoForwardMethods = new Set();

    function updateInterceptButtonState(isActive, interfaceName = null) {
        // 1. Update Main Detail Panel Button
        if (state.selectedInterface) {
            const currentFQN = state.selectedInterface.module ? `${state.selectedInterface.module}.${state.selectedInterface.name}` : state.selectedInterface.name;
            const currentShort = state.selectedInterface.name;

            if (!interfaceName || interfaceName === currentFQN || interfaceName === currentShort) {
                const targetName = interfaceName || currentFQN;
                const isRunning = InterceptorManager.isActive(targetName);
                const mode = InterceptorManager.getMode(targetName);
                const isBlocking = isRunning && mode === 'INTERCEPT';

                elements.interceptStatusDot.classList.toggle('active', isBlocking);
                elements.interceptToggleBtn.classList.toggle('active', isBlocking);
                const text = elements.interceptToggleBtn.childNodes[2];
                if (text) {
                    if (!isRunning) text.textContent = ' Intercept';
                    else text.textContent = isBlocking ? ' Blocking' : ' Logging';
                }
            }
        }

        // 2. Update Traffic Log Buttons (Granular Sync)
        const logButtons = document.querySelectorAll(`button[data-action="toggle-intercept"]`);
        logButtons.forEach(btn => {
            const btnIface = btn.dataset.interface;
            const btnMethod = btn.dataset.method;

            if (btnIface) {
                const isIfaceActive = InterceptorManager.isActive(btnIface);
                let isMethodActive = isIfaceActive;

                // If interface is active, check if this specific method is Auto-Forwarded (Ignored)
                // OR if we are in LOG mode (which is effectively Forwarding)
                const mode = InterceptorManager.getMode(btnIface);

                if (mode === 'LOG') {
                    isMethodActive = false; // LOG mode = Forwarding
                } else if (isIfaceActive && btnMethod) {
                    const key = `${btnIface}.${btnMethod}`;
                    if (state.autoForwardMethods.has(key)) {
                        isMethodActive = false;
                    }
                }

                btn.classList.toggle('active', isMethodActive);
                btn.textContent = isMethodActive ? 'Blocking' : 'Logging';
            }
        });
    }

    // Helper for Traffic Log Buttons
    window.toggleInterceptFromLog = function (ifaceName, methodName) {
        const isIfaceActive = InterceptorManager.isActive(ifaceName);
        const key = `${ifaceName}.${methodName}`;

        if (!isIfaceActive) {
            // Turning ON Interface. By default, Block everything 
            // "Intercept" on a method means "Make sure Interface is ON and this method is NOT ignored"
            InterceptorManager.toggle(ifaceName);
            state.autoForwardMethods.delete(key);
            showToast(`Started intercepting ${ifaceName}`, 'success');
        } else {
            // Interface is ALREADY ON.
            const mode = InterceptorManager.getMode(ifaceName);

            if (mode === 'LOG') {
                // In LOG mode (Logging). User clicked "Logging", so they want to BLOCK (Intercept).
                // Use shared toggle logic to switch to INTERCEPT mode.
                InterceptorManager.toggle(ifaceName);
                // Ensure this method is NOT ignored (so it blocks).
                state.autoForwardMethods.delete(key);
                showToast(`Switched ${ifaceName} to Blocking Mode`, 'success');
            } else {
                // Already in INTERCEPT mode. Toggle granular method blocking.
                if (state.autoForwardMethods.has(key)) {
                    // Was Ignored -> Enable Blocking
                    state.autoForwardMethods.delete(key);
                    showToast(`Resumed intercepting ${methodName}`, 'success');
                } else {
                    // Was Blocking -> Set to Ignore
                    state.autoForwardMethods.add(key);
                    showToast(`Logging ${methodName}`, 'info');
                }
            }
        }

        updateInterceptButtonState(true, ifaceName);
    };

    function clearActivityLog() {
        elements.interceptorTableBody.textContent = '';
        state.trafficCount = 0;
        if (elements.trafficBadge) {
            elements.trafficBadge.textContent = '0';
            elements.trafficBadge.style.display = 'none';
        }
        elements.interceptorDetails.innerHTML = safeHTML(`
            <div class="empty-state small">
                <p>Select a request to view details</p>
            </div>
        `);
    }

    function showInterceptorPanel(show) {
        state.panelVisible = show;

        if (show) {
            // Update header button to look active
            elements.viewTrafficBtn?.classList.add('active');

            // Hide standard panels
            elements.interfacePanel.style.display = 'none';
            elements.paramsPanel.style.display = 'none';

            // Show Interceptor Panel (Full Width)
            elements.interceptorPanel.style.display = 'flex';
        } else {
            // Update header button
            elements.viewTrafficBtn?.classList.remove('active');

            // Show standard panels
            elements.interfacePanel.style.display = 'block';
            elements.paramsPanel.style.display = 'block';

            // Hide Interceptor Panel
            elements.interceptorPanel.style.display = 'none';
        }
    }

    // Unified function to add rows to the table
    function addActivityRow(data) {
        // Ensure status is initialized
        if (!data.status) data.status = 'Pending';
        
        const { id, interface: iface, method, params, timestamp, type, status } = data;
        const rowId = `row_${id}`;

        // Correctly handle duplicates: Update existing row if ID matches
        // Use getElementById for absolute reliability
        const existingRow = document.getElementById(rowId);
        if (existingRow) {
            updateActivityRow(id, status || 'Pending', data.result);
            return;
        }

        const row = document.createElement('tr');
        row.id = rowId; // Set ID for fast lookup
        row.dataset.id = id;
        row.dataset.type = type || 'INTERCEPT'; // 'INTERCEPT' or 'MANUAL'
        if (data.proxyId) row.dataset.proxyId = data.proxyId;

        // Visual indicator for manual vs intercept
        let typeIcon = '📡';
        if (type === 'MANUAL') typeIcon = '🛠️';
        if (type === 'SYSTEM') typeIcon = '⚠️';

        let displayStatus = status;
        let statusClass = displayStatus === 'Done' ? 'active' : (displayStatus === 'Error' ? 'error' :
            (displayStatus === 'Logged' ? 'logged' : ''));

        // Check mode: LOG mode is effectively 'Logged' from the start
        if (data.mode === 'LOG' && type !== 'MANUAL') {
            displayStatus = 'Logged';
            statusClass = 'logged';
            data.status = 'Logged'; // Sync with details
        }

        row.innerHTML = safeHTML(`
            <td>
                ${new Date(timestamp).toLocaleTimeString()}
                <div style="font-size:0.8em;opacity:0.7;font-family:monospace;">${id}</div>
            </td>
            <td><span class="type-icon">${typeIcon}</span> ${escapeHtml(iface)}.${escapeHtml(method)}</td>
            <td><span class="status-dot ${statusClass}"></span> ${escapeHtml(displayStatus)}</td>
            <td>
                ${(type === 'INTERCEPT') ?
                (() => {
                    const isIfaceActive = typeof InterceptorManager !== 'undefined' && InterceptorManager.isActive(iface);
                    let isBtnActive = isIfaceActive;

                    // Check Mode: LOG mode is Logging (Inactive Button)
                    if (isIfaceActive && typeof InterceptorManager !== 'undefined') {
                        const mode = InterceptorManager.getMode(iface);
                        if (mode === 'LOG') {
                            isBtnActive = false;
                        } else if (state.autoForwardMethods.has(`${iface}.${method}`)) {
                            isBtnActive = false;
                        }
                    }

                    return `<button class="btn btn-small ${isBtnActive ? 'active' : ''}" data-action="toggle-intercept" data-interface="${escapeHtml(iface)}" data-method="${escapeHtml(method)}" onclick="event.stopPropagation(); window.toggleInterceptFromLog('${escapeHtml(iface)}', '${escapeHtml(method)}')">${isBtnActive ? 'Blocking' : 'Logging'}</button>`;
                })() :
                ''}
            </td>
        `);

        // Attach full details for the details view
        row.__details = data;
        row.addEventListener('click', () => showInterceptDetails(row.__details));

        elements.interceptorTableBody.prepend(row);
    }

    function updateActivityRow(id, status, resultData) {
        // Use getElementById for consistency with addActivityRow
        const row = document.getElementById(`row_${id}`);
        if (row) {
            const statusCell = row.cells[2];
            let displayStatus = status;
            let statusDotClass = status === 'Done' ? 'active' : (status === 'Error' ? 'error' : (status === 'Forwarded' ? 'logged' : ''));
            let colorStyle = status === 'Error' ? 'style="background:var(--error)"' : '';

            // Preserve 'Logged' status visual
            if (row.__details && (row.__details.status === 'Logged' || row.__details.mode === 'LOG')) {
                if (status === 'Done') {
                    displayStatus = 'Logged';
                    statusDotClass = 'logged';
                }
            }

            statusCell.innerHTML = safeHTML(`<span class="status-dot ${statusDotClass}" ${colorStyle}></span> ${escapeHtml(displayStatus)}`);

            // Merge result into the stored details so showInterceptDetails can display it
            if (row.__details) {
                row.__details.result = resultData;
                row.__details.status = status;

                // If this is currently selected, refresh the details view
                if (row.classList.contains('active')) {
                    showInterceptDetails(row.__details);
                }
            }
        } else {
            console.warn(`[UI] updateActivityRow failed: Row ${id} not found (row_${id}).`);
        }
    }

    function handleMojoIntercept(e) {
        state.trafficCount++;
        if (elements.trafficBadge) {
            elements.trafficBadge.textContent = state.trafficCount;
            elements.trafficBadge.style.display = 'inline-block';
        }

        // Check if we should Auto-Forward
        const autoForwardKey = `${e.detail.interface}.${e.detail.method}`;
        if (state.autoForwardMethods.has(autoForwardKey)) {
            // Auto-Forward: Resume immediately
            const proxy = MojoProxyRegistry.get(e.detail.proxyId);
            if (proxy) {
                proxy.resumeCall(e.detail.id, null, false); // false = don't drop, just continue
            }

            // Log as 'Logged' (Pending -> Done instantly)
            addActivityRow({
                ...e.detail,
                type: 'INTERCEPT',
                status: 'Logged' // Special status
            });
            return;
        }

        // Forward to unified handler
        addActivityRow({
            ...e.detail,
            type: 'INTERCEPT',
            status: 'Pending'
        });

        // Ensure panel is visible if not already
        if (elements.interceptorPanel.style.display === 'none') {
            // Optional: highlight tab
        }
    }

    function handleMojoResponse(e) {
        updateActivityRow(e.detail.id, 'Done', e.detail.result);
    }

    function handleMojoResponseIntercept(e) {
        const detail = e.detail;
        const row = elements.interceptorTableBody.querySelector(`tr[data-id="${detail.id}"]`);

        if (row) {
            // Update status to indicate we are editing response
            updateActivityRow(detail.id, 'Response Edit', detail.result);

            // If row is active, refresh detail view
            if (row.classList.contains('active')) {
                // Ensure detail includes result so we can edit it
                if (row.__details) {
                    row.__details.result = detail.result;
                    row.__details.status = 'Response Edit';
                    showInterceptDetails(row.__details);
                }
            }
        }
    }

    window.sendResponse = function (id) {
        let result = null;
        try {
            const formContainer = document.getElementById(`interceptForm_${id}_res`);
            if (formContainer) {
                // Try to map array values back to object keys if definition exists
                const values = getInterceptorFormValues(id + '_res');

                const row = document.querySelector(`tr[data-id="${id}"]`);
                const iface = row.__details.interface;
                const method = row.__details.method;
                const methodDef = findMethodDefinition(iface, method);

                if (methodDef && methodDef.responseParams) {
                    const keys = methodDef.responseParams.map(p => p.name);
                    result = {};
                    keys.forEach((key, i) => {
                        result[key] = values[key];
                    });
                } else {
                    // Fallback if no def found (shouldn't happen)
                    // console.warn('Form container exists but no def found for mapping?');
                    result = values;
                }
            } else {
                // Fallback textarea
                const textarea = document.getElementById(`interceptParams_${id}_res`);
                if (textarea) result = safeParse(textarea.value);
            }

            // SAFETY CHECK: If result is null but we expect a Struct (responseParams exists), return {}
            // This fixes crash in BatteryMonitor.queryNextStatus where it expects a struct but gets null.
            const row = document.querySelector(`tr[data-id="${id}"]`);
            if (row && row.__details) {
                const iface = row.__details.interface;
                const method = row.__details.method;
                const methodDef = findMethodDefinition(iface, method);

                if (result === null && methodDef && methodDef.responseParams && methodDef.responseParams.length > 0) {
                    // console.warn('[UI] Response is null but method expects parameters. Defaulting to empty object {} to prevent crash.');
                    result = {};
                }
            }

        } catch (e) {
            alert('Error parsing response: ' + e.message);
            return;
        }

        const row = document.querySelector(`tr[data-id="${id}"]`);
        const proxyId = row.dataset.proxyId;
        const proxy = MojoProxyRegistry.get(proxyId);

        if (proxy) {
            // Fix: Use reconcileKeys to restore original field names (e.g. status -> arg_status)
            const originalResult = (row && row.__details) ? row.__details.result : null;
            const restoredResult = reconcileKeys(result, originalResult);

            // console.log(`[UI] Sending Response for ${id}`, restoredResult);
            proxy.sendResponse(id, restoredResult);
            updateActivityRow(id, 'Done', restoredResult);
            showToast('Response Sent', 'success');
        }
    };

    function handleMojoError(e) {
        const { id, error } = e.detail;
        const row = elements.interceptorTableBody.querySelector(`tr[data-id="${id}"]`);

        if (!row) {
            // If row doesn't exist (e.g. system error or protocol mismatch), create one
            addActivityRow({
                id: id,
                interface: 'System',
                method: 'Error',
                params: null,
                timestamp: Date.now(),
                type: 'SYSTEM',
                status: 'Error',
                error: error
            });
            return;
        }

        updateActivityRow(id, 'Error', { error: error });
    }

    // ========================================
    // Parameter Sanitization (Strip/Restore arg_ prefix)
    // ========================================
    function sanitizeKeys(obj, seen = new WeakSet()) {
        if (obj === null || typeof obj !== 'object') return obj;
        if (seen.has(obj)) return '[Circular]';
        seen.add(obj);

        // Mojo Remote/Handle Detection:
        // These objects usually have a '$' property containing metadata and a 'proxy' property.
        // OR they are PendingReceivers with a 'handle' and 'router_'.
        if ((obj.$ && obj.proxy && typeof obj.$ === 'object') || (obj.handle && obj.handle.router_)) {
            if (obj.$ && obj.proxy) {
                const meta = obj.$;
                return {
                    __mojoType: 'Handle',
                    interface: meta.interfaceName || (meta.proxy && meta.proxy.interfaceName) || 'Unknown',
                    interfaceId: meta.interfaceId || (meta.proxy && meta.proxy.interfaceId) || 0,
                    namespace: meta.interfaceNameNamespace || ''
                };
            } else {
                return {
                    __mojoType: 'Handle',
                    interface: 'PendingReceiver',
                    interfaceId: obj.handle.interfaceId_ || 0,
                    namespace: ''
                };
            }
        }

        if (Array.isArray(obj)) return obj.map(v => sanitizeKeys(v, seen));

        const clean = {};
        for (const key in obj) {
            let cleanKey = key;
            // Only strip arg_ if it looks like a generated parameter name.
            // Ideally we would use the schema, but for general display, we assume ALL `arg_` 
            // at the TOP LEVEL or STRUCT LEVEL are params.
            // But inside a Map? We don't know without the schema.
            // Luckily, `sanitizeKeys` is mostly used for the simplified "Textarea" view or logging.
            // If the user sees "arg_myKey" in a Map, that's technically correct for the raw protocol.
            // BUT: The Protocol defines Map keys as just data. They normally DON'T get "arg_" prefix unless they are struct fields.
            // Wait. Mojo bindings ONLY add `arg_` to METHOD ARGUMENTS.
            // Struct fields do NOT get `arg_` prefix in the generated JS?
            // Let's verify.
            // If I have `struct Foo { int32 x; }`. JS object is `{ x: 1 }`.
            // If I have `method Bar(int32 y)`. JS params are `{ arg_y: 2 }`.
            // So `sanitizeKeys` should ONLY strip `arg_` from the top-level method arguments?
            // No, `renderInput` is recursive.
            // If I have `method Baz(Foo f)`. JS params `{ arg_f: { x: 1 } }`.
            // So `sanitizeKeys` on `{ arg_f: { x: 1 } }` -> `{ f: { x: 1 } }`.
            // The inner `x` does not have `arg_`.
            // So `sanitizeKeys` should only affect keys starting with `arg_`.
            // Does a Map key ever start with `arg_`? Yes, if the user put it there.
            // `sanitizeKeys` is purely visual to make the JSON "prettier" in textareas.
            // If I strip `arg_` from a map key `arg_user_input`, I change the data.
            // So `sanitizeKeys` IS dangerous for deep objects if it applies recursively to EVERYTHING.
            // 
            // Fix: Mojo bindings used to prefix struct fields too? No, usually just method params.
            // But let's look at `reconcileKeys`. It ADDS `arg_` back.
            // If `sanitizeKeys` removes it, `reconcileKeys` must put it back.
            // If we stop `sanitizeKeys` from recursing blindly, we are safer.
            // BUT: `sanitizeKeys` is used for `showInterceptDetails` fallback.
            // If we have a complex object, we want to see clean names.
            // Compounding factor: `app.js` assumes `arg_` everywhere for "System Keys".
            // Implementation: We should only strip `arg_` if we are reasonably sure it's a structural key.
            // But we don't have schema in `sanitizeKeys`.
            // Compromise: We keep `sanitizeKeys` as is (visual helper), BUT we rely on `renderInterceptorForm` (Schema-driven)
            // for the primary view. The "Fallback" textarea is just a backup.
            // However, `reconcileKeys` is CRITICAL for execution.
            // `reconcileKeys` tries to add `arg_` back.
            // If I have a Map { "key": "val" }, `reconcileKeys` might turn it into { "arg_key": "val" }.
            // THAT IS A BUG.
            // `reconcileKeys` must NOT touch Map keys.
            // But `reconcileKeys` doesn't know it's a Map without schema.
            // It just walks the object.
            // We successfully fixed `generateCode` to disable heuristics for Map values.
            // We should default `useHeuristics = false` for recursing into children unless we know they are struct fields?
            // No, we don't know.
            // The FIX was `reconcileKeys(value, null, false)` in `generateCode` for Map values.
            // That protects Execution Mode.
            // For Interception Resume: `resumeIntercept` uses `getInterceptorFormValues` which returns clean data,
            // then calls `reconcileKeys`.
            // IF the data came from `getInterceptorFormValues` (structured), we passed `useHeuristic = false`.
            // So `reconcileKeys` will NOT add `arg_` blindly.
            // It will only set keys that exist in `original` (which has `arg_`).
            // Map keys in `original` do NOT have `arg_`. So `reconcileKeys` leaves them alone.
            // So... the logic is actually sound?
            // Let's verify `reconcileKeys` logic one more time.

            // `if (original && original.hasOwnProperty('arg_' + key))` -> Restores arg_ param.
            // `else if (original && original.hasOwnProperty(key))` -> KEEPS original key (Map key).
            // `else ... if (useHeuristics ...)` -> Adds arg_ if likely param.

            // For Map keys:
            // 1. `original` has "myKey". `edited` has "myKey".
            // 2. `original` has NO "arg_myKey".
            // 3. `original` has "myKey".
            // 4. `originalKey` = "myKey".
            // 5. No heuristic. Correct.

            // For NEW Map keys (added by user in interceptor):
            // 1. `original` has NO "newKey".
            // 2. Fallthrough to Heuristics.
            // 3. `useHeuristics` is FALSE for Form Data.
            // 4. `originalKey` = "newKey".
            // 5. Correct.

            // For Textarea editing (Schema unknown/Fallback):
            // 1. User types `{ "x": 1 }`.
            // 2. We want `{ "arg_x": 1 }` if x is a param.
            // 3. `useHeuristics` is TRUE.
            // 4. `original` might be null (if new object) or missing keys.
            // 5. `originalKey` = "arg_x".
            // 6. This is GOOD for params.
            // 7. BAD for Maps? `{ "myMap": { "x": 1 } }`.
            // 8. If `myMap` is a param, it becomes `arg_myMap`.
            // 9. Inside recursion: `reconcileKeys({x:1}, ...)`
            // 10. `x` becomes `arg_x`.
            // 11. If `myMap` was a Map<String, Int>, `arg_x` is INVALID data.
            // 
            // So `reconcileKeys` WITH HEURISTICS is dangerous for nested Maps in Textarea mode.
            // But Textarea mode is a fallback or for raw JSON editing.
            // If the user edits raw JSON, they are expected to provide correct keys (including `arg_` if needed?).
            // Or we try to help them.
            // The current heuristic assumes "Recursive Structs" over "Maps".
            // Given Mojo uses Structs heavily for params, this is a reasonable default for the "Magic" mode.
            // And now that we have Full UI for Maps, users won't use Textarea for Maps often.
            // So I think the current logic is acceptable, provided the UI path is robust.

            // I will simplify `sanitizeKeys` slightly to be more readable but keep the logic.
            if (cleanKey.startsWith('arg_')) {
                cleanKey = cleanKey.substring(4);
            }
            clean[cleanKey] = sanitizeKeys(obj[key], seen);
        }
        return clean;
    }

    function reconcileKeys(edited, original, useHeuristics = true) {
        // Mojo Handle Restoration:
        // If the form sent back the structured Handle object (as a JSON string or object),
        // we process the requested action.
        let handleData = edited;
        if (typeof edited === 'string' && edited.startsWith('{"__mojoType":"Handle"')) {
            try { handleData = JSON.parse(edited); } catch(e) {}
        }

        if (handleData && typeof handleData === 'object' && handleData.__mojoType === 'Handle') {
            const action = handleData.action || 'preserve';
            if (action === 'preserve') return original;
            if (action === 'close') return null;
            if (action === 'new_pipe') {
                try {
                    const { handle0, handle1 } = Mojo.createMessagePipe();
                    // One handle is passed to the method, the other is kept.
                    // We return a mock object that works for Remote, Receiver, and Associated types.
                    const mockEndpoint = {
                        handle: handle1,
                        isPrimary: () => true,
                        releasePipe: () => handle1,
                        unbind: () => mockEndpoint
                    };
                    const mockRemote = {
                        proxy: {
                            endpoint: mockEndpoint,
                            unbind: () => mockEndpoint
                        },
                        handle: mockEndpoint
                    };
                    
                    // Log the created handle so user can find it
                    console.log(`[MojoGUI] Created new pipe. Passing Handle ID: ${handle1.value}, Local Handle ID: ${handle0.value}`);
                    // Maybe we should store handle0 somewhere accessible?
                    window.__lastCreatedMojoHandle = handle0;
                    
                    return mockRemote;
                } catch (e) {
                    console.error('[MojoGUI] Failed to create message pipe:', e);
                    return null;
                }
            }
            if (action === 'use_handle') {
                const handleId = parseInt(handleData.customHandle, 10);
                if (!isNaN(handleId)) {
                    // Create a mock handle wrapper for the existing handle ID
                    const mockHandle = { value: handleId };
                    const mockEndpoint = {
                        handle: mockHandle,
                        isPrimary: () => true,
                        releasePipe: () => mockHandle,
                        unbind: () => mockEndpoint
                    };
                     const mockRemote = {
                        proxy: {
                            endpoint: mockEndpoint,
                            unbind: () => mockEndpoint
                        },
                        handle: mockEndpoint
                    };
                    console.log(`[MojoGUI] Using existing Handle ID: ${handleId}`);
                    return mockRemote;
                }
            }
            return original;
        }

        // Backward compatibility for old simple string placeholder
        if (typeof edited === 'string' && (edited === '[Mojo Handle]' || edited.startsWith('[Mojo ')) && original && typeof original === 'object') {
            return original;
        }

        if (edited === null || typeof edited !== 'object') return edited;
        // Do NOT bail if original is null. usage: reconcileKeys(newItem, null)
        // We want to fall through to Heuristics loop.

        if (Array.isArray(edited)) {
            // Assume array order is preserved or just map
            return edited.map((v, i) => reconcileKeys(v, Array.isArray(original) ? original[i] : null, useHeuristics));
        }

        const restored = {};
        for (const key in edited) {
            let originalKey = key;
            // Check if 'arg_' + key exists in original
            if (original && original.hasOwnProperty('arg_' + key)) {
                originalKey = 'arg_' + key;
            } else if (original && original.hasOwnProperty(key)) {
                originalKey = key;
            } else {
                // If neither, and original is missing (or structural change), we depend on Heuristics.
                // Most Mojo fields generated use 'arg_' prefix.
                // We avoid adding it if the user ALREADY typed 'arg_' or for known metadata keys.
                // BUT: We only do this if useHeuristics is true (for Sanitized text inputs).
                // For Form-derived data, we trust the keys are already correct (they use data-original-name).
                if (useHeuristics && !key.startsWith('arg_') && !key.startsWith('$') && key !== 'uuid' && key !== 'ordinal') {
                    originalKey = 'arg_' + key;
                }
            }

            restored[originalKey] = reconcileKeys(edited[key], original && original[originalKey], useHeuristics);
        }
        return restored;
    }

    function showInterceptDetails(detail) {
        const { id, interface: iface, method, params } = detail;

        // Highlight row
        elements.interceptorTableBody.querySelectorAll('tr').forEach(tr => tr.classList.remove('active'));
        const row = elements.interceptorTableBody.querySelector(`tr[data-id="${id}"]`);
        if (row) row.classList.add('active');

        // Show details with action buttons
        const isPending = detail.status === 'Pending';
        const isManual = detail.type === 'MANUAL';

        const methodDef = findMethodDefinition(iface, method);
        let paramsHtml;

        // Special handling for Script interface (Job-like data)
        if (iface === 'Script') {
            const displayParams = typeof params === 'string' ? params : safeStringify(sanitizeKeys(params), 2);
            paramsHtml = `<div class="result-code" style="background: var(--bg-primary); border-color: var(--accent-primary);">${escapeHtml(displayParams)}</div>`;
            
            let resultHtml = '';
            if (detail.result || detail.status === 'Done' || detail.error || detail.status === 'Error') {
                if (detail.error || detail.status === 'Error') {
                    resultHtml = `<div class="result-section">
                                    <div class="result-section-title">Error</div>
                                    <div class="error-text code-block" style="border:none;background:transparent;padding:0;min-height:50px;">${escapeHtml(typeof detail.error === 'object' ? safeStringify(detail.error, 2) : detail.error)}</div>
                                  </div>`;
                } else {
                    resultHtml = `<div class="result-section">
                                    <div class="result-section-title">Result</div>
                                    <div class="result-code" style="border:none;background:transparent;padding:0;min-height:50px;">${escapeHtml(safeStringify(sanitizeKeys(detail.result), 2))}</div>
                                  </div>`;
                }
            }

            elements.interceptorDetails.innerHTML = safeHTML(`
                <div class="interceptor-actions">
                    <h4>${escapeHtml(iface)}: ${escapeHtml(method)}</h4>
                </div>
                <div class="details-column" style="margin-top:10px; flex: 1; display: flex; flex-direction: column;">
                    <h5>Script</h5>
                    ${paramsHtml}
                    ${resultHtml}
                </div>
            `);
            return;
        }

        if (methodDef && methodDef.parameters) {
            paramsHtml = `<div class="params-form-container">
                           ${renderInterceptorForm(methodDef.parameters, params, id)}
                           </div>`;
        } else {
            // Fallback for unknown methods or if no methodDef, sanitize keys for display
            // ALWAYS enable editing to allow Replay modification
            const displayParams = sanitizeKeys(params);
            paramsHtml = `<textarea id="interceptParams_${id}" class="params-editor">${escapeHtml(safeStringify(displayParams, 2))}</textarea>`;
        }

        let contentHtml = '';

        // If we have a result or error, use split view for compactness
        if (detail.result || detail.status === 'Done' || detail.error || detail.status === 'Error') {
            let responseHtml = '';

            if (detail.error || detail.status === 'Error') {
                responseHtml = `<div class="error-text code-block" style="border:none;background:transparent;padding:0;min-height:50px;">${escapeHtml(typeof detail.error === 'object' ? safeStringify(detail.error, 2) : detail.error)}</div>`;
            } else {
                // Try to use Nice GUI for Response if definition exists
                // Mojo definitions often store response params in 'responseParams' or similar
                // We will check methodDef.responseParams
                if (methodDef && methodDef.responseParams) {
                    // Editable if Response Edit, otherwise read-only look
                    const style = (detail.status === 'Response Edit') ? '' : 'opacity: 0.9;';
                    responseHtml = `<div class="params-form-container" style="${style}">
                                        ${renderInterceptorForm(methodDef.responseParams, detail.result, id + '_res')}
                                      </div>`;
                } else {
                    if (detail.status === 'Response Edit') {
                        // Editable Textarea for fallback
                        const displayParams = sanitizeKeys(detail.result);
                        responseHtml = `<textarea id="interceptParams_${id}_res" class="params-editor">${escapeHtml(safeStringify(displayParams, 2))}</textarea>`;
                    } else {
                        // Read-only view
                        responseHtml = `<div class="result-code" style="border:none;background:transparent;padding:0;min-height:50px;">${escapeHtml(safeStringify(sanitizeKeys(detail.result), 2))}</div>`;
                    }
                }
            }

            contentHtml = `
                <div class="details-split-view">
                    <div class="details-column">
                        <h5>Request</h5>
                        ${paramsHtml}
                    </div>
                    <div class="details-column">
                        <h5>Response</h5>
                        ${responseHtml}
                    </div>
                </div>
            `;
        } else {
            // Single view for pending
            contentHtml = `
                <div class="details-column" style="margin-top:10px;">
                    <h5>Request</h5>
                    ${paramsHtml}
                </div>
            `;
        }

        elements.interceptorDetails.innerHTML = safeHTML(`
            <div class="interceptor-actions">
                <h4>${escapeHtml(iface)}.${escapeHtml(method)}</h4>
                ${(isPending && !isManual) ? `
                <div class="action-buttons">
                    <button class="btn btn-primary btn-small" onclick="resumeIntercept('${id}', false)">Resume</button>
                    <button class="btn btn-small" onclick="resumeIntercept('${id}', true)">Drop</button>
                </div>
                ` : (!isPending && detail.status !== 'Response Edit') ? `
                <div class="action-buttons">
                    <button class="btn btn-primary btn-small" onclick="replayIntercept('${id}')">Replay</button>
                </div>
                ` : (detail.status === 'Response Edit') ? `
                <div class="action-buttons">
                    <button class="btn btn-primary btn-small" onclick="sendResponse('${id}')">Send Response</button>
                    <!-- Maybe Drop Response? Proxy doesn't support dropResponse explicitly, but we could just drop connection? For now just Send. -->
                </div>
                ` : ''}
            </div>
            ${contentHtml}
        `);
    }

    // Modify request function (globally accessible for onclick)
    window.resumeIntercept = function (id, drop) {
        let params = null;
        let useHeuristic = true;

        if (!drop) {
            const formContainer = document.getElementById(`interceptForm_${id}`);
            const row = document.getElementById(`row_${id}`);

            if (formContainer && row && row.__details) {
                // New logic: gather from form inputs AND map to array
                try {
                    const paramsObj = getInterceptorFormValues(id);
                    useHeuristic = false; // Form data has correct keys

                    // Convert Object back to Array using Method Definition
                    const iface = row.__details.interface;
                    const method = row.__details.method;
                    const methodDef = findMethodDefinition(iface, method);

                    if (methodDef && methodDef.parameters) {
                        params = convertParamsObjectToArray(paramsObj, methodDef);
                    } else {
                        // Fallback if no def found (shouldn't happen)
                        params = Object.values(paramsObj);
                    }
                } catch (e) {
                    showToast('Error parsing form values: ' + e.message, 'error');
                    return;
                }
            } else {
                // Fallback: old textarea logic
                const textarea = document.getElementById(`interceptParams_${id}`);
                if (textarea) {
                    try {
                        params = safeParse(textarea.value);
                    } catch (e) {
                        showToast('Invalid JSON params', 'error');
                        return;
                    }
                }
            }
        }

        if (params && !Array.isArray(params)) {
            showToast('Invalid Parameters: Must be an Array [...] of arguments.', 'error');
            return;
        }

        // Use consistent ID lookup
        const row = document.getElementById(`row_${id}`);
        if (!row) {
            console.error(`[UI] resumeIntercept: Row ${id} not found.`);
            return;
        }

        const proxyId = row.dataset.proxyId;

        if (drop) {
            // We need to call resumeCall on the proxy
            const proxy = MojoProxyRegistry.get(proxyId);
            if (proxy) {
                proxy.resumeCall(id, null, true);
                updateActivityRow(id, 'Dropped');
            }
        } else {
            const proxy = MojoProxyRegistry.get(proxyId);
            if (proxy) {
                // Reconcile keys with original source of truth
                const originalParams = (row && row.__details) ? row.__details.params : null;

                // Fix: params might contain JSON strings if they came from a textarea or specific form field
                // We need to parse them into objects for reconcileKeys to work
                if (Array.isArray(params)) {
                    params = params.map(p => {
                        if (typeof p === 'string') {
                            try { return JSON.parse(p); } catch (e) { return p; }
                        }
                        return p;
                    });
                }

                // Note: reconcileKeys expects Array vs Array if we pass Array.
                const restoredParams = reconcileKeys(params, originalParams, useHeuristic);

                proxy.resumeCall(id, restoredParams, false, state.interceptResponses);

                // Update UI immediately
                if (state.interceptResponses) {
                    updateActivityRow(id, 'Pending Response');
                } else {
                    updateActivityRow(id, 'Forwarded');
                }

                // Update history with modified params
                if (row && row.__details) {
                    row.__details.params = restoredParams;
                }
            } else {
                console.error(`[UI] Proxy ${proxyId} not found for call ${id}`);
            }
        }
    }

    window.replayIntercept = function (id) {
        let params = null;
        let useHeuristic = true;
        try {
            // Gather params from the UI (interceptForm or textarea)
            const formContainer = document.getElementById(`interceptForm_${id}`);
            const row = document.querySelector(`tr[data-id="${id}"]`);

            if (formContainer && row && row.__details) {
                const paramsObj = getInterceptorFormValues(id);
                useHeuristic = false;

                // Convert Object back to Array using Method Definition
                const iface = row.__details.interface;
                const method = row.__details.method;
                const methodDef = findMethodDefinition(iface, method);

                if (methodDef && methodDef.parameters) {
                    params = convertParamsObjectToArray(paramsObj, methodDef);
                } else {
                    params = Object.values(paramsObj);
                }

            } else {
                const textarea = document.getElementById(`interceptParams_${id}`);
                if (textarea) params = safeParse(textarea.value);
            }
        } catch (e) {
            showToast('Error parsing form values: ' + e.message, 'error');
            return;
        }

        if (params && !Array.isArray(params)) {
            showToast('Invalid Parameters: Must be an Array [...] of arguments.', 'error');
            return;
        }

        const row = document.querySelector(`tr[data-id="${id}"]`);
        if (!row || !row.__details) return;

        const detail = row.__details;
        const proxyId = detail.proxyId;
        const method = detail.method;

        const proxy = MojoProxyRegistry.get(proxyId);
        if (!proxy) {
            showToast('Proxy connection lost. Cannot replay.', 'error');
            return;
        }

        if (proxy.realRemote && typeof proxy.realRemote[method] === 'function') {
            try {
                const newId = 'replay_' + Date.now();

                // Fix: params might be JSON strings
                if (Array.isArray(params)) {
                    // console.log('[Replay] Params before execution:', params);
                    params = params.map(p => {
                        if (typeof p === 'string') {
                            try { return JSON.parse(p); } catch (e) { return p; }
                        }
                        return p;
                    });
                } else {
                    // console.log('[Replay] Params is NOT array:', params);
                }

                // Restore Mojo handles if present
                const originalParams = (row && row.__details) ? row.__details.params : null;
                const restoredParams = reconcileKeys(params, originalParams, useHeuristic);

                // Add new activity row for the replay
                addActivityRow({
                    id: newId,
                    interface: detail.interface,
                    method: method,
                    params: restoredParams, // Use restored params for display consistency? Or original?
                    timestamp: Date.now(),
                    type: 'MANUAL',
                    status: 'Replaying...',
                    proxyId: proxyId
                });

                // Show details for the new Replay row
                showInterceptDetails({ ...detail, id: newId, params: restoredParams, status: 'Replaying...', type: 'MANUAL', result: null, error: null });

                const resultPromise = proxy.realRemote[method](...restoredParams);

                if (resultPromise && resultPromise.then) {
                    resultPromise.then(res => {
                        updateActivityRow(newId, 'Done', res);
                        const activeRow = document.querySelector(`tr[data-id="${newId}"]`);
                        if (activeRow && activeRow.classList.contains('active')) {
                            showInterceptDetails({ ...detail, id: newId, params: params, result: res, status: 'Done', type: 'MANUAL' });
                        }
                    }).catch(err => {
                        updateActivityRow(newId, 'Error', { error: err.toString() });
                        const activeRow = document.querySelector(`tr[data-id="${newId}"]`);
                        if (activeRow && activeRow.classList.contains('active')) {
                            showInterceptDetails({ ...detail, id: newId, params: params, error: err.toString(), status: 'Error', type: 'MANUAL' });
                        }
                    });
                } else {
                    updateActivityRow(newId, 'Done', { result: 'Sent (No Response)' });
                }
            } catch (e) {
                showToast('Execution failed: ' + e.message, 'error');
            }
        } else {
            showToast(`Method ${method} not found on remote.`, 'error');
        }
    }

    // ========================================
    // Utilities
    // ========================================
    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        // Icon based on type
        let icon = 'ℹ️';
        if (type === 'success') icon = '✅';
        if (type === 'error') icon = '❌';
        if (type === 'warning') icon = '⚠️';

        toast.innerHTML = safeHTML(`
            <span class="toast-icon">${icon}</span>
            <span class="toast-message">${escapeHtml(message)}</span>
        `);

        // Create progress bar
        const progressBar = document.createElement('div');
        progressBar.className = 'toast-progress';
        toast.appendChild(progressBar);

        // Remove inline styles to rely on CSS
        elements.toastContainer.appendChild(toast);

        // Auto-remove
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // ========================================
    // MCP Server API
    // ========================================
    // Expose internal functions for scriptable MCP server access via CDP
    window.MojoGUI_API = {
        // ---- Interface Browsing ----
        /**
         * Get all loaded interfaces
         * @returns {Array} Array of interface objects
         */
        getInterfaces: async () => {
            if (!state.interfaces || state.interfaces.length === 0) {
                await loadInterfaces();
            }
            return state.interfaces;
        },
        /**
         * Search interfaces by name or module
         * @param {string} query - Search query
         * @returns {Array} Filtered interfaces
         */
        searchInterfaces: async (query) => {
            const interfaces = await window.MojoGUI_API.getInterfaces();
            const q = (query || '').toLowerCase();
            if (!q) return interfaces;
            return interfaces.filter(i =>
                i.name.toLowerCase().includes(q) ||
                i.module.toLowerCase().includes(q)
            );
        },
        /**
         * Get detailed information about an interface including methods
         * @param {string} name - Interface name (simple or fully qualified)
         * @returns {Object} Interface details with methods and parameters
         */
        getInterfaceDetails: async (name) => {
            const interfaces = await window.MojoGUI_API.getInterfaces();
            const isFQN = name.includes('.');
            let iface = interfaces.find(i =>
                (isFQN && (i.module + '.' + i.name === name)) ||
                (!isFQN && i.name === name)
            );
            if (!iface) return null;
            // Load binding if available
            if (iface.file && typeof MojoBindings !== 'undefined') {
                try {
                    await MojoBindings.loadBinding(iface.file);
                } catch (e) {
                    console.warn('[MojoGUI_API] Failed to load binding:', e);
                }
            }
            // Get method details with parameters
            const methods = (iface.methods || []).map(m => {
                const methodName = typeof m === 'string' ? m : m.name;
                const params = getMethodParams(iface.name, methodName);
                const methodDef = findMethodDefinition(iface.name, methodName);
                return {
                    name: methodName,
                    parameters: params || [],
                    responseParams: methodDef?.responseParams || null
                };
            });
            return {
                name: iface.name,
                module: iface.module,
                file: iface.file,
                methods
            };
        },
        // ---- Method Metadata ----
        getMethodParams: (iface, method) => getMethodParams(iface, method),
        findMethodDefinition: (iface, method) => findMethodDefinition(iface, method),
        // ---- Code Generation ----
        /**
         * Generate MojoJS code for calling a method
         * @param {string} ifaceName - Interface name
         * @param {string} methodName - Method name
         * @param {Object} params - Parameter values
         * @returns {string} Generated code
         */
        generateCode: async (ifaceName, methodName, params = {}) => {
            // Load binding first to ensure params can be resolved
            await MojoLoader.ensureBinding(ifaceName);

            // Temporarily set state for code generation
            const prevIface = state.selectedInterface;
            const prevMethod = state.selectedMethod;
            const prevParams = state.paramValues;
            const iface = state.interfaces.find(i => i.name === ifaceName || (i.module + '.' + i.name === ifaceName));
            if (!iface) return `// Interface not found: ${ifaceName}`;
            state.selectedInterface = iface;
            state.selectedMethod = methodName || null;
            state.paramValues = params || {};
            const code = generateCode(false);
            // Restore state
            state.selectedInterface = prevIface;
            state.selectedMethod = prevMethod;
            state.paramValues = prevParams;
            return code;
        },
        // ---- Execution ----
        /**
         * Execute a Mojo method with parameters
         * Uses existing generateCode and script execution logic
         * @param {string} ifaceName - Interface name
         * @param {string} methodName - Method name
         * @param {Object} params - Object of parameter key-value pairs
         * @returns {Object} Result or error
         */
        executeMethod: async (ifaceName, methodName, params = {}) => {
            if (!state.mojoAvailable) {
                return { error: 'MojoJS is not available' };
            }
            // Load binding
            await MojoLoader.ensureBinding(ifaceName);
            const iface = state.interfaces.find(i => i.name === ifaceName || (i.module + '.' + i.name === ifaceName));
            if (!iface) {
                return { error: `Interface not found: ${ifaceName}` };
            }
            // Temporarily set state for code generation (reuse existing logic)
            const prevIface = state.selectedInterface;
            const prevMethod = state.selectedMethod;
            const prevParams = state.paramValues;
            state.selectedInterface = iface;
            state.selectedMethod = methodName;
            state.paramValues = params;
            // Generate code using existing function (isExecution=true adds arg_ prefixes)
            const code = generateCode(true);
            // Restore state
            state.selectedInterface = prevIface;
            state.selectedMethod = prevMethod;
            state.paramValues = prevParams;
            // Execute using existing script injection pattern
            const execId = 'api_exec_' + Date.now();
            const wrappedCode = `
                (async () => {
                    "use strict";
                    try {
                        ${code}
                        window.__mojoExecuteResult_${execId} = { success: true, result: typeof result !== 'undefined' ? result : null };
                    } catch (error) {
                        window.__mojoExecuteResult_${execId} = { success: false, error: error.message, stack: error.stack };
                    }
                    window.dispatchEvent(new Event('mojoExecuteComplete_${execId}'));
                })();
            `;
            try {
                // Create promise to wait for execution
                const resultPromise = new Promise((resolve) => {
                    const handler = () => {
                        window.removeEventListener(`mojoExecuteComplete_${execId}`, handler);
                        const result = window[`__mojoExecuteResult_${execId}`];
                        delete window[`__mojoExecuteResult_${execId}`];
                        resolve(result);
                    };
                    window.addEventListener(`mojoExecuteComplete_${execId}`, handler);
                });
                // Create and execute script
                const script = document.createElement('script');
                if (trustedPolicy) {
                    script.textContent = trustedPolicy.createScript(wrappedCode);
                } else {
                    script.textContent = wrappedCode;
                }
                document.head.appendChild(script);
                document.head.removeChild(script);
                // Wait for and return result
                return await resultPromise;
            } catch (e) {
                return { success: false, error: e.message, stack: e.stack };
            }
        },
        // ---- Interceptor Control ----
        startInterceptor: (ifaceName, mode = 'INTERCEPT') => {
            if (typeof InterceptorManager === 'undefined') return false;
            return InterceptorManager.start(ifaceName, mode);
        },
        stopInterceptor: (ifaceName) => {
            if (typeof InterceptorManager === 'undefined') return;
            InterceptorManager.stop(ifaceName);
        },
        toggleInterceptor: (ifaceName) => {
            if (typeof InterceptorManager === 'undefined') return false;
            return InterceptorManager.toggle(ifaceName);
        },
        isInterceptorActive: (ifaceName) => {
            if (typeof InterceptorManager === 'undefined') return false;
            return InterceptorManager.isActive(ifaceName);
        },
        getInterceptorMode: (ifaceName) => {
            if (typeof InterceptorManager === 'undefined') return null;
            return InterceptorManager.getMode(ifaceName);
        },
        listActiveInterceptors: () => {
            if (typeof InterceptorManager === 'undefined') return [];
            return Array.from(InterceptorManager.interceptors.keys());
        },
        // ---- Intercepted Calls ----
        /**
         * Log a custom activity to the traffic log
         * @param {Object} data - Activity data (interface, method, params, etc.)
         * @returns {string} The activity ID
         */
        addActivity: (data) => {
            const id = data.id || 'act_' + Math.random().toString(36).substr(2, 9);
            const activityData = {
                id,
                timestamp: Date.now(),
                type: 'MANUAL',
                status: 'Pending',
                ...data
            };
            addActivityRow(activityData);
            return id;
        },
        /**
         * Update an existing activity in the traffic log
         * @param {string} id - Activity ID
         * @param {string} status - New status
         * @param {Object} result - Result data
         */
        updateActivity: (id, status, result) => {
            updateActivityRow(id, status, result);
        },
        /**
         * Get list of intercepted calls from the activity table
         * @returns {Array} Array of call details
         */
        getInterceptedCalls: () => {
            const rows = elements.interceptorTableBody?.querySelectorAll('tr') || [];
            
            // Local serialization helper to handle BigInt and Mojo objects for CDP
            // without stripping arg_ prefixes like sanitizeKeys does.
            const serializeForCDP = (obj, seen = new WeakSet()) => {
                if (obj === null || typeof obj !== 'object') {
                    if (typeof obj === 'bigint') return obj.toString() + 'n';
                    return obj;
                }
                if (seen.has(obj)) return '[Circular]';
                seen.add(obj);

                // Detect Mojo objects to avoid CDP serialization errors
                // Use the same detection logic as sanitizeKeys but structured for MCP/GUI editing
                if ((obj.$ && obj.proxy && typeof obj.$ === 'object') || (obj.handle && obj.handle.router_)) {
                    if (obj.$ && obj.proxy) {
                        const meta = obj.$;
                        return {
                            __mojoType: 'Handle',
                            interface: meta.interfaceName || (meta.proxy && meta.proxy.interfaceName) || 'Unknown',
                            interfaceId: meta.interfaceId || (meta.proxy && meta.proxy.interfaceId) || 0,
                            namespace: meta.interfaceNameNamespace || '',
                            isReceiver: false
                        };
                    } else {
                        return {
                            __mojoType: 'Handle',
                            interface: 'PendingReceiver',
                            interfaceId: obj.handle.interfaceId_ || 0,
                            namespace: '',
                            isReceiver: true
                        };
                    }
                }

                if (Array.isArray(obj)) return obj.map(v => serializeForCDP(v, seen));

                const result = {};
                for (const key in obj) {
                    try {
                        result[key] = serializeForCDP(obj[key], seen);
                    } catch (e) {
                        result[key] = "[Serialization Error]";
                    }
                }
                return result;
            };

            return Array.from(rows).map(row => {
                const details = row.__details || {};
                return {
                    id: row.dataset.id,
                    type: row.dataset.type,
                    proxyId: row.dataset.proxyId,
                    interface: details.interface,
                    method: details.method,
                    params: serializeForCDP(details.params),
                    status: details.status,
                    result: serializeForCDP(details.result),
                    error: details.error,
                    timestamp: details.timestamp
                };
            });
        },
        /**
         * Resume, modify, or drop an intercepted call
         * @param {string} id - Call ID
         * @param {Array} params - Modified parameters (null to use original)
         * @param {boolean} drop - Whether to drop the call
         * @param {boolean} interceptResponse - Whether to intercept the response
         */
        resumeCall: (id, params, drop = false, interceptResponse = false) => {
            const row = document.getElementById(`row_${id}`);
            if (!row) return { error: `Call not found: ${id}` };
            
            if (row.__details?.status !== 'Pending') {
                return { error: `Call ${id} is not in Pending status (current status: ${row.__details?.status})` };
            }

            const proxyId = row.dataset.proxyId;
            const proxy = window.MojoProxyRegistry?.get(proxyId);
            if (!proxy) return { error: `Proxy not found for call: ${id}` };
            if (drop) {
                proxy.resumeCall(id, null, true);
                updateActivityRow(id, 'Dropped');
                return { success: true, action: 'dropped' };
            }
            // Get original params if not provided
            const originalParams = row.__details?.params;
            const finalParams = params || originalParams;
            // Restore arg_ prefixes if needed
            const restoredParams = reconcileKeys(finalParams, originalParams, false);
            proxy.resumeCall(id, restoredParams, false, interceptResponse);
            if (interceptResponse) {
                updateActivityRow(id, 'Pending Response');
            } else {
                updateActivityRow(id, 'Forwarded');
            }
            return { success: true, action: 'resumed', interceptResponse };
        },
        /**
         * Send a modified response for an intercepted call
         * @param {string} id - Call ID
         * @param {Object} result - Modified result
         */
        sendResponse: (id, result) => {
            const row = document.getElementById(`row_${id}`);
            if (!row) return { error: `Call not found: ${id}` };

            if (row.__details?.status !== 'Response Edit') {
                return { error: `Call ${id} is not in Response Edit status (current status: ${row.__details?.status})` };
            }

            const proxyId = row.dataset.proxyId;
            const proxy = window.MojoProxyRegistry?.get(proxyId);
            if (!proxy) return { error: `Proxy not found for call: ${id}` };

            const originalResult = row.__details?.result;
            const restoredResult = reconcileKeys(result, originalResult);

            proxy.sendResponse(id, restoredResult);
            updateActivityRow(id, 'Done', restoredResult);
            return { success: true, action: 'sent_response' };
        },
        /**
         * Replay a captured call with optional parameter modifications
         * @param {string} id - Call ID from activity log
         * @param {Object} params - Optional modified parameters
         * @returns {Object} Result of the replay operation
         */
        replayCall: async (id, params = null) => {
            const row = document.getElementById(`row_${id}`) ||
                document.querySelector(`tr[data-id="${id}"]`);
            if (!row) return { error: `Call not found: ${id}` };

            const details = row.__details;
            if (!details) return { error: `No details found for call: ${id}` };

            const proxyId = row.dataset.proxyId;
            const proxy = window.MojoProxyRegistry?.get(proxyId);
            if (!proxy || !proxy.realRemote) {
                return { error: `Proxy not found or invalid for call: ${id}` };
            }

            const method = details.method;
            if (!method || typeof proxy.realRemote[method] !== 'function') {
                return { error: `Method ${method} not found on remote` };
            }

            try {
                // Use modified params or original
                const originalParams = details.params;
                let finalParams = params || originalParams;

                // Restore keys if needed
                if (params && typeof reconcileKeys === 'function') {
                    finalParams = reconcileKeys(params, originalParams, false);
                }

                // Execute the call
                const result = await proxy.realRemote[method](...(Array.isArray(finalParams) ? finalParams : [finalParams]));
                return { success: true, result };
            } catch (e) {
                return { success: false, error: e.message, stack: e.stack };
            }
        },
        // ---- State Access ----
        getState: () => ({
            mojoAvailable: state.mojoAvailable,
            selectedInterface: state.selectedInterface?.name || null,
            selectedMethod: state.selectedMethod,
            interfaceCount: state.interfaces.length,
            trafficCount: state.trafficCount,
            interceptResponses: state.interceptResponses
        }),
        /**
         * Set response interception mode
         * @param {boolean} enabled - Whether to intercept responses
         */
        setInterceptResponses: (enabled) => {
            state.interceptResponses = !!enabled;
            // Update UI toggle if present
            if (elements.interceptRespToggle) {
                elements.interceptRespToggle.checked = state.interceptResponses;
            }
            return state.interceptResponses;
        },
        // ---- Binding Loading ----
        ensureBinding: (ifaceName) => MojoLoader.ensureBinding(ifaceName)
    };

    // Start
    init();

})();
