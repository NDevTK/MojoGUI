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
        mojoAvailable: false
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

        // Results
        resultsSection: document.getElementById('resultsSection'),
        executionResults: document.getElementById('executionResults'),
        clearResultsBtn: document.getElementById('clearResultsBtn'),

        // Toast
        toastContainer: document.getElementById('toastContainer'),

        // Interceptor
        interceptToggleBtn: document.getElementById('interceptToggleBtn'),
        interceptStatusDot: document.getElementById('interceptStatusDot'),
        interceptorPanel: document.getElementById('interceptorPanel'),
        interceptorTableBody: document.getElementById('interceptorTableBody'),
        interceptorDetails: document.getElementById('interceptorDetails'),
        codeContainer: document.getElementById('codeContainer'),
        // resultsSection duplicate in original, keeping last
        resultsSection: document.getElementById('resultsSection'),
        clearActivityBtn: document.getElementById('clearActivityBtn')
    };

    // ========================================
    // Initialization
    // ========================================
    async function init() {
        checkMojoAvailability();
        await loadInterfaces();
        setupEventListeners();
    }

    function getInterceptorFormValues(interceptId) {
        const inputs = document.querySelectorAll(`.intercept-input[data-id="${interceptId}"]`);
        const params = [];

        inputs.forEach(input => {
            const index = parseInt(input.dataset.index);
            const type = input.dataset.type;
            let value;

            if (input.type === 'checkbox') {
                value = input.checked;
            } else {
                value = input.value;
                // Type conversion
                if (type === 'json' || type.includes('array') || type.includes('map') || type.includes('object')) {
                    // If empty string, treat as null or empty? 
                    // Usually for complex types we expect valid JSON
                    if (value.trim()) {
                        value = safeParse(value);
                    } else {
                        value = null;
                    }
                } else if (input.type === 'number') {
                    value = parseFloat(value);
                } else if (!input.type || input.type === 'text') {
                    // Check if it's supposed to be a BigInt (e.g. ends with 'n' or type is likely integer)
                    // Our safeParse/safeStringify uses '123n' convention.
                    // If the schema type says int64/uint64, we force BigInt even if user typed plain number.
                    // If user typed '123n', it becomes BigInt(123).
                    // If user typed '123' and type is int64, it becomes BigInt(123).

                    const isBigIntType = type && (type.includes('int64') || type.includes('uint64'));

                    if (value.endsWith('n') && /^-?\d+n$/.test(value)) {
                        value = BigInt(value.slice(0, -1));
                    } else if (isBigIntType && /^-?\d+$/.test(value)) {
                        value = BigInt(value);
                    }
                }
            }
            params[index] = value;
        });
        return params;
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
                    return;
                }
            }

            // Fallback: load demo interfaces
            loadDemoInterfaces();
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

        // Clear results
        elements.clearResultsBtn.addEventListener('click', clearResults);

        // Interceptor
        elements.interceptToggleBtn.addEventListener('click', toggleInterceptor);
        elements.clearActivityBtn?.addEventListener('click', clearActivityLog);

        // Global functions for inline handlers
        window.resumeIntercept = resumeIntercept;
        window.addEventListener('mojo-intercept', handleMojoIntercept);
        window.addEventListener('mojo-response', handleMojoResponse);
        window.addEventListener('mojo-error', handleMojoError);
    }

    function handleSearch(e) {
        const query = e.target.value.toLowerCase();
        const filtered = state.interfaces.filter(iface =>
            iface.name.toLowerCase().includes(query) ||
            iface.module.toLowerCase().includes(query)
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

        elements.interfaceList.innerHTML = safeHTML(interfaces.map(iface => `
            <div class="interface-item" data-name="${escapeHtml(iface.name)}" data-module="${escapeHtml(iface.module)}">
                <span class="name">${escapeHtml(iface.name)}</span>
                <span class="module">${escapeHtml(iface.module)}</span>
                <span class="method-count">${iface.methods?.length || 0} methods</span>
            </div>
        `).join(''));

        // Add click handlers
        elements.interfaceList.querySelectorAll('.interface-item').forEach(item => {
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
        // Use the existing robust lookup from getMethodParams
        // It handles:
        // 1. Runtime loaded bindings (real schema)
        // 2. Fallback paramDefs (hardcoded schema)
        // 3. Default inference

        // However, findMethodDefinition is expected to return a method object { name, parameters: [] }
        // getMethodParams returns just the array of parameters.

        const params = getMethodParams(interfaceName, methodName);
        if (params && params.length > 0) {
            return {
                name: methodName,
                parameters: params
            };
        }

        // If we really need the interface object for some reason, we can look it up,
        // but for rendering the form, we just need the parameters.
        const iface = state.interfaces.find(i => i.name === interfaceName);
        if (iface) {
            const m = iface.methods.find(m => m.name === methodName);
            if (m) return m;
        }

        return null;
    }

    function renderInput(param, value, options = {}) {
        const { isInterceptor, index, interceptId } = options;

        let inputType = MojoParser.getInputType(param.type);
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
            displayValue = safeStringify(value, 2);
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

        if (inputType === 'checkbox') {
            return `
                <div class="form-group">
                    <label>
                        <input type="checkbox" ${attributes} ${displayValue ? 'checked' : ''}>
                        ${escapeHtml(param.name)}
                        <span class="type">${escapeHtml(param.type)}</span>
                        ${param.optional ? '<span class="optional">(optional)</span>' : ''}
                    </label>
                </div>
            `;
        } else if (inputType === 'textarea') {
            return `
                <div class="form-group">
                    <label>
                        ${escapeHtml(param.name)}
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
                        ${escapeHtml(param.name)}
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

    function renderInterceptorForm(paramsDef, values, interceptId) {
        if (!paramsDef || paramsDef.length === 0) {
            return `<div class="empty-state small"><p>No parameters</p></div>`;
        }

        return paramsDef.map((param, index) => {
            return renderInput(param, values[index], { isInterceptor: true, index, interceptId });
        }).join('');
    }

    function renderParamsForm(params) {
        if (!params || params.length === 0) {
            elements.paramsForm.innerHTML = safeHTML(`
                <div class="empty-state small">
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
        let current = window;
        for (const part of parts) {
            if (current[part]) {
                current = current[part];
            } else {
                return null;
            }
        }
        return current;
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
            const simpleInterfaceName = ifaceMetadata.name.split('.').pop();
            const specName = `${simpleInterfaceName}_${methodName}_ParamsSpec`;
            const namespace = resolveNamespace(ifaceMetadata.module);

            if (namespace && namespace[specName]) {
                const specWrapper = namespace[specName];
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
            code += `// The binding file defines the interface in the global scope\n`;
            code += `// after being loaded via <script> tag\n\n`;
            code += `// Step 2: Create a remote and bind it\n`;
            code += `// Namespace depends on binding version (mojo vs global)\n`;
            code += `let ${iface.name.toLowerCase()}Remote;\n`;
            code += `if (typeof ${namespace}.${iface.name}.getRemote === 'function') {\n`;
            code += `    ${iface.name.toLowerCase()}Remote = ${namespace}.${iface.name}.getRemote();\n`;
            code += `} else {\n`;
            code += `    ${iface.name.toLowerCase()}Remote = new ${namespace}.${iface.name}Remote();\n`;
            code += `    const receiver = ${iface.name.toLowerCase()}Remote.bindNewPipeAndPassReceiver();\n`;
            code += `    const handle = receiver.handle || receiver;\n`;
            code += `    Mojo.bindInterface("${iface.module + '.' + iface.name}", handle, "context");\n`;
            code += `}\n`;
            code += `// Select a method to see the full call...`;
            return code;
        }

        const remoteName = iface.name.charAt(0).toLowerCase() + iface.name.slice(1) + 'Remote';
        const methodName = method.charAt(0).toLowerCase() + method.slice(1);

        code += `// Get remote for the interface\n`;
        code += `let ${remoteName};\n`;
        code += `if (typeof ${namespace}.${iface.name}.getRemote === 'function') {\n`;
        code += `    ${remoteName} = ${namespace}.${iface.name}.getRemote();\n`;
        code += `} else {\n`;
        code += `    // Manual binding for Lite bindings without getRemote()\n`;
        code += `    ${remoteName} = new ${namespace}.${iface.name}Remote();\n`;
        code += `    const receiver = ${remoteName}.bindNewPipeAndPassReceiver();\n`;
        code += `    const handle = receiver.handle || receiver;\n`;
        code += `    // Default to 'context' scope for safety, can be 'process'\n`;
        code += `    Mojo.bindInterface("${iface.module + '.' + iface.name}", handle, "context");\n`;
        code += `}\n\n`;

        // Generate method call with params
        const params = Object.entries(state.paramValues);

        if (params.length > 0) {
            code += `// Method parameters\n`;
            params.forEach(([key, value]) => {
                let valueStr;
                if (typeof value === 'bigint') {
                    valueStr = value.toString() + 'n';
                } else {
                    valueStr = typeof value === 'string' ? `"${value}"` : safeStringify(value);
                }
                code += `const ${key} = ${valueStr};\n`;
            });
            code += `\n`;
        }

        code += `// Call the method\n`;
        code += `try {\n`;
        if (params.length > 0) {
            const paramNames = params.map(([key]) => key).join(', ');
            code += `  const result = await ${remoteName}.${methodName}(${paramNames});\n`;
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

        // Apply syntax highlighting in order (comments first to avoid conflicts)
        return escaped
            .replace(/\/\/.*$/gm, '<span class="comment">$&</span>')
            .replace(/\b(const|let|var|function|return|new|async|await|if|else|try|catch|throw)\b/g, '<span class="keyword">$1</span>')
            .replace(/\b(true|false|null|undefined)\b/g, '<span class="const">$1</span>')
            .replace(/&quot;([^&]*)&quot;|"([^"]*)"/g, '<span class="string">"$1$2"</span>')
            .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
            .replace(/\.(\w+)\s*\(/g, '.<span class="function">$1</span>(');
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

        updateInterceptButtonState(isActive);

        if (isActive) {
            showToast(`Started intercepting ${nameTypeToUse}`, 'success');
            // Show panel
            showInterceptorPanel(true);
        } else {
            showToast(`Stopped intercepting ${nameTypeToUse}`, 'info');
        }
    }

    function updateInterceptButtonState(isActive) {
        elements.interceptStatusDot.classList.toggle('active', isActive);
        elements.interceptToggleBtn.classList.toggle('active', isActive);

        const text = elements.interceptToggleBtn.childNodes[2]; // Access text node after span
        if (text) text.textContent = isActive ? ' Stop Intercepting' : ' Intercept';
    }

    function clearActivityLog() {
        elements.interceptorTableBody.innerHTML = '';
        elements.interceptorDetails.innerHTML = safeHTML(`
            <div class="empty-state small">
                <p>Select a request to view details</p>
            </div>
        `);
    }

    function showInterceptorPanel(show) {
        // Toggle between code/results and interceptor panel
        // Or specific layout
        if (show) {
            elements.codeContainer.style.display = 'none';
            elements.resultsSection.style.display = 'none';
            elements.interceptorPanel.style.display = 'flex';
        } else {
            elements.codeContainer.style.display = 'block';
            elements.resultsSection.style.display = 'flex';
            elements.interceptorPanel.style.display = 'none';
        }
    }

    // Unified function to add rows to the table
    function addActivityRow(data) {
        const { id, interface: iface, method, params, timestamp, type, status } = data;

        const row = document.createElement('tr');
        row.dataset.id = id;
        row.dataset.type = type || 'INTERCEPT'; // 'INTERCEPT' or 'MANUAL'

        // Visual indicator for manual vs intercept
        const typeIcon = type === 'MANUAL' ? '🛠️' : '📡';
        const displayStatus = status || 'Pending';
        const statusClass = displayStatus === 'Done' ? 'active' : (displayStatus === 'Error' ? 'error' : '');

        row.innerHTML = safeHTML(`
            <td>${new Date(timestamp).toLocaleTimeString()}</td>
            <td><span class="type-icon">${typeIcon}</span> ${escapeHtml(method)}</td>
            <td><span class="status-dot ${statusClass}"></span> ${escapeHtml(displayStatus)}</td>
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
        updateActivityRow(e.detail.id, 'Error', { error: e.detail.error });
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
            // Fallback for unknown methods
            paramsHtml = `<textarea id="interceptParams_${id}" class="params-editor" ${!isPending ? 'disabled' : ''}>${escapeHtml(safeStringify(params, 2))}</textarea>`;
        }

        elements.interceptorDetails.innerHTML = safeHTML(`
            <div class="interceptor-actions">
                <h4>${escapeHtml(iface)}.${escapeHtml(method)}</h4>
                ${(isPending && !isManual) ? `
                <div class="action-buttons">
                    <button class="btn btn-primary btn-small" onclick="resumeIntercept('${id}', false)">Forward</button>
                    <button class="btn btn-small" onclick="resumeIntercept('${id}', true)">Drop</button>
                </div>
                ` : ''}
            </div>
            <div class="code-block" style="margin-top: 10px;">
                <label style="font-size:0.8rem;color:var(--text-tertiary);">Request Params:</label>
                ${paramsHtml}
            </div>
            ${(detail.result || detail.status === 'Done') ? `
            <div class="code-block" style="margin-top: 10px;">
                <label style="font-size:0.8rem;color:var(--text-tertiary);">Result:</label>
                <div class="result-code">${escapeHtml(safeStringify(detail.result, 2))}</div>
            </div>` : ''}
            ${(detail.error || detail.status === 'Error') ? `
            <div class="code-block error-text" style="margin-top: 10px;">
                <label style="font-size:0.8rem;color:var(--text-tertiary);">Error:</label>
                <div>${escapeHtml(typeof detail.error === 'object' ? safeStringify(detail.error, 2) : detail.error)}</div>
            </div>` : ''}
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
                proxy.resumeCall(id, params, false);
                // Update history with modified params
                if (row && row.__details) {
                    row.__details.params = params;
                }
            }
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

        // Styles for toast (should be in CSS but inline for quick fix if needed)
        // Assuming .toast class exists or standard styling
        // We need to add specific styles for toast if not present or rely on existing structure
        // app.js seems to use .toast-container but styles were not fully inspected for individual toasts
        // Let's add basic inline styles to be safe or assume index.css handles it (which we viewed)
        // index.css doesn't seem to have full toast animation styles shown in the truncated view
        // Adding basic style here just in case
        toast.style.cssText = `
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
            background: var(--bg-elevated);
            border: 1px solid var(--border-subtle);
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-lg);
            color: var(--text-primary);
            margin-top: 10px;
            animation: slideIn 0.3s ease;
            min-width: 300px;
        `;

        elements.toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Start
    init();

})();
