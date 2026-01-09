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
        toastContainer: document.getElementById('toastContainer')
    };

    // ========================================
    // Initialization
    // ========================================
    async function init() {
        checkMojoAvailability();
        await loadInterfaces();
        setupEventListeners();
    }

    function checkMojoAvailability() {
        state.mojoAvailable = typeof Mojo !== 'undefined' && Mojo.bindInterface;

        const statusEl = elements.mojoStatus;
        const statusText = statusEl.querySelector('.status-text');

        if (state.mojoAvailable) {
            statusEl.classList.add('connected');
            statusEl.classList.remove('error');
            statusText.textContent = 'MojoJS Enabled';
        } else {
            statusEl.classList.add('error');
            statusEl.classList.remove('connected');
            statusText.textContent = 'MojoJS Disabled';
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
        // Demo interfaces for testing when bindings aren't available
        state.interfaces = [
            {
                name: 'BlobRegistry',
                module: 'blink.mojom',
                file: 'blink_blob_registry.mojom.js',
                methods: ['Register', 'RegisterFromStream', 'GetBlobFromUUID']
            },
            {
                name: 'FileSystemManager',
                module: 'blink.mojom',
                file: 'file_system_manager.mojom.js',
                methods: ['Open', 'ResolveURL', 'Move', 'Copy', 'Remove', 'ReadMetadata', 'Create', 'Exists', 'ReadDirectory', 'Write', 'Truncate', 'CreateSnapshotFile']
            },
            {
                name: 'GeolocationService',
                module: 'device.mojom',
                file: 'geolocation_service.mojom.js',
                methods: ['CreateGeolocation']
            },
            {
                name: 'PaymentRequest',
                module: 'payments.mojom',
                file: 'payment_request.mojom.js',
                methods: ['Init', 'Show', 'UpdateWith', 'OnPaymentDetailsNotUpdated', 'Abort', 'Complete', 'Retry', 'CanMakePayment', 'HasEnrolledInstrument']
            },
            {
                name: 'WebBluetoothService',
                module: 'blink.mojom',
                file: 'web_bluetooth.mojom.js',
                methods: ['RequestDevice', 'RemoteServerConnect', 'RemoteServerDisconnect', 'RemoteServerGetPrimaryServices']
            },
            {
                name: 'WebUSB',
                module: 'blink.mojom',
                file: 'webusb.mojom.js',
                methods: ['GetDevices', 'GetDevice', 'GetPermission', 'SetClient']
            },
            {
                name: 'SerialService',
                module: 'blink.mojom',
                file: 'serial.mojom.js',
                methods: ['SetClient', 'GetPorts', 'RequestPort', 'OpenPort', 'ForgetPort']
            },
            {
                name: 'HidService',
                module: 'blink.mojom',
                file: 'hid.mojom.js',
                methods: ['RegisterClient', 'GetDevices', 'RequestDevice', 'Connect', 'Forget']
            },
            {
                name: 'SensorProvider',
                module: 'device.mojom',
                file: 'sensor_provider.mojom.js',
                methods: ['GetSensor']
            },
            {
                name: 'NetworkContext',
                module: 'network.mojom',
                file: 'network_context.mojom.js',
                methods: ['CreateURLLoaderFactory', 'ResetURLLoaderFactories', 'GetCookieManager', 'GetRestrictedCookieManager']
            },
            {
                name: 'CredentialManager',
                module: 'blink.mojom',
                file: 'credential_manager.mojom.js',
                methods: ['Get', 'Store', 'PreventSilentAccess']
            },
            {
                name: 'Authenticator',
                module: 'blink.mojom',
                file: 'authenticator.mojom.js',
                methods: ['MakeCredential', 'GetAssertion', 'IsUserVerifyingPlatformAuthenticatorAvailable', 'Cancel']
            }
        ];

        renderInterfaceList(state.interfaces);
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
            item.addEventListener('click', () => selectInterface(item.dataset.name));
        });
    }

    async function selectInterface(name) {
        const iface = state.interfaces.find(i => i.name === name);
        if (!iface) return;

        state.selectedInterface = iface;
        state.selectedMethod = null;
        state.paramValues = {};

        // Update UI
        elements.interfaceList.querySelectorAll('.interface-item').forEach(item => {
            item.classList.toggle('active', item.dataset.name === name);
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
        // Demo parameter definitions
        const paramDefs = {
            'BlobRegistry': {
                'Register': [
                    { name: 'blob', type: 'pending_remote<Blob>', optional: false },
                    { name: 'uuid', type: 'string', optional: false },
                    { name: 'content_type', type: 'string', optional: false },
                    { name: 'content_disposition', type: 'string', optional: true }
                ],
                'GetBlobFromUUID': [
                    { name: 'blob', type: 'pending_receiver<Blob>', optional: false },
                    { name: 'uuid', type: 'string', optional: false }
                ]
            },
            'FileSystemManager': {
                'Open': [
                    { name: 'path', type: 'string', optional: false },
                    { name: 'mode', type: 'FileSystemAccessMode', optional: false }
                ],
                'Create': [
                    { name: 'path', type: 'string', optional: false },
                    { name: 'exclusive', type: 'bool', optional: false },
                    { name: 'is_directory', type: 'bool', optional: false }
                ]
            },
            'PaymentRequest': {
                'Init': [
                    { name: 'client', type: 'pending_remote<PaymentRequestClient>', optional: false },
                    { name: 'method_data', type: 'array<PaymentMethodData>', optional: false },
                    { name: 'details', type: 'PaymentDetails', optional: false },
                    { name: 'options', type: 'PaymentOptions', optional: true }
                ],
                'Show': [
                    { name: 'is_user_gesture', type: 'bool', optional: false },
                    { name: 'wait_for_updated_details', type: 'bool', optional: false }
                ],
                'Abort': [],
                'Complete': [
                    { name: 'result', type: 'PaymentComplete', optional: false }
                ]
            },
            'WebBluetoothService': {
                'RequestDevice': [
                    { name: 'options', type: 'RequestDeviceOptions', optional: false }
                ],
                'RemoteServerConnect': [
                    { name: 'device_id', type: 'string', optional: false }
                ]
            },
            'WebUSB': {
                'GetDevices': [],
                'GetDevice': [
                    { name: 'guid', type: 'string', optional: false }
                ],
                'RequestPort': [
                    { name: 'filters', type: 'array<DeviceFilter>', optional: true }
                ]
            },
            'Authenticator': {
                'MakeCredential': [
                    { name: 'options', type: 'PublicKeyCredentialCreationOptions', optional: false }
                ],
                'GetAssertion': [
                    { name: 'options', type: 'PublicKeyCredentialRequestOptions', optional: false }
                ],
                'Cancel': []
            }
        };

        return paramDefs[interfaceName]?.[methodName] || generateDefaultParams(methodName);
    }

    function generateDefaultParams(methodName) {
        // Generate sensible default params based on method name
        const params = [];

        if (methodName.toLowerCase().includes('get') || methodName.toLowerCase().includes('fetch')) {
            params.push({ name: 'id', type: 'string', optional: false });
        } else if (methodName.toLowerCase().includes('set') || methodName.toLowerCase().includes('update')) {
            params.push({ name: 'value', type: 'any', optional: false });
        } else if (methodName.toLowerCase().includes('create') || methodName.toLowerCase().includes('add')) {
            params.push({ name: 'options', type: 'object', optional: true });
        }

        return params;
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
            const inputType = MojoParser.getInputType(param.type);
            const defaultValue = MojoParser.getDefaultValue(param.type);

            if (inputType === 'checkbox') {
                return `
                    <div class="form-group">
                        <label>
                            <input type="checkbox" 
                                   name="${escapeHtml(param.name)}" 
                                   data-type="${escapeHtml(param.type)}"
                                   ${defaultValue ? 'checked' : ''}>
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
                        <textarea name="${escapeHtml(param.name)}" 
                                  data-type="${escapeHtml(param.type)}"
                                  placeholder="Enter JSON...">${escapeHtml(JSON.stringify(defaultValue, null, 2))}</textarea>
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
                        <input type="${inputType}" 
                               name="${escapeHtml(param.name)}" 
                               data-type="${escapeHtml(param.type)}"
                               value="${escapeHtml(defaultValue ?? '')}"
                               placeholder="Enter ${escapeHtml(param.type)}...">
                    </div>
                `;
            }
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
        if (type && (type.includes('array') || type.includes('map') || type.includes('object'))) {
            try {
                state.paramValues[name] = JSON.parse(value);
            } catch {
                state.paramValues[name] = value;
            }
        } else {
            state.paramValues[name] = value;
        }
    }

    // ========================================
    // Code Generation
    // ========================================
    function updateGeneratedCode() {
        if (!state.selectedInterface) {
            elements.generatedCode.innerHTML = safeHTML(highlightSyntax('// Select an interface and method to generate code'));
            return;
        }

        const code = generateCode();
        elements.generatedCode.innerHTML = safeHTML(highlightSyntax(code));
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
            code += `const ${iface.name.toLowerCase()}Remote = ${namespace}.${iface.name}.getRemote();\n\n`;
            code += `// Select a method to see the full call...`;
            return code;
        }

        const remoteName = iface.name.charAt(0).toLowerCase() + iface.name.slice(1) + 'Remote';
        const methodName = method.charAt(0).toLowerCase() + method.slice(1);

        code += `// Get remote for the interface\n`;
        code += `const ${remoteName} = ${namespace}.${iface.name}.getRemote();\n\n`;

        // Generate method call with params
        const params = Object.entries(state.paramValues);

        if (params.length > 0) {
            code += `// Method parameters\n`;
            params.forEach(([key, value]) => {
                const valueStr = typeof value === 'string' ? `"${value}"` : JSON.stringify(value);
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
        elements.resultsSection.style.display = 'flex';
        elements.executionResults.textContent = 'Executing...';
        elements.executionResults.className = 'results-block';

        try {
            // Use script injection approach that works with Trusted Types
            // Wrap code in an async IIFE that stores result in window
            const wrappedCode = `
                (async () => {
                    try {
                        ${code}
                        window.__mojoExecuteResult = { success: true, result: typeof result !== 'undefined' ? result : 'completed' };
                    } catch (error) {
                        window.__mojoExecuteResult = { success: false, error: error.message, stack: error.stack };
                    }
                    window.dispatchEvent(new Event('mojoExecuteComplete'));
                })();
            `;

            // Create promise to wait for execution
            const resultPromise = new Promise((resolve) => {
                window.addEventListener('mojoExecuteComplete', function handler() {
                    window.removeEventListener('mojoExecuteComplete', handler);
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

            if (result.success) {
                elements.executionResults.textContent = 'Success:\n' + JSON.stringify(result.result, null, 2);
                elements.executionResults.classList.add('success');
            } else {
                elements.executionResults.textContent = 'Error:\n' + result.error + '\n\nStack:\n' + result.stack;
                elements.executionResults.classList.add('error');
            }
        } catch (error) {
            elements.executionResults.textContent = 'Error:\n' + error.message + '\n\nStack:\n' + error.stack;
            elements.executionResults.classList.add('error');
        }
    }

    function resetParams() {
        state.paramValues = {};
        if (state.selectedMethod) {
            const params = getMethodParams(state.selectedInterface.name, state.selectedMethod);
            renderParamsForm(params);
        }
    }

    function clearResults() {
        elements.executionResults.textContent = '// Results will appear here';
        elements.executionResults.className = 'results-block';
    }

    // ========================================
    // Toast Notifications
    // ========================================
    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = safeHTML(`
            <span>${escapeHtml(message)}</span>
        `);

        elements.toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // ========================================
    // Start the app
    // ========================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
