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
        trafficCount: 0
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
                    console.groupCollapsed(`[MojoGUI] Loading dependencies for ${filename}`);
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
                    console.groupEnd();
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
        // First look up metadata from state.interfaces
        // This handles cases where interfaceName might be simple or fully qualified
        let ifaceMetadata = state.interfaces.find(i => i.name === interfaceName);

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
        return generateDefaultParams(ifaceMetadata, methodName);
    }

    function findMethodDefinition(interfaceName, methodName) {
        // 1. Try reusing getMethodParams to see if we can get params directly
        const params = getMethodParams(interfaceName, methodName);
        if (params) {
            return {
                name: methodName,
                parameters: params
            };
        }

        // 2. Manual lookup with Fuzzy Matching (Collisions Handling)
        // interfaceName is often FQN (blink.mojom.ClipboardHost)
        // state.interfaces has { name: 'ClipboardHost', module: 'blink.mojom' }

        let iface = state.interfaces.find(i => {
            const fqn = i.module ? `${i.module}.${i.name}` : i.name;
            return fqn === interfaceName;
        });

        if (!iface) {
            // Fallback: Check if interfaceName is just the suffix (Short Name)
            // Warning: This might return the wrong interface if collisions exist, but it's a fallback.
            iface = state.interfaces.find(i => i.name === interfaceName);
        }

        if (!iface) {
            // Fallback: Check for partial match/suffix just in case
            iface = state.interfaces.find(i =>
                i.name.endsWith('.' + interfaceName) || interfaceName.endsWith('.' + i.name)
            );
        }

        if (iface) {
            // Case-insensitive method match
            const m = iface.methods.find(m => m.name === methodName || m.name.toLowerCase() === methodName.toLowerCase());
            if (m) return m;
        }

        return null;
    }

    function renderInput(param, value, options = {}) {
        const { isInterceptor, index, interceptId } = options;

        let inputType = MojoParser.getInputType(param.type);

        // Special Handling for Common Mojo Types
        // 1. URL: Unwrap { arg_url: "..." } to simple string
        if (param.type.endsWith('.Url') || (typeof value === 'object' && value && (value.arg_url || value.url))) {
            const urlVal = value ? (value.arg_url || value.url || '') : '';
            return `
                <div class="form-group">
                    <label>
                        ${escapeHtml(param.name ? param.name.replace(/^arg_/, '') : '')}
                        <span class="type">Url</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ''}
                    </label>
                    <input type="text" 
                           class="intercept-input" 
                           data-id="${interceptId}" 
                           data-index="${index}" 
                           data-type="url_wrapped" 
                           value="${escapeHtml(urlVal)}" 
                           placeholder="https://...">
                </div>`;
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
            attributes = `class="intercept-input ${inputType === 'textarea' ? 'params-editor' : ''}"
                          data-id="${interceptId}"
                          data-index="${index}"
                          data-type="${escapeHtml(param.type)}"`;
            if (inputType === 'textarea') attributes += ' style="min-height: 100px;"';
        } else {
            // Manual Form attributes
            attributes = `name="${escapeHtml(param.name)}" data-type="${escapeHtml(param.type)}"`;
        }

        const displayName = escapeHtml(param.name ? param.name.replace(/^arg_/, '') : '');

        if (inputType === 'checkbox') {
            return `
                <div class="form-group">
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
                <div class="form-group">
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
                <div class="form-group">
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

    // ... (lines 701-1223 skipped)

    function updateInterceptButtonState(isActive, interfaceName = null) {
        // 1. Update Main Detail Panel Button
        if (state.selectedInterface) {
            const currentFQN = state.selectedInterface.module ? `${state.selectedInterface.module}.${state.selectedInterface.name}` : state.selectedInterface.name;
            const currentShort = state.selectedInterface.name;

            if (!interfaceName || interfaceName === currentFQN || interfaceName === currentShort) {
                const realState = interfaceName ? InterceptorManager.isActive(interfaceName) : isActive;
                elements.interceptStatusDot.classList.toggle('active', realState);
                elements.interceptToggleBtn.classList.toggle('active', realState);
                const text = elements.interceptToggleBtn.childNodes[2];
                if (text) text.textContent = realState ? ' Blocking' : ' Intercept';
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
                if (isIfaceActive && btnMethod) {
                    const key = `${btnIface}.${btnMethod}`;
                    if (state.autoForwardMethods.has(key)) {
                        isMethodActive = false;
                    }
                }

                btn.classList.toggle('active', isMethodActive);
                btn.textContent = isMethodActive ? 'Blocking' : 'Forwarding';
                // Styling update: Active (Blocking) = Normal/Red-ish? Inactive (Forwarding) = Grey?
                // Existing CSS .btn.active is Green.
                // Maybe: Blocking = Green (Active Interceptor), Forwarding = Outlined (Pass through)
            }
        });
    }

    // ...

    // Unified function to add rows to the table
    function addActivityRow(data) {
        // ...
        return `<button class="btn btn-small ${isBtnActive ? 'active' : ''}" data-action="toggle-intercept" data-interface="${escapeHtml(iface)}" data-method="${escapeHtml(method)}" onclick="event.stopPropagation(); window.toggleInterceptFromLog('${escapeHtml(iface)}', '${escapeHtml(method)}')">${isBtnActive ? 'Blocking' : 'Forwarding'}</button>`;
        // ...
    }

    // ...
    function showInterceptDetails(detail) {
        // ... (Update responseHtml check just in case, logic preserved)
        // ...
        if (methodDef && methodDef.responseParams) {
            responseHtml = `<div class="params-form-container" style="opacity: 0.9;">
                                        ${renderInterceptorForm(methodDef.responseParams, detail.result, id + '_res')}
                                      </div>`;
        } else {
            responseHtml = `<div class="result-code" style="border:none;background:transparent;padding:0;min-height:50px;">${escapeHtml(safeStringify(sanitizeKeys(detail.result), 2))}</div>`;
        }
        // ...
    }

    function getInterceptorFormValues(id) {
        const formContainer = document.getElementById(`interceptForm_${id}`);
        if (!formContainer) return [];

        const inputs = Array.from(formContainer.querySelectorAll('.intercept-input'));
        const values = [];

        // Sort by index to maintain order
        inputs.sort((a, b) => (parseInt(a.dataset.index) || 0) - (parseInt(b.dataset.index) || 0));

        // Use a map to fill by index directly
        inputs.forEach(input => {
            const index = parseInt(input.dataset.index);
            const type = input.dataset.type;
            let val = input.value;

            // Handle different types
            if (input.type === 'checkbox') {
                val = input.checked;
            } else if (type === 'number' || input.type === 'number') {
                val = Number(val);
            } else if (type === 'int64' || type === 'uint64') {
                if (val.endsWith('n')) val = val.slice(0, -1);
                try {
                    val = BigInt(val);
                } catch (e) {
                    // console.warn('Invalid BigInt:', val);
                    val = BigInt(0);
                }
            } else if (type === 'json' || (type && (type.includes('array') || type.includes('map') || type.includes('object')))) {
                try {
                    val = JSON.parse(val);
                } catch (e) {
                    // Keep as string if parsing fails, might be intended
                }
            }

            values[index] = val;
        });

        // Fill sparse array if any gaps
        for (let i = 0; i < values.length; i++) {
            if (values[i] === undefined) values[i] = null;
        }
        return values;
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

        // Add change handlers
        elements.paramsForm.querySelectorAll('input, textarea, select').forEach(input => {
            input.addEventListener('input', () => {
                updateParamValue(input.name, getInputValue(input), input.dataset.type);
                updateGeneratedCode();
            });
            input.addEventListener('change', () => {
                updateParamValue(input.name, getInputValue(input), input.dataset.type);
                updateGeneratedCode();
            });

            // Initialize value
            updateParamValue(input.name, getInputValue(input), input.dataset.type);
        });

        updateGeneratedCode();
    }

    function getInputValue(input) {
        if (input.type === 'checkbox') {
            return input.checked;
        }
        if (input.type === 'number') {
            return parseFloat(input.value) || 0;
        }
        return input.value;
    }

    function updateParamValue(name, value, type) {
        // Parse JSON for complex types
        if (type === 'json' || (type && (type.includes('array') || type.includes('map') || type.includes('object')))) {
            try {
                // If empty string, generic default
                if (!value.trim()) {
                    state.paramValues[name] = null;
                } else {
                    state.paramValues[name] = JSON.parse(value);
                }
            } catch (e) {
                // If invalid JSON, store as string but it might fail invocation
                // Optionally log error or show valid state
                state.paramValues[name] = value;
            }
        } else {
            state.paramValues[name] = value;
        }
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

    function generateDefaultParams(ifaceMetadata, methodName) {
        // Attempts to resolve parameters from the Loaded Bindings in the page
        if (ifaceMetadata && ifaceMetadata.module) {
            // Determine simple interface name for spec lookup (e.g. 'VibrationManager' from 'device.mojom.VibrationManager')
            // Determine simple interface name for spec lookup (e.g. 'VibrationManager' from 'device.mojom.VibrationManager')
            const simpleInterfaceName = ifaceMetadata.name.split('.').pop();
            const namespace = resolveNamespace(ifaceMetadata.module);

            if (namespace) {
                // Try exact match first (e.g. Vibrate)
                let specName = `${simpleInterfaceName}_${methodName}_ParamsSpec`;
                let specWrapper = namespace[specName];

                // If not found, try PascalCase (if method is vibrate -> Vibrate)
                if (!specWrapper) {
                    const pascalMethod = methodName.charAt(0).toUpperCase() + methodName.slice(1);
                    specName = `${simpleInterfaceName}_${pascalMethod}_ParamsSpec`;
                    specWrapper = namespace[specName];
                }

                if (specWrapper) {
                    // specWrapper is like { $: { structSpec: { ... } } }
                    // or just { structSpec: ... } depending on generation
                    const structSpec = specWrapper.$ ? specWrapper.$.structSpec : specWrapper.structSpec;

                    if (structSpec && structSpec.fields) {
                        return structSpec.fields.map(field => {
                            let type = 'any';
                            let originalName = field.name;

                            // Check for generated binding artifacts (nullable value structs)
                            if (field.nullableValueKindProperties && field.nullableValueKindProperties.isPrimary) {
                                originalName = field.nullableValueKindProperties.originalFieldName;
                            }

                            // Use the runtime type inference
                            type = inferTypeFromMojomType(field.type);

                            // Use original name without prefix (safe in function scope)
                            // e.g. 'location' -> 'location'

                            return {
                                name: originalName,
                                type: type,
                                optional: !!field.nullable
                            };
                        }).filter(f => !f.name.endsWith('_$flag') && !f.name.endsWith('_$value'));
                    }
                }
            }

            // Return null if schema not found, triggering the "Raw Arguments Array" fallback UI
            return null;
        }
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
        // Use textContent for safe display - no HTML injection possible
        elements.generatedCode.textContent = code;
    }

    function generateCode() {
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
        // Generate method call with params
        const paramsDef = getMethodParams(state.selectedInterface.name, method);
        const args = [];

        if (paramsDef && paramsDef.length > 0) {
            code += `// Method parameters\n`;
            paramsDef.forEach(p => {
                const key = p.name;
                // Strip 'arg_' from variable name if present
                const safeVarName = key.startsWith('arg_') ? key.substring(4) : key;
                const value = state.paramValues[key];

                let valueStr;
                if (typeof value === 'bigint') {
                    valueStr = value.toString() + 'n';
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
        // First escape HTML entities to prevent XSS and display issues
        let escaped = code
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        // Apply syntax highlighting
        return escaped
            .replace(/\/\/.*$/gm, '<span class="comment">$&</span>')
            .replace(/\b(const|let|var|function|return|new|async|await|if|else|try|catch|throw|import|from|export|class|extends)\b/g, '<span class="keyword">$1</span>')
            .replace(/\b(true|false|null|undefined)\b/g, '<span class="const">$1</span>')
            .replace(/\b(this|window|document|console)\b/g, '<span class="builtin">$1</span>')
            .replace(/&quot;([^&]*)&quot;|"([^"]*)"/g, '<span class="string">"$1$2"</span>')
            .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
            .replace(/\.(\w+)\b/g, '.<span class="property">$1</span>')
            .replace(/\b([A-Z][a-zA-Z0-9_]*)\b/g, '<span class="class">$1</span>')
            .replace(/([a-zA-Z0-9_]+)\(/g, '<span class="function">$1</span>(');
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

        const code = generateCode();
        const interfaceName = state.selectedInterface?.name || 'Unknown';
        const methodName = state.selectedMethod || 'Unknown';

        const manualId = 'manual_' + Date.now();
        // Use existing interfaceName/methodName from scope

        // 1. Create a "Pending" entry in the Activity Table immediately
        addActivityRow({
            id: manualId,
            interface: interfaceName,
            method: methodName,
            params: state.paramValues, // Best effort capture
            timestamp: Date.now(),
            type: 'MANUAL',
            status: 'Executing...'
        });

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
            const duration = (performance.now() - startTime).toFixed(2);

            // 2. Update the Activity Row with the result
            updateActivityRow(manualId, result.success ? 'Done' : 'Error', result);

        } catch (e) {
            updateActivityRow(manualId, 'Error', { error: e.toString() });
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
            showToast(`Started intercepting ${nameTypeToUse}`, 'success');
            // Show panel
            showInterceptorPanel(true);
        } else {
            showToast(`Stopped intercepting ${nameTypeToUse}`, 'info');
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
                const realState = interfaceName ? InterceptorManager.isActive(interfaceName) : isActive;
                elements.interceptStatusDot.classList.toggle('active', realState);
                elements.interceptToggleBtn.classList.toggle('active', realState);
                const text = elements.interceptToggleBtn.childNodes[2];
                if (text) text.textContent = realState ? ' Stop Intercepting' : ' Intercept';
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
                if (isIfaceActive && btnMethod) {
                    const key = `${btnIface}.${btnMethod}`;
                    if (state.autoForwardMethods.has(key)) {
                        isMethodActive = false;
                    }
                }

                btn.classList.toggle('active', isMethodActive);
                btn.textContent = isMethodActive ? 'Blocking' : 'Forwarding';
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
            // If button says "Stop" (Active) -> We want to Ignore this method (Auto-Forward)
            // If button says "Intercept" (Inactive) -> We want to Stop Ignoring (Block)

            if (state.autoForwardMethods.has(key)) {
                // Was Ignored -> Enable Blocking
                state.autoForwardMethods.delete(key);
                showToast(`Resumed intercepting ${methodName}`, 'success');
            } else {
                // Was Blocking -> Set to Ignore
                state.autoForwardMethods.add(key);
                showToast(`Auto-forwarding ${methodName}`, 'info');
            }
        }

        updateInterceptButtonState(true, ifaceName);
    };

    function clearActivityLog() {
        elements.interceptorTableBody.innerHTML = '';
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

        const row = document.createElement('tr');
        row.dataset.id = id;
        row.dataset.type = type || 'INTERCEPT'; // 'INTERCEPT' or 'MANUAL'
        if (data.proxyId) row.dataset.proxyId = data.proxyId;

        // Visual indicator for manual vs intercept
        let typeIcon = '📡';
        if (type === 'MANUAL') typeIcon = '🛠️';
        if (type === 'SYSTEM') typeIcon = '⚠️';

        let displayStatus = status || 'Pending';
        let statusClass = displayStatus === 'Done' ? 'active' : (displayStatus === 'Error' ? 'error' : '');

        // Check mode
        let currentMode = 'INTERCEPT';
        if (data.mode === 'LOG' && type !== 'MANUAL') {
            displayStatus = 'Logged';
            statusClass = 'logged'; // Make sure to add CSS for this
        }

        row.innerHTML = safeHTML(`
            <td>${new Date(timestamp).toLocaleTimeString()}</td>
            <td><span class="type-icon">${typeIcon}</span> ${escapeHtml(iface)}.${escapeHtml(method)}</td>
            <td><span class="status-dot ${statusClass}"></span> ${escapeHtml(displayStatus)}</td>
            <td>
                ${(data.mode === 'LOG') ?
                (() => {
                    const isIfaceActive = typeof InterceptorManager !== 'undefined' && InterceptorManager.isActive(iface);
                    let isBtnActive = isIfaceActive;
                    if (isIfaceActive && state.autoForwardMethods.has(`${iface}.${method}`)) {
                        isBtnActive = false;
                    }
                    return `<button class="btn btn-small ${isBtnActive ? 'active' : ''}" data-action="toggle-intercept" data-interface="${escapeHtml(iface)}" data-method="${escapeHtml(method)}" onclick="event.stopPropagation(); window.toggleInterceptFromLog('${escapeHtml(iface)}', '${escapeHtml(method)}')">${isBtnActive ? 'Blocking' : 'Forwarding'}</button>`;
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
        const row = elements.interceptorTableBody.querySelector(`tr[data-id="${id}"]`);
        if (row) {
            const statusCell = row.cells[2];
            const statusDotClass = status === 'Done' ? 'active' : (status === 'Error' ? 'error' : '');
            let colorStyle = status === 'Error' ? 'style="background:var(--error)"' : '';

            statusCell.innerHTML = safeHTML(`<span class="status-dot ${statusDotClass}" ${colorStyle}></span> ${escapeHtml(status)}`);

            // Merge result into the stored details so showInterceptDetails can display it
            if (row.__details) {
                row.__details.result = resultData;
                row.__details.status = status;

                // If this is currently selected, refresh the details view
                if (row.classList.contains('active')) {
                    showInterceptDetails(row.__details);
                }
            }
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

            // Log as 'Auto-Forwarded' (Pending -> Done instantly)
            addActivityRow({
                ...e.detail,
                type: 'INTERCEPT',
                status: 'Forwarded' // Special status
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
    function sanitizeKeys(obj) {
        if (obj === null || typeof obj !== 'object') return obj;
        if (Array.isArray(obj)) return obj.map(sanitizeKeys);

        const clean = {};
        for (const key in obj) {
            let cleanKey = key;
            if (cleanKey.startsWith('arg_')) {
                cleanKey = cleanKey.substring(4);
            }
            clean[cleanKey] = sanitizeKeys(obj[key]);
        }
        return clean;
    }

    function reconcileKeys(edited, original) {
        if (edited === null || typeof edited !== 'object') return edited;
        if (original === null || typeof original !== 'object') return edited; // Cannot reconcile, accept edited

        if (Array.isArray(edited)) {
            // Assume array order is preserved or just map
            return edited.map((v, i) => reconcileKeys(v, Array.isArray(original) ? original[i] : null));
        }

        const restored = {};
        for (const key in edited) {
            let originalKey = key;
            // Check if 'arg_' + key exists in original
            if (original && original.hasOwnProperty('arg_' + key)) {
                originalKey = 'arg_' + key;
            } else if (original && original.hasOwnProperty(key)) {
                originalKey = key;
            }
            // If neither, we keep the new key (user added it, or it was already clean)

            restored[originalKey] = reconcileKeys(edited[key], original && original[originalKey]);
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
        const isPending = row && !row.cells[2].innerHTML.includes('Done') && !row.cells[2].innerHTML.includes('Error');
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
                    responseHtml = `<div class="params-form-container" style="opacity: 0.9;">
                                        ${renderInterceptorForm(methodDef.responseParams, detail.result, id + '_res')}
                                      </div>`;
                } else {
                    responseHtml = `<div class="result-code" style="border:none;background:transparent;padding:0;min-height:50px;">${escapeHtml(safeStringify(sanitizeKeys(detail.result), 2))}</div>`;
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
                    <button class="btn btn-primary btn-small" onclick="resumeIntercept('${id}', false)">Forward</button>
                    <button class="btn btn-small" onclick="resumeIntercept('${id}', true)">Drop</button>
                </div>
                ` : (!isPending) ? `
                <div class="action-buttons">
                    <button class="btn btn-primary btn-small" onclick="replayIntercept('${id}')">Forward (Replay)</button>
                </div>
                ` : ''}
            </div>
            ${contentHtml}
        `);
    }

    // Modify request function (globally accessible for onclick)
    window.resumeIntercept = function (id, drop) {
        let params = null;

        if (!drop) {
            const formContainer = document.getElementById(`interceptForm_${id}`);
            if (formContainer) {
                // New logic: gather from form inputs
                try {
                    params = getInterceptorFormValues(id);
                } catch (e) {
                    alert('Error parsing form values: ' + e.message);
                    return;
                }
            } else {
                // Fallback: old textarea logic
                const textarea = document.getElementById(`interceptParams_${id}`);
                if (textarea) {
                    try {
                        params = safeParse(textarea.value);
                    } catch (e) {
                        alert('Invalid JSON params');
                        return;
                    }
                }
            }
        }

        const row = document.querySelector(`tr[data-id="${id}"]`);
        const proxyId = row.dataset.proxyId;

        if (drop) {
            // We need to call resumeCall on the proxy
            const proxy = MojoProxyRegistry.get(proxyId);
            if (proxy) proxy.resumeCall(id, null, true);
        } else {
            const proxy = MojoProxyRegistry.get(proxyId);
            if (proxy) {
                // Reconcile keys with original source of truth
                const originalParams = (row && row.__details) ? row.__details.params : null;
                const restoredParams = reconcileKeys(params, originalParams);

                proxy.resumeCall(id, restoredParams, false);
                // Update history with modified params
                if (row && row.__details) {
                    row.__details.params = restoredParams;
                }
            }
        }
    }

    window.replayIntercept = function (id) {
        let params = null;
        try {
            // Gather params from the UI (interceptForm or textarea)
            const formContainer = document.getElementById(`interceptForm_${id}`);
            if (formContainer) {
                params = getInterceptorFormValues(id);
            } else {
                const textarea = document.getElementById(`interceptParams_${id}`);
                if (textarea) params = safeParse(textarea.value);
            }
        } catch (e) {
            alert('Error parsing form values: ' + e.message);
            return;
        }

        const row = document.querySelector(`tr[data-id="${id}"]`);
        if (!row || !row.__details) return;

        const detail = row.__details;
        const proxyId = detail.proxyId;
        const method = detail.method;

        const proxy = MojoProxyRegistry.get(proxyId);
        if (!proxy) {
            alert('Proxy connection lost. Cannot replay.');
            return;
        }

        // Replay using the proxy's remote
        if (proxy.realRemote && typeof proxy.realRemote[method] === 'function') {
            try {
                const newId = 'replay_' + Date.now();
                // Add new activity row for the replay
                addActivityRow({
                    id: newId,
                    interface: detail.interface,
                    method: method,
                    params: params,
                    timestamp: Date.now(),
                    type: 'MANUAL',
                    status: 'Replaying...',
                    proxyId: proxyId
                });

                // Show details for the new Replay row
                showInterceptDetails({ ...detail, id: newId, params: params, status: 'Replaying...', type: 'MANUAL', result: null, error: null });

                const resultPromise = proxy.realRemote[method](...params);

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
                alert('Execution failed: ' + e.message);
            }
        } else {
            alert(`Method ${method} not found on remote.`);
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
