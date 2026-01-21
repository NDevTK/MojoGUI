import { parentPort, workerData } from 'worker_threads';
import { getClient, resetClient } from './cdp.js';

/**
 * Helper to execute code in MojoGUI via CDP
 */
async function executeInMojoGUI(code, retryCount = 0) {
    let cdp;
    try {
        cdp = await getClient();
    } catch (error) {
        if (retryCount === 0) {
            resetClient();
            return executeInMojoGUI(code, 1);
        }
        throw error;
    }

    const ready = await cdp.isMojoGUIReady();
    if (!ready) {
        try {
            await cdp.waitForMojoGUI(15000);
        } catch (e) {
            if (retryCount === 0) {
                try { await cdp.reload(); } catch (err) {}
                resetClient();
                return executeInMojoGUI(code, 1);
            }
            throw e;
        }
    }

    try {
        return await cdp.evaluate(code);
    } catch (error) {
        if (error.message?.includes('Target Crashed') || 
            error.message?.includes('Target closed') ||
            error.message?.includes('Connection closed') ||
            error.message?.includes('detached')) {
            
            try { await cdp.reload(); } catch (err) {}
            resetClient();
            const crashMsg = 'Renderer Crashed. Details: ' + error.message;
            parentPort.postMessage({ type: 'CRASH_REPORT', error: crashMsg });
            throw new Error(crashMsg);
        }
        throw error;
    }
}

const tools = {
    list_interfaces: async ({ query = '', limit = 50 }) => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error("MojoGUI API not available");
                let interfaces = await api.getInterfaces();
                const q = ${JSON.stringify(query)}.toLowerCase();
                if (q) interfaces = interfaces.filter(i => i.name.toLowerCase().includes(q) || i.module.toLowerCase().includes(q));
                return interfaces.slice(0, ${limit}).map(i => ({ 
                    name: i.name, 
                    module: i.module, 
                    methods: i.methods?.length || 0, 
                    filename: i.filename 
                }));
            })()
        `;
        return await executeInMojoGUI(code);
    },

    get_interface_details: async ({ name }) => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error("MojoGUI API not available");
                const details = await api.getInterfaceDetails(${JSON.stringify(name)});
                if (!details) return null;

                const simplifyType = (p) => {
                    if (!p) return "unknown";
                    if (p.type === "struct" && p.structSpec) return "Struct<" + p.structSpec.name.split(".").pop() + ">";
                    if (p.type === "union" && p.structSpec) return "Union<" + p.structSpec.name.split(".").pop() + ">";
                    if (p.type === "array" && p.elementSpec) {
                        const element = p.elementSpec.$ || p.elementSpec;
                        const name = element.name || (element.structSpec && element.structSpec.name) || "any";
                        return "Array<" + name.split(".").pop() + ">";
                    }
                    if (typeof p.type === "object" && p.type.type === "enum") return "Enum";
                    return p.type;
                };

                return {
                    name: details.name,
                    module: details.module,
                    methods: details.methods.map(m => ({
                        name: m.name,
                        parameters: (m.parameters || []).map(p => ({ 
                            name: p.name, 
                            type: simplifyType(p), 
                            originalType: p.type, 
                            optional: !!p.optional 
                        })),
                        responseParams: (m.responseParams || []).map(p => ({ 
                            name: p.name, 
                            type: simplifyType(p) 
                        }))
                    }))
                };
            })()
        `;
        return await executeInMojoGUI(code);
    },

    get_fuzzing_templates: async ({ interface: iface, method }) => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error("MojoGUI API not available");
                await api.ensureBinding(${JSON.stringify(iface)});
                const paramsDef = api.getMethodParams(${JSON.stringify(iface)}, ${JSON.stringify(method)});
                if (!paramsDef) throw new Error("Method parameters not found");

                const generateValue = (type, spec, strategy) => {
                    if (strategy === "null") return null;
                    if (type === "bool") return strategy === "max" ? true : false;
                    if (type === "string") return strategy === "max" ? "A".repeat(1024 * 10) : (strategy === "empty" ? "" : "test");
                    if (type === "int32" || type === "number") return strategy === "max" ? 2147483647 : (strategy === "min" ? -2147483648 : 0);
                    if (type === "uint32") return strategy === "max" ? 4294967295 : 0;
                    if (type === "int64") return strategy === "max" ? "9223372036854775807" : "0";
                    if (type === "uint64") return strategy === "max" ? "18446744073709551615" : "0";
                    if (type === "array") return strategy === "max" ? Array(100).fill(0) : [];
                    if (type === "map") return {};
                    if (type === "struct") return {};
                    if (type === "union") return {};
                    return null;
                };

                const strategies = ["default", "null", "max", "empty"];
                const templates = {};
                strategies.forEach(strategy => {
                    const payload = {};
                    paramsDef.forEach(p => {
                        payload[p.name] = generateValue(p.type, p.structSpec || p.elementSpec, strategy);
                    });
                    templates[strategy] = payload;
                });
                return templates;
            })()
        `;
        return await executeInMojoGUI(code);
    },

    call_method: async ({ interface: iface, method, params = {} }) => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error("MojoGUI API not available");
                api.executeMethod(
                    ${JSON.stringify(iface)}, 
                    ${JSON.stringify(method)}, 
                    ${JSON.stringify(params)}
                ).catch(e => console.error("ExecuteMethod error:", e));
                return { status: "Call initiated" };
            })()
        `;
        const result = await executeInMojoGUI(code);
        
        // Short wait for immediate crashes
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        try {
            const cdp = await getClient();
            await cdp.waitForCrashOrTimeout(100);
        } catch (e) {
            if (e.message && e.message.startsWith("Target Crashed")) {
                 const crashMsg = "Renderer Crashed. Details: " + e.message;
                 parentPort.postMessage({ type: "CRASH_REPORT", error: crashMsg });
                 throw new Error(crashMsg);
            }
            throw e;
        }
        return result;
    },

    generate_code: async ({ interface: iface, method, params = {} }) => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error("MojoGUI API not available");
                return api.generateCode(
                    ${JSON.stringify(iface)}, 
                    ${JSON.stringify(method)}, 
                    ${JSON.stringify(params)}
                );
            })()
        `;
        return await executeInMojoGUI(code);
    },

    start_interceptor: async ({ interface: iface }) => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error("MojoGUI API not available");
                const success = api.startInterceptor(${JSON.stringify(iface)}, "INTERCEPT");
                return { success, interface: ${JSON.stringify(iface)}, mode: "INTERCEPT" };
            })()
        `;
        return await executeInMojoGUI(code);
    },

    stop_interceptor: async ({ interface: iface }) => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error("MojoGUI API not available");
                api.startInterceptor(${JSON.stringify(iface)}, "LOG");
                return { success: true, interface: ${JSON.stringify(iface)}, mode: "LOG" };
            })()
        `;
        return await executeInMojoGUI(code);
    },

    set_response_interception: async ({ enabled }) => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error("MojoGUI API not available");
                const toggle = document.getElementById("interceptRespToggle");
                if (toggle) { 
                    toggle.checked = ${enabled}; 
                    toggle.dispatchEvent(new Event("change")); 
                    return { success: true, enabled: ${enabled} }; 
                }
                return { success: false, error: "Toggle control not found" };
            })()
        `;
        return await executeInMojoGUI(code);
    },

    get_intercepted_calls: async ({ status = 'all', limit = 20 }) => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error("MojoGUI API not available");
                let calls = api.getInterceptedCalls();
                if (${JSON.stringify(status)} !== "all") {
                    calls = calls.filter(c => c.status === ${JSON.stringify(status)});
                }
                return calls.slice(0, ${limit});
            })()
        `;
        let calls = await executeInMojoGUI(code);
        if ((!calls || calls.length === 0) && workerData.lastCrash) {
            calls = [{ 
                id: 'SYSTEM_CRASH', 
                type: 'SYSTEM', 
                interface: 'System', 
                method: 'RendererCrashed', 
                status: 'Error', 
                result: null, 
                error: workerData.lastCrash.error, 
                timestamp: workerData.lastCrash.timestamp 
            }];
        }
        return calls;
    },

    resume_call: async ({ id, params, drop = false, intercept_response = false }) => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error("MojoGUI API not available");
                return api.resumeCall(
                    ${JSON.stringify(id)}, 
                    ${params ? JSON.stringify(params) : 'null'}, 
                    ${drop}, 
                    ${intercept_response}
                );
            })()
        `;
        return await executeInMojoGUI(code);
    },

    send_response: async ({ id, result }) => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error("MojoGUI API not available");
                return api.sendResponse(${JSON.stringify(id)}, ${JSON.stringify(result)});
            })()
        `;
        return await executeInMojoGUI(code);
    },

    replay_call: async ({ id, params }) => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error("MojoGUI API not available");
                return api.replayCall(${JSON.stringify(id)}, ${params ? JSON.stringify(params) : 'null'});
            })()
        `;
        return await executeInMojoGUI(code);
    },

    clear_logs: async () => {
        const code = `
            (async () => {
                const btn = document.getElementById("clearActivityBtn");
                if (btn) btn.click();
                return { success: true, message: "Activity log cleared" };
            })()
        `;
        return await executeInMojoGUI(code);
    },

    run_script: async ({ script }) => {
        const code = `
            (async () => {
                try { 
                    return await (async () => { ${script} })(); 
                } catch (error) { 
                    return { error: error.message, stack: error.stack }; 
                }
            })()
        `;
        return await executeInMojoGUI(code);
    },
    
    mojogui_crash_state: async () => {
        if (!workerData.lastCrash) return "No crashes detected.";
        return workerData.lastCrash;
    },

    find_interface_references: async ({ name }) => {
        const jobId = 'job_' + Date.now();
        
        // Start async job in background
        (async () => {
            const BATCH_SIZE = 5;
            const results = [];
            
            try {
                // 1. Get List of Interfaces
                const listCode = `(async () => { return (await window.MojoGUI_API.getInterfaces()).map(i => i.name); })()`;
                const interfaceNames = await executeInMojoGUI(listCode);
                
                // 2. Iterate in batches
                for (let i = 0; i < interfaceNames.length; i += BATCH_SIZE) {
                    const batch = interfaceNames.slice(i, i + BATCH_SIZE);
                    
                    parentPort.postMessage({ type: 'JOB_PROGRESS', jobId, progress: Math.round((i / interfaceNames.length) * 100) });

                    const batchCode = `
                        (async () => {
                            const api = window.MojoGUI_API;
                            const targetName = ${JSON.stringify(name)};
                            const batch = ${JSON.stringify(batch)};
                            const batchResults = [];
                            
                            for (const ifaceName of batch) {
                                try {
                                    const details = await api.getInterfaceDetails(ifaceName);
                                    if (!details || !details.methods) continue;
                                    
                                    for (const method of details.methods) {
                                        if (method.parameters) {
                                            for (const p of method.parameters) {
                                                const typeName = p.structSpec ? p.structSpec.name : (typeof p.type === "string" ? p.type : "");
                                                if (typeName && typeName.includes(targetName)) {
                                                    batchResults.push({ type: "Sink (Param)", interface: ifaceName, method: method.name, param: p.name });
                                                }
                                            }
                                        }
                                        if (method.responseParams) {
                                            for (const p of method.responseParams) {
                                                const typeName = p.structSpec ? p.structSpec.name : (typeof p.type === "string" ? p.type : "");
                                                if (typeName && typeName.includes(targetName)) {
                                                    batchResults.push({ type: "Source (Return)", interface: ifaceName, method: method.name, param: p.name });
                                                }
                                            }
                                        }
                                    }
                                } catch (e) {}
                            }
                            return batchResults;
                        })()
                    `;
                    
                    const batchResults = await executeInMojoGUI(batchCode);
                    if (batchResults) results.push(...batchResults);
                    
                    await new Promise(r => setTimeout(r, 100));
                }
                
                parentPort.postMessage({ type: 'JOB_COMPLETE', jobId, result: results });
                resetClient();
                process.exit(0);
                
            } catch (err) {
                parentPort.postMessage({ type: 'JOB_COMPLETE', jobId, error: err.message });
                resetClient();
                process.exit(1);
            }
        })();

        return { status: 'Job started', jobId };
    }
};

// Worker execution
(async () => {
    try {
        const { tool, args } = workerData;
        if (!tools[tool]) throw new Error(`Unknown tool: ${tool}`);
        
        const result = await tools[tool](args);
        
        if (result && result.status === 'Job started') {
            parentPort.postMessage({ success: true, result });
        } else {
            resetClient();
            parentPort.postMessage({ success: true, result });
        }
    } catch (error) {
        resetClient();
        parentPort.postMessage({ success: false, error: error.message, stack: error.stack });
    }
})();
