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

        renderMethods(iface);
        renderParamsForm(null);
        updateGeneratedCode();

        // Auto-hide traffic log when switching interfaces
        if (state.panelVisible) {
            showInterceptorPanel(false);
        }
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
            const m = iface.methods.find(m => m.name === methodName || m.name.toLowerCase() === methodName.toLowerCase());
            if (m) return m;
        }

        return null; // No definition found
    }

    // Helper for Array rendering
    window.reindexArrayItems = function (container, prefix) {
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

    window.addArrayItem = function (btn) {
        const container = btn.parentElement.querySelector('.array-items-container') || btn.parentElement.querySelector('.map-entries-container');
        const template = btn.parentElement.querySelector('.item-template').innerHTML;
        const prefix = btn.closest('.array-group') ? btn.closest('.array-group').dataset.prefix : btn.closest('.map-group').dataset.prefix;

        // Use current length as index for new item
        const index = container.children.length;

        const newItemHtml = template.replace(/\{index\}/g, index);

        // Create temp div to parse HTML
        const temp = document.createElement('div');
        temp.innerHTML = newItemHtml;
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
        wrapper.style.cssText = 'display: flex; align-items: flex-start; margin-bottom: 4px;';

        // If templateHtml is just the input, we wrapper it.
        wrapper.innerHTML = `<div style="flex-grow: 1;">${newItemHtml}</div>
                        <button type="button" class="remove-item-btn" onclick="this.closest('.array-item').remove(); reindexArrayItems(this.parentElement.parentElement, '${prefix || ''}');" style="margin-left: 8px; padding: 4px 8px; background: transparent; border: 1px solid var(--border-subtle); color: var(--text-muted); cursor: pointer;">&times;</button>`;

        container.appendChild(wrapper);

        // No need to reindex since we appended, unless we want to be safe.
        // But typically we should just valid index.
        container.dispatchEvent(new Event('change', { bubbles: true }));
    };

    function renderInput(param, value, options = {}) {
        const { isInterceptor, index, interceptId, parentName } = options;

        let inputType = MojoParser.getInputType(param.type);

        // Special Handling for Common Mojo Types
        // 1. URL: Unwrap { arg_url: "..." } to simple string
        if (param.type === 'Url' || param.type.endsWith('.Url') || (typeof value === 'object' && value && (value.arg_url || value.url))) {
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

        // 3. Structs: Recursive Rendering
        if (param.type === 'struct' && param.structSpec) {
            const childParams = mapFieldsToUIParams(param.structSpec.fields);
            const childValues = (value && typeof value === 'object') ? value : {};

            const renderedFields = childParams.map(p => {
                let pValue = childValues[p.name];
                if (pValue === undefined && p.name.startsWith('arg_')) {
                    pValue = childValues[p.name.substring(4)];
                }
                // Recurse without index (nested items use structural association)
                return renderInput(p, pValue, {
                    isInterceptor,
                    interceptId,
                    parentName: parentName ? `${parentName}.${param.name}` : param.name
                });
            }).join('');

            return `
                <div class="form-group struct-group" 
                     data-type="struct" 
                     data-original-name="${escapeHtml(param.name)}"
                     style="margin-bottom: 8px;">
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

            const renderItemHtml = (val, idx) => {
                const itemParam = {
                    name: `[${idx}]`,
                    type: inferTypeFromMojomType(param.elementSpec),
                    structSpec: (param.elementSpec.$ && param.elementSpec.$.structSpec) ? param.elementSpec.$.structSpec : null,
                    elementSpec: (param.elementSpec.elementType || (param.elementSpec.$ && param.elementSpec.$.elementType)) || null
                };
                return renderInput(itemParam, val, {
                    isInterceptor,
                    interceptId,
                    parentName: prefix
                });
            };

            const renderedItems = items.map((val, i) => `
                <div class="array-item" style="display: flex; align-items: flex-start; margin-bottom: 4px;">
                    <div style="flex-grow: 1;">${renderItemHtml(val, i)}</div>
                    <button type="button" class="remove-item-btn" onclick="this.closest('.array-item').remove()" style="margin-left: 8px; padding: 4px 8px; background: transparent; border: 1px solid var(--border-subtle); color: var(--text-muted); cursor: pointer;">&times;</button>
                </div>
            `).join('');

            // Template for new items (using a placeholder index that the Add handler will replace)
            // We use 'TEMPLATE_INDEX' as a special placeholder
            const templateHtml = renderItemHtml(null, 'TEMPLATE_INDEX')
                .replace(/name="([^"]*?)\[TEMPLATE_INDEX\]"/g, 'name="$1[{index}]"'); // Fix name attribute

            return `
                <div class="form-group array-group" 
                     data-type="array" 
                     data-original-name="${escapeHtml(param.name)}"
                     data-prefix="${escapeHtml(prefix)}"
                     style="margin-bottom: 8px;">
                    <label style="cursor: pointer;" onclick="this.nextElementSibling.hidden = !this.nextElementSibling.hidden">
                        <span style="display:inline-block; transform: rotate(90deg); font-size: 0.8em;">&#10095;</span>
                        ${escapeHtml(param.name ? param.name.replace(/^arg_/, '') : '')}
                        <span class="type">Array&lt;${inferTypeFromMojomType(param.elementSpec)}&gt;</span>
                        <span class="badge" style="margin-left: 8px; font-size: 0.8em; background: var(--bg-hover);">${items.length} items</span>
                    </label>
                    <div class="array-content" style="padding-left: 10px; border-left: 2px solid var(--border-subtle); margin-left: 4px; margin-top: 4px;">
                        <div class="array-items-container">
                            ${renderedItems}
                        </div>
                        <template class="item-template">${templateHtml}</template>
                        <button type="button" class="add-item-btn" 
                                onclick="addArrayItem(this)"
                                style="margin-top: 4px; font-size: 0.9em; padding: 4px 12px;">+ Add Item</button>
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

                const keyHtml = renderInput(keyParam, entryKey, { isInterceptor, interceptId, parentName: `${prefix}[${idx}]` });
                const valHtml = renderInput(valParam, entryValue, { isInterceptor, interceptId, parentName: `${prefix}[${idx}]` });

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
                        <span class="type">Map&lt;${inferTypeFromMojomType(param.mapSpec.key)}, ${inferTypeFromMojomType(param.mapSpec.value)}&gt;</span>
                        <span class="badge" style="margin-left: 8px; font-size: 0.8em; background: var(--bg-hover);">${entries.length} entries</span>
                    </label>
                    <div class="map-content" style="padding-left: 10px; border-left: 2px solid var(--border-subtle); margin-left: 4px; margin-top: 4px;">
                        <div class="map-entries-container">
                            ${renderedEntries}
                        </div>
                        <template class="item-template">${templateHtml}</template>
                        <button type="button" class="add-item-btn" 
                                onclick="addArrayItem(this)" 
                                style="margin-top: 4px; font-size: 0.9em; padding: 4px 12px;">+ Add Entry</button>
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
                        ${renderInput(f, val, { isInterceptor, interceptId, parentName: parentName ? `${parentName}.${param.name}` : param.name })}
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

        // 2. BigBuffer: Handle as raw text/bytes
        if (param.type.endsWith('BigBuffer')) {
            // simplified display for big buffer
            inputType = 'textarea';
        }

        // Force textarea for 'json', complex types, or if it's a BigInt value (to allow editing as text)
        if (param.type === 'json' || param.type.includes('array') || param.type.includes('map') || (value && typeof value === 'object')) {
            inputType = 'textarea';
        }

        // Clean handling of BigInts/Objects for display
        let displayValue = value;
        if (typeof value === 'bigint') {
            displayValue = value.toString() + 'n';
            if (inputType === 'number') inputType = 'text';
        } else if (typeof value === 'object' && value !== null) {
            // DEEP Sanitize before stringifying to remove inner arg_
            displayValue = safeStringify(sanitizeKeys(value), 2);
        } else if (value === undefined || value === null) {
            // Handle defaults if value is not provided (for Manual Form)
            if (!isInterceptor) {
                const def = MojoParser.getDefaultValue(param.type);
                if (def !== undefined) {
                    displayValue = def;
                    if (typeof def === 'object') displayValue = safeStringify(def, 2);
                } else if (param.type === 'json') {
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
                          data-type="${escapeHtml(param.type)}"`;
            if (inputType === 'textarea') attributes += ' style="min-height: 100px;"';
        } else {
            // Manual Form attributes
            const sep = param.name.startsWith('[') ? '' : '.';
            const fullName = parentName ? `${parentName}${sep}${param.name}` : param.name;
            attributes = `class="param-input" name="${escapeHtml(fullName)}" data-type="${escapeHtml(param.type)}"`;
        }

        const displayName = escapeHtml(param.name ? param.name.replace(/^arg_/, '') : '');

        if (inputType === 'checkbox') {
            return `
                <div class="form-group" data-original-name="${escapeHtml(param.name)}">
                    <label>
                        <input type="checkbox" ${attributes} ${displayValue ? 'checked' : ''}>
                        ${displayName}
                        <span class="type">${escapeHtml(param.type)}</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ''}
                    </label>
                </div>
            `;
        } else if (inputType === 'textarea') {
            return `
                <div class="form-group" data-original-name="${escapeHtml(param.name)}">
                    <label>
                        ${displayName}
                        <span class="type">${escapeHtml(param.type)}</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ''}
                    </label>
                    <textarea ${attributes} placeholder="Enter ${param.type}...">${escapeHtml(displayValue || '')}</textarea>
                </div>
            `;
        } else {
            return `
                <div class="form-group" data-original-name="${escapeHtml(param.name)}">
                    <label>
                        ${displayName}
                        <span class="type">${escapeHtml(param.type)}</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ''}
                    </label>
                    <input type="${inputType === 'number' && typeof displayValue === 'string' && displayValue.endsWith('n') ? 'text' : inputType}"
                           ${attributes}
                           value="${escapeHtml(displayValue ?? '')}"
                           placeholder="Enter ${param.type}...">
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
                    // Actually, activeContent contains the rendered input for that tag. 
                    // We can just call collectFormData on activeContent.parentNode? No.

                    // Simplified: The active content IS the form group for the value. 
                    // We can scrape the value from it. 
                    // But collectFormData expects a container of groups.
                    // Let's wrap it in a mock container if needed or just handle single item.

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

        return paramsDef.map((param, index) => {
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

        // Arrays are tricky because they are constructible functions in bindings_lite
        // We can check if it has array properties or naming convention
        if (typeof mojomType === 'string') return mojomType;

        return 'string'; // Default to string input for complex types so user can paste JSON/values
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
            console.log('[MojoGUI] Converting Object fields to Array:', fields);
            fieldsArray = Object.entries(fields).map(([key, spec]) => {
                // Ensure name property exists
                return { name: key, ...spec };
            });
            // Sort by ordinal to ensure consistent order
            fieldsArray.sort((a, b) => (a.ordinal || 0) - (b.ordinal || 0));
        }

        if (!Array.isArray(fieldsArray)) {
            console.warn('[MojoGUI] mapFieldsToUIParams: fields is not an array', fields);
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

            if (field.type && field.type.$ && field.type.$.structSpec) {
                type = 'struct';
                structSpec = field.type.$.structSpec;
            } else if (field.type && (field.type.elementType || (field.type.$ && field.type.$.elementType))) {
                type = 'array';
                elementSpec = field.type.elementType || field.type.$.elementType;
            } else if (field.type && (field.type.keyType || (field.type.$ && field.type.$.keyType))) {
                type = 'map';
                mapSpec = {
                    key: field.type.keyType || field.type.$.keyType,
                    value: field.type.valueType || field.type.$.valueType
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
        code += `if (typeof root.${iface.name}.getRemote === 'function') {\n`;
        code += `    ${remoteName} = root.${iface.name}.getRemote();\n`;
        code += `} else {\n`;
        code += `    // Manual binding for Lite bindings without getRemote()\n`;
        code += `    ${remoteName} = new root.${iface.name}Remote();\n`;
        code += `    const receiver = ${remoteName}.bindNewPipeAndPassReceiver();\n`;
        code += `    const handle = receiver.handle || receiver;\n`;
        code += `    // Default to 'context' scope for safety, can be 'process'\n`;
        code += `    Mojo.bindInterface("${iface.module + '.' + iface.name}", handle, "context");\n`;
        code += `}\n\n`;

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

        let displayStatus = status || 'Pending';
        let statusClass = displayStatus === 'Done' ? 'active' : (displayStatus === 'Error' ? 'error' :
            (displayStatus === 'Logged' ? 'logged' : ''));

        // Check mode
        let currentMode = 'INTERCEPT';
        if (data.mode === 'LOG' && type !== 'MANUAL') {
            displayStatus = 'Logged';
            statusClass = 'logged'; // Make sure to add CSS for this
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
                        result[key] = values[i];
                    });
                } else {
                    // Fallback if no def? This shouldn't happen if formContainer exists
                    console.warn('Form container exists but no def found for mapping?');
                    result = values;
                }
            } else {
                // Fallback textarea
                const textarea = document.getElementById(`interceptParams_${id}_res`);
                if (textarea) result = safeParse(textarea.value);
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

            console.log(`[UI] Sending Response for ${id}`, restoredResult);
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

        if (methodDef && methodDef.parameters) {
            paramsHtml = `<div class="params-form-container" id="interceptForm_${id}">
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
                    const style = (detail.status === 'Response Edit') ? '' : 'opacity: 0.9; pointer-events: none;';
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
                    params = params.map(p => {
                        if (typeof p === 'string') {
                            try { return JSON.parse(p); } catch (e) { return p; }
                        }
                        return p;
                    });
                }

                // Reconcile keys
                const originalParams = (detail && detail.params) ? detail.params : null;
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

    // Start
    init();

})();
