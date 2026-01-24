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
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { exec } from "child_process";
import { promisify } from "util";
import fs from "fs";
import path from "path";
import { getWorkerPool, resetWorkerPool } from "./worker-pool.js";
import { MOJOGUI_URL } from "./cdp.js";
import { SelfImprovement } from "./self-improvement.js";

const execAsync = promisify(exec);

// Initialize self-improvement tracking
SelfImprovement.init();

// Create the MCP server
const server = new McpServer({
  name: "mojogui-mcp-server",
  version: "1.0.0",
});

// Helper to execute code in MojoGUI via worker (non-blocking)
async function executeInMojoGUI(code, retryCount = 0, options = {}) {
  let pool;
  try {
    pool = await getWorkerPool({ targetUrl: MOJOGUI_URL });
  } catch (error) {
    // If we can't get pool, reset and retry once
    if (retryCount === 0) {
      await resetWorkerPool();
      return executeInMojoGUI(code, 1, options);
    }
    throw error;
  }

  try {
    const result = await pool.evaluate(code, options);
    return result;
  } catch (error) {
    // If renderer crashed, try to get last logs and reset
    if (error.crashed) {
      let logs = [];
      try {
        // Get last 10 logs for context
        logs = await pool.getLogs();
        logs = logs.slice(-10);
      } catch (logError) {
        console.error(
          "[MojoGUI MCP] Failed to get logs after crash:",
          logError.message,
        );
      }

      // Append logs to error message
      if (logs.length > 0) {
        error.message +=
          "\n\nRecent console logs:\n" +
          logs.map((l) => `[${l.type}] ${l.text}`).join("\n");
      }

      await resetWorkerPool();
    }
    throw error;
  }
}

// Register tools
server.tool(
  "list_interfaces",
  "Search and list available Mojo interfaces. Returns interface names, modules, and method counts.",
  {
    query: z
      .string()
      .optional()
      .describe("Search query to filter interfaces by name or module"),
    limit: z
      .number()
      .optional()
      .default(50)
      .describe("Maximum number of interfaces to return"),
  },
  async ({ query = "", limit = 50 }) => {
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
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  },
);
server.tool(
  "get_interface_details",
  "Get detailed information about a Mojo interface including all methods and their parameter signatures.",
  {
    name: z
      .string()
      .describe(
        'The interface name (e.g., "BatteryMonitor" or "device.mojom.BatteryMonitor")',
      ),
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
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  },
);
server.tool(
  "bind_interface",
  "Bind a Mojo interface and return a persistent objectId for future calls.",
  {
    interface: z
      .string()
      .describe('The interface name (e.g. "blink.mojom.ClipboardHost")'),
  },
  async ({ interface: iface }) => {
    const code = `
            (async () => {
                const executor = window.MojoExecutionService;
                if (!executor) throw new Error('MojoExecutionService not available');
                
                // We call a dummy method or just rely on the side effect of 'call' resolving the target
                // Actually, let's just implement a minimal bind in ExecutionService or here.
                // ExecutionService.call handles binding if objectId is missing.
                // We can call a non-existent method and catch, or just return the remote info.
                
                // Safer: Use a helper or just return the object registry ID.
                const fqn = await window.MojoLoader.ensureBinding(${JSON.stringify(iface)});
                const name = fqn || ${JSON.stringify(iface)};
                const comps = window.MojoProxy.getInterfaceComponents(name);
                const remote = new comps.Remote();
                const receiver = remote.bindNewPipeAndPassReceiver();
                const rawHandle = window.MojoProxy.getRawHandleFromMojoObject(receiver) || receiver.handle || receiver;
                Mojo.bindInterface(name, rawHandle);
                
                const id = window.MojoObjectRegistry.register(remote, name);
                return { objectId: id, type: name };
            })()
        `;
    const result = await executeInMojoGUI(code);
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  },
);
server.tool(
  "call_method",
  'Execute a Mojo method with the given parameters. Use "objectId" from bind_interface or previous calls to chain. Note: To retrieve the results of intercepted calls or raw message data, you must use the "get_intercepted_calls" tool.',
  {
    interface: z
      .string()
      .optional()
      .describe('The interface name (e.g. "blink.mojom.FileSystemManager")'),
    objectId: z
      .string()
      .optional()
      .describe(
        'ID of an existing object/remote returned by a previous call (e.g. "obj_1")',
      ),
    method: z.string().describe("The method name to call"),
    params: z
      .record(z.any())
      .optional()
      .default({})
      .describe("Parameter values as key-value pairs"),
    isAssociated: z
      .boolean()
      .optional()
      .default(false)
      .describe(
        "If true, bind as an associated interface to an existing master handle",
      ),
    masterHandleId: z
      .string()
      .optional()
      .describe(
        "The ID of the master handle to bind to (required if isAssociated is true)",
      ),
    interfaceId: z
      .number()
      .optional()
      .default(0)
      .describe("The interface ordinal ID for the associated interface"),
    userGesture: z
      .boolean()
      .optional()
      .default(false)
      .describe(
        "If true, simulate a user gesture (activation) for the execution",
      ),
  },
  async ({
    interface: iface,
    objectId,
    method,
    params = {},
    isAssociated = false,
    masterHandleId,
    interfaceId = 0,
    userGesture = false,
  }) => {
    const code = `
            (async () => {
                const api = window.MojoGUI_API;
                const executor = window.MojoExecutionService;
                const utils = window.MojoUtils;
                if (!executor) throw new Error('MojoExecutionService not available');
                
                const res = await executor.call(
                    { 
                        interface: ${iface ? JSON.stringify(iface) : "null"},
                        objectId: ${objectId ? JSON.stringify(objectId) : "null"},
                        masterHandleId: ${masterHandleId ? JSON.stringify(masterHandleId) : "null"}
                    },
                    ${JSON.stringify(method)},
                    ${JSON.stringify(params)},
                    {
                        isAssociated: ${isAssociated},
                        interfaceId: ${interfaceId}
                    }
                );
                // Use safeStringify to handle BigInt
                return utils.safeStringify(res, 2);
            })()
        `;
    const result = await executeInMojoGUI(code, 0, { userGesture });
    // result is already a JSON string from safeStringify
    return { content: [{ type: "text", text: result || "{}" }] };
  },
);
server.tool(
  "generate_code",
  "Generate MojoJS code for calling a method with the given parameters. Useful for understanding the API.",
  {
    interface: z.string().describe("The interface name"),
    method: z.string().describe("The method name"),
    params: z
      .record(z.any())
      .optional()
      .default({})
      .describe("Parameter values as key-value pairs"),
    isAssociated: z
      .boolean()
      .optional()
      .default(false)
      .describe(
        "If true, bind as an associated interface to an existing master handle",
      ),
    masterHandleId: z
      .string()
      .optional()
      .describe(
        "The ID of the master handle to bind to (required if isAssociated is true)",
      ),
    interfaceId: z
      .number()
      .optional()
      .default(0)
      .describe("The interface ordinal ID for the associated interface"),
  },
  async ({
    interface: iface,
    method,
    params = {},
    isAssociated = false,
    masterHandleId,
    interfaceId = 0,
  }) => {
    const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                
                return api.generateCode(
                    ${JSON.stringify(iface)},
                    ${JSON.stringify(method)},
                    ${JSON.stringify(params)},
                    {
                        isAssociated: ${isAssociated},
                        masterHandleId: ${masterHandleId ? JSON.stringify(masterHandleId) : "null"},
                        interfaceId: ${interfaceId}
                    }
                );
            })()
        `;
    const result = await executeInMojoGUI(code);
    return { content: [{ type: "text", text: result }] };
  },
);
server.tool(
  "set_interceptor_mode",
  "Set the interceptor mode for a Mojo interface. The interceptor is always active - this controls whether it blocks calls (INTERCEPT) or passively logs them (LOG).",
  {
    interface: z.string().describe("The interface name"),
    mode: z
      .enum(["INTERCEPT", "LOG"])
      .describe(
        "INTERCEPT blocks calls for modification/dropping, LOG passively records without blocking",
      ),
  },
  async ({ interface: iface, mode }) => {
    const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                
                // Resolve FQN to ensure interceptor matches Mojo.bindInterface usage
                const interfaces = await api.getInterfaces();
                const targetIface = interfaces.find(i => i.name === ${JSON.stringify(iface)} || (i.module + '.' + i.name === ${JSON.stringify(iface)}));
                const nameToUse = targetIface && targetIface.module ? (targetIface.module + '.' + targetIface.name) : ${JSON.stringify(iface)};

                const success = api.startInterceptor(nameToUse, ${JSON.stringify(mode)});
                const currentMode = api.getInterceptorMode(nameToUse);
                return {
                    success,
                    interface: nameToUse,
                    resolvedFrom: ${JSON.stringify(iface)},
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
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  },
);
server.tool(
  "set_response_interception",
  "Enable or disable response interception. When enabled, responses from Mojo calls can also be intercepted and modified.",
  {
    enabled: z
      .boolean()
      .describe("true to intercept responses, false for requests only"),
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
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  },
);
server.tool(
  "bind_mock_listener",
  "Create a Mojo handle that acts as a sink for a specific listener interface. Incoming calls to this handle will be logged to the traffic log. Useful for methods that require a callback/listener handle.",
  {
    interface: z.string().describe('The listener interface name (e.g. "blink.mojom.FileSystemAccessDirectoryEntriesListener")'),
  },
  async ({ interface: iface }) => {
    const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                return await api.bindMockListener(${JSON.stringify(iface)});
            })()
        `;
    const result = await executeInMojoGUI(code);
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  },
);

server.tool(
  "get_intercepted_calls",
  "Get list of intercepted Mojo calls. Returns call details including interface, method, parameters, and status.",
  {
    status: z
      .enum([
        "Pending",
        "Done",
        "Error",
        "Logged",
        "Response Edit",
        "Forwarded",
        "Dropped",
        "Pending Response",
        "Running",
        "all",
      ])
      .optional()
      .default("all")
      .describe("Filter by status"),
    interface: z.string().optional().describe("Optional interface name filter"),
    limit: z
      .number()
      .optional()
      .default(20)
      .describe("Maximum number of calls to return"),
  },
  async ({ status = "all", interface: ifaceFilter, limit = 20 }) => {
    const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                
                let calls = api.getInterceptedCalls();
                
                if (${JSON.stringify(status)} !== 'all') {
                    calls = calls.filter(c => c.status === ${JSON.stringify(status)});
                }

                if (${JSON.stringify(ifaceFilter || null)}) {
                    const q = ${JSON.stringify(ifaceFilter || "")}.toLowerCase();
                    calls = calls.filter(c => c.interface?.toLowerCase().includes(q));
                }
                
                return calls.slice(0, ${limit});
            })()
        `;
    const result = await executeInMojoGUI(code);
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  },
);
server.tool(
  "resume_call",
  'Resume, modify, or drop an intercepted call that is pending. If the call is in "Response Edit" status, this tool will send the modified response.',
  {
    id: z.string().describe("The call ID from get_intercepted_calls"),
    params: z
      .array(z.any())
      .optional()
      .describe(
        "Modified parameters (uses original if not provided for request modification)",
      ),
    result: z
      .any()
      .optional()
      .describe(
        'Modified result (for response modification when status is "Response Edit")',
      ),
    drop: z
      .boolean()
      .optional()
      .default(false)
      .describe("If true, drop the call instead of forwarding"),
    intercept_response: z
      .boolean()
      .optional()
      .default(false)
      .describe("If true, also intercept the response"),
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
                        ${result !== undefined ? JSON.stringify(result) : "call.result"}
                    );
                }

                return api.resumeCall(
                    ${JSON.stringify(id)},
                    ${params ? JSON.stringify(params) : "null"},
                    ${drop},
                    ${intercept_response}
                );
            })()
        `;
    const mcpResult = await executeInMojoGUI(code);
    return {
      content: [{ type: "text", text: JSON.stringify(mcpResult, null, 2) }],
    };
  },
);

// New tool: Replay a captured call
server.tool(
  "replay_call",
  "Re-execute a previously captured call with optional parameter modifications. The call must exist in the activity log.",
  {
    id: z.string().describe("The call ID to replay from activity log"),
    params: z
      .record(z.any())
      .optional()
      .describe("Optional modified parameters"),
  },
  async ({ id, params }) => {
    const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                
                const result = await api.replayCall(
                    ${JSON.stringify(id)},
                    ${params ? JSON.stringify(params) : "null"}
                );
                
                return result;
            })()
        `;
    const result = await executeInMojoGUI(code);
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  },
);

// ---- Handle Management Tools ----

server.tool(
  "create_message_pipe",
  "Create a new Mojo message pipe. Returns the IDs of the two new handles.",
  {},
  async () => {
    const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                return api.createMessagePipe();
            })()
        `;
    const result = await executeInMojoGUI(code);
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  },
);

server.tool(
  "create_data_pipe",
  "Create a new Mojo data pipe. Returns the IDs of the producer and consumer handles.",
  {
    elementNumBytes: z
      .number()
      .optional()
      .default(1)
      .describe("The size of each element in bytes"),
    capacityNumBytes: z
      .number()
      .optional()
      .default(65536)
      .describe("The capacity of the pipe in bytes"),
  },
  async ({ elementNumBytes = 1, capacityNumBytes = 65536 }) => {
    const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                return api.createDataPipe({
                    elementNumBytes: ${elementNumBytes},
                    capacityNumBytes: ${capacityNumBytes}
                });
            })()
        `;
    const result = await executeInMojoGUI(code);
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  },
);

server.tool(
  "read_data_pipe",
  "Read data from a Mojo data pipe consumer handle.",
  {
    id: z.union([z.string(), z.number()]).describe("The trackable handle ID of the consumer"),
    encoding: z.enum(["utf8", "hex", "base64"]).optional().describe("Optional text encoding for the result"),
  },
  async ({ id, encoding }) => {
    const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                return api.readDataPipe(${JSON.stringify(id)}, ${encoding ? JSON.stringify(encoding) : "null"});
            })()
        `;
    const result = await executeInMojoGUI(code);
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  },
);

server.tool(
  "inspect_object",
  "Get detailed information about a registered object or handle (methods, properties, constructor).",
  {
    id: z.union([z.string(), z.number()]).describe("The ID of the object (obj_N) or handle to inspect"),
  },
  async ({ id }) => {
    const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                return api.inspectObject(${JSON.stringify(id)});
            })()
        `;
    const result = await executeInMojoGUI(code);
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  },
);

server.tool(
  "get_handle_details",
  "Get details about a specific handle by its trackable ID.",
  {
    id: z.union([z.string(), z.number()]).describe("The trackable handle ID"),
  },
  async ({ id }) => {
    const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                return api.getHandleDetails(${JSON.stringify(id)});
            })()
        `;
    const result = await executeInMojoGUI(code);
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  },
);

server.tool(
  "close_handle",
  "Close a specific Mojo handle by its ID.",
  {
    id: z.union([z.string(), z.number()]).describe("The trackable handle ID"),
  },
  async ({ id }) => {
    const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                return api.closeHandle(${JSON.stringify(id)});
            })()
        `;
    const result = await executeInMojoGUI(code);
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  },
);

server.tool(
  "list_handles",
  "List all currently trackable Mojo handle IDs.",
  {},
  async () => {
    const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                return api.listHandles();
            })()
        `;
    const result = await executeInMojoGUI(code);
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  },
);

server.tool(
  "list_objects",
  "List all currently registered high-level Mojo interface objects (obj_N).",
  {},
  async () => {
    const code = `
            (async () => {
                const api = window.MojoGUI_API;
                if (!api) throw new Error('MojoGUI API not available');
                return api.listObjects();
            })()
        `;
    const result = await executeInMojoGUI(code);
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  },
);

// New tool: Check MojoJS status
server.tool(
  "check_mojo_status",
  "Check if MojoJS is available in the browser. Returns status and helpful error messages if not enabled.",
  {},
  async () => {
    const code = `
            (async () => {
                const api = window.MojoGUI_API;
                const mojoAvailable = typeof Mojo !== 'undefined';
                const mojoJSTestAvailable = typeof MojoInterfaceInterceptor !== 'undefined';
                
                const state = api ? api.getState() : {};
                
                return {
                    mojoJS: mojoAvailable,
                    mojoJSTest: mojoJSTestAvailable,
                    fullyEnabled: mojoAvailable && mojoJSTestAvailable,
                    message: mojoAvailable 
                        ? (mojoJSTestAvailable 
                            ? 'MojoJS and MojoJSTest are both enabled. All features available.'
                            : 'MojoJS enabled but MojoJSTest not available. Interception may not work.')
                        : 'MojoJS not enabled. Start Chrome with --enable-blink-features=MojoJS,MojoJSTest',
                    ...state
                };
            })()
        `;
    const result = await executeInMojoGUI(code);
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  },
);

// New tool: Get traffic stats
server.tool(
  "get_traffic_stats",
  "Get statistics about intercepted traffic including total calls, pending, completed, and errors.",
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
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  },
);

// New tool: Get version info
server.tool(
  "get_version_info",
  "Get browser and Chromium version information. Useful for checking compatibility.",
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
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  },
);

server.tool(
  "get_console_logs",
  "Retrieve captured console logs, exceptions, and renderer crashes from the browser. Useful for debugging and detecting vulnerabilities.",
  {
    limit: z
      .number()
      .optional()
      .default(100)
      .describe("Maximum number of log entries to return"),
    clear: z
      .boolean()
      .optional()
      .default(false)
      .describe("If true, clear the log buffer after retrieval"),
  },
  async ({ limit = 100, clear = false }) => {
    const pool = await getWorkerPool({ targetUrl: MOJOGUI_URL });
    const logs = await pool.getLogs(clear);
    const slicedLogs = logs.slice(-limit);
    return {
      content: [{ type: "text", text: JSON.stringify(slicedLogs, null, 2) }],
    };
  },
);

server.tool(
  "take_browser_screenshot",
  "Capture a PNG screenshot of the entire browser window using the local capture_chrome.py script.",
  {},
  async () => {
    try {
      // Execute the local capture_chrome.py script
      await execAsync("python capture_chrome.py");

      const filename = "chrome_capture.png";
      const filepath = path.resolve(process.cwd(), filename);

      if (!fs.existsSync(filepath)) {
        throw new Error(
          "capture_chrome.py failed to create chrome_capture.png",
        );
      }

      return {
        content: [
          {
            type: "text",
            text:
              "Browser window screenshot captured successfully via capture_chrome.py and saved to: " +
              filepath,
          },
        ],
      };
    } catch (e) {
      return {
        content: [
          {
            type: "text",
            text: "Error running capture_chrome.py: " + e.message,
          },
        ],
        isError: true,
      };
    }
  },
);

server.tool(
  "run_javascript",
  'Execute arbitrary JavaScript in the MojoGUI context. DANGER: This tool is highly fragile due to complex Mojo binding environments and should ONLY be used as a LAST RESORT for complex logic that cannot be accomplished with native tools (like call_method, bind_interface, etc.). NEVER use it as a replacement for existing specific tools. Use the "async" parameter for code that might block (e.g. waiting for an intercepted Mojo call). IMPORTANT: You MUST use the "return" keyword to capture results. Data logged with console.log() will not appear in the tool output or the MojoGUI result section.',
  {
    code: z.string().describe("The JavaScript code to execute"),
    async: z
      .boolean()
      .optional()
      .default(false)
      .describe("If true, don't wait for the code to complete"),
    userGesture: z
      .boolean()
      .optional()
      .default(false)
      .describe(
        "If true, simulate a user gesture (activation) for the execution",
      ),
  },
  async ({ code, async: isAsync = false, userGesture = false }) => {
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
    const result = await executeInMojoGUI(wrappedCode, 0, { userGesture });

    // Add helpful hint for common mistake (forgotten return on IIFE)
    if (result && result.success && result.result === undefined) {
      const trimmed = code.trim();
      // Check for (async () => {})() or (() => {})() or similar patterns
      if (
        trimmed.startsWith("(") &&
        (trimmed.endsWith(")") || trimmed.endsWith(");"))
      ) {
        result._hint =
          'Result is undefined but code looks like an expression/IIFE. Did you forget to add "return"?';
      }
    }

    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  },
);

// ---- Self-Improvement Tools ----

server.tool(
  "log_capability_gap",
  "Record a failure or missing feature in the current tooling to prioritize future improvements.",
  {
    task: z.string().describe("The task that was being attempted (e.g. 'Reading Blob data')"),
    gap: z.string().describe("Description of what is missing or broken (e.g. 'MojoHandle conversion fails in ReadAll')"),
    impact: z.string().describe("How this affects research (e.g. 'Prevents confirming file content leakage')"),
  },
  async ({ task, gap, impact }) => {
    const result = SelfImprovement.logGap(task, gap, impact);
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  }
);

server.tool(
  "log_research_progress",
  "Record coverage and findings for a specific Mojo interface and method.",
  {
    interface: z.string().describe("The interface name"),
    method: z.string().describe("The method name"),
    result: z.string().describe("Summary of the outcome (e.g. 'Confirmed Bypass', 'Crashed', 'Permission Denied')"),
    notes: z.string().describe("Detailed observations or exploit details"),
  },
  async ({ interface: iface, method, result, notes }) => {
    const res = SelfImprovement.logResearch(iface, method, result, notes);
    return {
      content: [{ type: "text", text: JSON.stringify(res, null, 2) }],
    };
  }
);

server.tool(
  "get_research_progress",
  "Retrieve filtered history of Mojo interface research and identified capability gaps.",
  {
    interface: z.string().optional().describe("Filter research by interface name (regex supported)"),
    result: z.string().optional().describe("Filter research by result status (e.g. 'Bypass', 'Crashed')"),
    status: z.enum(["Open", "Closed"]).optional().describe("Filter capability gaps by status"),
    search: z.string().optional().describe("Global text search in notes, tasks, and impacts"),
    limit: z.number().optional().default(50).describe("Maximum number of entries to return per category"),
  },
  async (filters) => {
    const data = SelfImprovement.getProgress(filters);
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
    };
  }
);

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("[MojoGUI MCP] Server started");
}

main().catch((error) => {
  console.error("[MojoGUI MCP] Fatal error:", error);
  process.exit(1);
});
