#!/usr/bin/env node
/**
 * MojoGUI MCP Server
 * 
 * An MCP (Model Context Protocol) server that enables agentic usage of MojoGUI
 * for Chromium Mojo interface security research.
 * 
 * Prerequisites:
 * - Chrome running with: --remote-debugging-port=9222 --enable-blink-features=MojoJS,MojoJSTest
 * - MojoGUI page open at https://ndevtk.github.io/MojoGUI
 * 
 * Usage:
 * - Add to MCP config to use with AI agents
 * - Or run directly: node src/index.js
 */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { getWorkerPool, resetWorkerPool } from './worker-pool.js';
import { formatCrashError } from './result_codes.js';
import { MOJOGUI_URL } from './cdp.js';

// Create the MCP server
const server = new McpServer({
    name: 'mojogui-mcp-server',
    version: '1.0.0'
});

// Helper to execute code in MojoGUI via worker (non-blocking)
async function executeInMojoGUI(code, retryCount = 0) {
    let pool;
    try {
        pool = await getWorkerPool({ targetUrl: MOJOGUI_URL });
    } catch (error) {
        // If we can't get pool, reset and retry once
        if (retryCount === 0) {
            await resetWorkerPool();
            return executeInMojoGUI(code, 1);
        }
        throw error;
    }

    try {
        const result = await pool.evaluate(code);
        // Worker pool returns structured crash info instead of throwing
        if (result?.error === 'RENDERER_CRASHED') {
            // Auto-reset for next call
            resetWorkerPool().catch(() => { });
            return result;
        }
        return result;
    } catch (error) {
        // Handle renderer crashes from worker errors
        if (error.crashed ||
            error.message?.includes('Target closed') ||
            error.message?.includes('Connection closed') ||
            error.message?.includes('detached')) {
            await resetWorkerPool();
            return {
                error: 'RENDERER_CRASHED',
                codeName: error.crashInfo?.codeName || 'RESULT_CODE_KILLED_BAD_MESSAGE',
                exitCode: error.crashInfo?.exitCode || 3,
                message: error.crashInfo?.note || formatCrashError(3),
                recoverable: true
            };
        }
        throw error;
    }
}
// Register tools
server.tool(
    'list_interfaces',
    'Search and list available Mojo interfaces. Returns interface names, modules, and method counts.',
    {
        query: z.string().optional().describe('Search query to filter interfaces by name or module'),
        limit: z.number().optional().default(50).describe('Maximum number of interfaces to return')
    },
    async ({ query = '', limit = 50 }) => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                
                let interfaces = await api.getInterfaces();
                
                const q = ${JSON.stringify(query)}.toLowerCase();
                if (q) {
                    interfaces = interfaces.filter(i => 
                        i.name.toLowerCase().includes(q) ||
                        i.module.toLowerCase().includes(q)
                    );
                }
                
                return interfaces.slice(0, ${limit}).map(i => ({
                    name: i.name,
                    module: i.module,
                    methods: i.methods?.length || 0,
                    filename: i.filename
                }));
            })()
        `;
        const result = await executeInMojoGUI(code);
        return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
);
server.tool(
    'get_interface_details',
    'Get detailed information about a Mojo interface including all methods and their parameter signatures.',
    {
        name: z.string().describe('The interface name (e.g., "BatteryMonitor" or "device.mojom.BatteryMonitor")')
    },
    async ({ name }) => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                
                const details = await api.getInterfaceDetails(${JSON.stringify(name)});
                if (!details) throw new Error('Interface not found: ${name}');
                
                return details;
            })()
        `;
        const result = await executeInMojoGUI(code);
        return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
);
server.tool(
    'call_method',
    'Execute a Mojo method with the given parameters.  Note: To retrieve the results of intercepted calls or raw message data, you must use the "get_intercepted_calls" tool.',
    {
        interface: z.string().describe('The interface name'),
        method: z.string().describe('The method name to call'),
        params: z.record(z.any()).optional().default({}).describe('Parameter values as key-value pairs')
    },
    async ({ interface: iface, method, params = {} }) => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                
                // Validate interface and method exist
                const details = await api.getInterfaceDetails(${JSON.stringify(iface)});
                if (!details) {
                    return { success: false, error: 'Interface not found: ${iface}' };
                }
                
                const methodExists = details.methods?.some(m => 
                    m.name === ${JSON.stringify(method)} || 
                    m.name?.toLowerCase() === ${JSON.stringify(method.toLowerCase())}
                );
                if (!methodExists) {
                    return { 
                        success: false, 
                        error: 'Method not found: ${method}',
                        availableMethods: details.methods?.slice(0, 10).map(m => m.name)
                    };
                }

                api.executeMethod(
                    ${JSON.stringify(iface)},
                    ${JSON.stringify(method)},
                    ${JSON.stringify(params)}
                );
                
                return { success: true, message: 'Method execution started asynchronously' };
            })()
        `;
        const result = await executeInMojoGUI(code);
        return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
);
server.tool(
    'generate_code',
    'Generate MojoJS code for calling a method with the given parameters. Useful for understanding the API.',
    {
        interface: z.string().describe('The interface name'),
        method: z.string().describe('The method name'),
        params: z.record(z.any()).optional().default({}).describe('Parameter values as key-value pairs')
    },
    async ({ interface: iface, method, params = {} }) => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                
                return api.generateCode(
                    ${JSON.stringify(iface)},
                    ${JSON.stringify(method)},
                    ${JSON.stringify(params)}
                );
            })()
        `;
        const result = await executeInMojoGUI(code);
        return { content: [{ type: 'text', text: result }] };
    }
);
server.tool(
    'set_interceptor_mode',
    'Set the interceptor mode for a Mojo interface. The interceptor is always active - this controls whether it blocks calls (INTERCEPT) or passively logs them (LOG).',
    {
        interface: z.string().describe('The interface name'),
        mode: z.enum(['INTERCEPT', 'LOG']).describe('INTERCEPT blocks calls for modification/dropping, LOG passively records without blocking')
    },
    async ({ interface: iface, mode }) => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                
                const success = api.startInterceptor(${JSON.stringify(iface)}, ${JSON.stringify(mode)});
                const currentMode = api.getInterceptorMode(${JSON.stringify(iface)});
                return {
                    success,
                    interface: ${JSON.stringify(iface)},
                    mode: currentMode,
                    message: success 
                        ? (${JSON.stringify(mode)} === 'INTERCEPT' 
                            ? 'Blocking mode: Calls will pause for modification/drop decisions.'
                            : 'Logging mode: Calls will be passively recorded without blocking.')
                        : 'Failed to set mode. MojoJS may not be available.'
                };
            })()
        `;
        const result = await executeInMojoGUI(code);
        return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
);
server.tool(
    'set_response_interception',
    'Enable or disable response interception. When enabled, responses from Mojo calls can also be intercepted and modified.',
    {
        enabled: z.boolean().describe('true to intercept responses, false for requests only')
    },
    async ({ enabled }) => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                
                const result = api.setInterceptResponses(${enabled});
                
                return {
                    success: true,
                    interceptResponses: result,
                    message: result 
                        ? 'Response interception enabled. Responses will be captured for modification.'
                        : 'Response interception disabled. Only requests will be intercepted.'
                };
            })()
        `;
        const result = await executeInMojoGUI(code);
        return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
);
server.tool(
    'get_intercepted_calls',
    'Get list of intercepted Mojo calls. Returns call details including interface, method, parameters, and status.',
    {
        status: z.enum(['Pending', 'Done', 'Error', 'Logged', 'Response Edit', 'Forwarded', 'Dropped', 'Pending Response', 'Running', 'all']).optional().default('all')
            .describe('Filter by status'),
        limit: z.number().optional().default(20).describe('Maximum number of calls to return')
    },
    async ({ status = 'all', limit = 20 }) => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                
                let calls = api.getInterceptedCalls();
                
                if (${JSON.stringify(status)} !== 'all') {
                    calls = calls.filter(c => c.status === ${JSON.stringify(status)});
                }
                
                return calls.slice(0, ${limit});
            })()
        `;
        const result = await executeInMojoGUI(code);
        return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
);
server.tool(
    'resume_call',
    'Resume, modify, or drop an intercepted call that is pending. If the call is in "Response Edit" status, this tool will send the modified response.',
    {
        id: z.string().describe('The call ID from get_intercepted_calls'),
        params: z.array(z.any()).optional().describe('Modified parameters (uses original if not provided for request modification)'),
        result: z.any().optional().describe('Modified result (for response modification when status is "Response Edit")'),
        drop: z.boolean().optional().default(false).describe('If true, drop the call instead of forwarding'),
        intercept_response: z.boolean().optional().default(false).describe('If true, also intercept the response')
    },
    async ({ id, params, result, drop = false, intercept_response = false }) => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                
                // Check if this is a response edit or request resume
                const calls = api.getInterceptedCalls();
                const call = calls.find(c => c.id === ${JSON.stringify(id)});
                
                if (call && call.status === 'Response Edit') {
                    return api.sendResponse(
                        ${JSON.stringify(id)},
                        ${result !== undefined ? JSON.stringify(result) : 'call.result'}
                    );
                }

                return api.resumeCall(
                    ${JSON.stringify(id)},
                    ${params ? JSON.stringify(params) : 'null'},
                    ${drop},
                    ${intercept_response}
                );
            })()
        `;
        const mcpResult = await executeInMojoGUI(code);
        return { content: [{ type: 'text', text: JSON.stringify(mcpResult, null, 2) }] };
    }
);

// New tool: Replay a captured call
server.tool(
    'replay_call',
    'Re-execute a previously captured call with optional parameter modifications. The call must exist in the activity log.',
    {
        id: z.string().describe('The call ID to replay from activity log'),
        params: z.record(z.any()).optional().describe('Optional modified parameters')
    },
    async ({ id, params }) => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                
                const result = await api.replayCall(
                    ${JSON.stringify(id)},
                    ${params ? JSON.stringify(params) : 'null'}
                );
                
                return result;
            })()
        `;
        const result = await executeInMojoGUI(code);
        return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
);

// New tool: Check MojoJS status
server.tool(
    'check_mojo_status',
    'Check if MojoJS is available in the browser. Returns status and helpful error messages if not enabled.',
    {},
    async () => {
        const code = `
            (async () => {
                const mojoAvailable = typeof Mojo !== 'undefined';
                const mojoJSTestAvailable = typeof MojoInterfaceInterceptor !== 'undefined';
                
                return {
                    mojoJS: mojoAvailable,
                    mojoJSTest: mojoJSTestAvailable,
                    fullyEnabled: mojoAvailable && mojoJSTestAvailable,
                    message: mojoAvailable 
                        ? (mojoJSTestAvailable 
                            ? 'MojoJS and MojoJSTest are both enabled. All features available.'
                            : 'MojoJS enabled but MojoJSTest not available. Interception may not work.')
                        : 'MojoJS not enabled. Start Chrome with --enable-blink-features=MojoJS,MojoJSTest'
                };
            })()
        `;
        const result = await executeInMojoGUI(code);
        return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
);

// New tool: Get traffic stats
server.tool(
    'get_traffic_stats',
    'Get statistics about intercepted traffic including total calls, pending, completed, and errors.',
    {},
    async () => {
        const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                
                const calls = api.getInterceptedCalls() || [];
                const stats = {
                    total: calls.length,
                    pending: calls.filter(c => c.status === 'Pending').length,
                    done: calls.filter(c => c.status === 'Done').length,
                    logged: calls.filter(c => c.status === 'Logged').length,
                    errors: calls.filter(c => c.status === 'Error').length,
                    byInterface: {}
                };
                
                calls.forEach(c => {
                    const iface = c.interface || 'unknown';
                    stats.byInterface[iface] = (stats.byInterface[iface] || 0) + 1;
                });
                
                return stats;
            })()
        `;
        const result = await executeInMojoGUI(code);
        return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
);

// New tool: Get version info
server.tool(
    'get_version_info',
    'Get browser and Chromium version information. Useful for checking binding compatibility.',
    {},
    async () => {
        const code = `
            (async () => {
                let version = { raw: navigator.userAgent };
                
                try {
                    if (navigator.userAgentData) {
                        const hints = await navigator.userAgentData.getHighEntropyValues([
                            'fullVersionList', 'platform', 'platformVersion'
                        ]);
                        version.platform = hints.platform;
                        version.platformVersion = hints.platformVersion;
                        version.fullVersionList = hints.fullVersionList;
                        
                        const chrome = hints.fullVersionList?.find(b => b.brand === 'Google Chrome' || b.brand === 'Chromium');
                        if (chrome) {
                            version.chromiumVersion = chrome.version;
                            version.majorVersion = parseInt(chrome.version.split('.')[0]);
                        }
                    }
                } catch (e) {
                    version.error = 'Could not get high-entropy version info: ' + e.message;
                }
                
                return version;
            })()
        `;
        const result = await executeInMojoGUI(code);
        return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
);

server.tool(
    'run_javascript',
    'Execute arbitrary JavaScript in the MojoGUI context. Use the "async" parameter for code that might block (e.g. waiting for an intercepted Mojo call). IMPORTANT: You MUST use the "return" keyword to capture results. Data logged with console.log() will not appear in the tool output or the MojoGUI result section.',
    {
        code: z.string().describe('The JavaScript code to execute'),
        async: z.boolean().optional().default(false).describe('If true, don\'t wait for the code to complete')
    },
    async ({ code, async: isAsync = false }) => {
        const wrappedCode = `
            (async () => {
                const api = window.MojoGUI_API;
                
                if (${isAsync}) {
                    const id = api.addActivity({
                        interface: 'Script',
                        method: 'run_javascript',
                        params: ${JSON.stringify(code)},
                        status: 'Running'
                    });

                    // Start execution without awaiting
                    (async () => {
                        try {
                            const result = await (async () => {
                                ${code}
                            })();
                            api.updateActivity(id, 'Done', result);
                        } catch (e) {
                            console.error('Async JS execution error:', e);
                            api.updateActivity(id, 'Error', e.message);
                        }
                    })();
                    return { success: true, activityId: id, message: 'JavaScript execution started asynchronously' };
                }

                try {
                    const result = await (async () => {
                        ${code}
                    })();
                    return { success: true, result };
                } catch (e) {
                    return { success: false, error: e.message };
                }
            })()
        `;
        const result = await executeInMojoGUI(wrappedCode);
        return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
);

// Start the server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error('[MojoGUI MCP] Server started');
}
main().catch((error) => {
    console.error('[MojoGUI MCP] Fatal error:', error);
    process.exit(1);
});

