# MojoGUI MCP Server

An MCP (Model Context Protocol) server that enables agentic usage of MojoGUI for Chromium Mojo interface security research.

## Prerequisites

1. **Chrome with MojoJS enabled:**
   ```bash
   chrome --remote-debugging-port=9222 --enable-blink-features=MojoJS,MojoJSTest
   ```

2. **MojoGUI page open:**
   Navigate to https://ndevtk.github.io/MojoGUI in the Chrome instance

3. **Node.js** (v18+)

4. **Python 3** (for advanced screenshots):
   Required for `take_browser_screenshot` tool. Ensure dependencies are installed:
   ```bash
   pip install requests pygetwindow mss Pillow pywin32
   ```

## Installation

```bash
cd mcp-server
npm install
```

## Usage

### As MCP Server (for AI agents)

Add to your MCP configuration:

```json
{
  "mcpServers": {
    "mojogui-mcp-server": {
      "command": "node",
      "args": ["c:/Users/USER/Desktop/MojoGUI/mcp-server/src/index.js"]
    }
  }
}
```

### Direct Testing

```bash
npm start
```

## Available Tools

| Tool | Description |
|------|-------------|
| `list_interfaces` | Search/list available Mojo interfaces |
| `get_interface_details` | Get methods and parameters for an interface |
| `call_method` | Execute a Mojo method with parameters |
| `run_javascript` | Execute arbitrary JavaScript in the page (supports `async`) |
| `generate_code` | Generate MojoJS code for a method call |
| `set_interceptor_mode` | Set INTERCEPT (blocking) or LOG (passive) mode |
| `set_response_interception` | Enable/disable response interception |
| `get_intercepted_calls` | Get pending/logged intercepted calls (supports status filtering) |
| `resume_call` | Resume, modify, or drop an intercepted call |
| `replay_call` | Re-execute a captured call with modified params |
| `check_mojo_status` | Check if MojoJS is enabled in browser |
| `get_traffic_stats` | Get intercepted traffic statistics |
| `get_version_info` | Get browser/Chromium version info |
| `get_console_logs` | Retrieve browser console logs and crash info |
| `take_browser_screenshot` | Capture entire browser window via `capture_chrome.py` |

## Example Usage

### List interfaces containing "Battery"
```json
{
  "name": "list_interfaces",
  "arguments": { "query": "Battery", "limit": 10 }
}
```

### Get interface details
```json
{
  "name": "get_interface_details",
  "arguments": { "name": "BatteryMonitor" }
}
```

### Call a method asynchronously
This is useful when the method is expected to be intercepted, which would normally time out the tool call.
```json
{
  "name": "call_method",
  "arguments": {
    "interface": "BatteryMonitor",
    "method": "QueryNextStatus",
    "params": {},
    "userGesture": true
  }
}
```

### Run arbitrary JavaScript
```json
{
  "name": "run_javascript",
  "arguments": {
    "code": "const result = await mojo.internal.bindings.device.mojom.BatteryMonitor.getRemote().queryNextStatus(); return result;",
    "async": false,
    "userGesture": true
  }
}
```

### Set interceptor mode
```json
{
  "name": "set_interceptor_mode",
  "arguments": { "interface": "BatteryMonitor", "mode": "INTERCEPT" }
}
```

## Error Handling

### Chromium Result Codes

Renderer crashes are detected via CDP `Target.targetCrashed` events and mapped to Chromium result codes:

| Code | Name | Meaning |
|------|------|---------|
| 0 | `RESULT_CODE_NORMAL_EXIT` | Normal exit |
| 1 | `RESULT_CODE_KILLED` | Killed by user/system |
| 2 | `RESULT_CODE_HUNG` | Process hung |
| 3 | `RESULT_CODE_KILLED_BAD_MESSAGE` | Bad IPC message |
| 4 | `RESULT_CODE_GPU_DEAD_ON_ARRIVAL` | GPU init failed |

### RESULT_CODE_KILLED_BAD_MESSAGE (Code 3)

This is the most common crash when fuzzing Mojo interfaces. It occurs when:
- Invalid message format
- Wrong ordinals/method IDs
- Calling associated interfaces without proper setup
- Missing required fields

> ⚠️ **This is NOT a security vulnerability** - it means Mojo validation is working correctly.
> ⚠️ **Warning**: Only enable MojoJS for security research. Do not browse untrusted websites with this flag enabled.

The MCP server handles this gracefully:
- Returns structured error with code name and explanation
- Marks the error as recoverable
- Subsequent calls will auto-reconnect

## Architecture

```
AI Agent <--MCP--> MCP Server <--CDP--> Chrome <---> MojoGUI Page <---> Mojo IPC
```

The MCP server uses Chrome DevTools Protocol (CDP) to execute JavaScript in the MojoGUI page context, leveraging all existing MojoGUI functionality without duplicating code.

## License

MIT

