# Chromium Security Research Debugger Toolkit

An experimental debugging toolkit for Chromium security researchers
Inspired by [spoof.js](https://github.com/shhnjk/spoof.js)

> [!WARNING]
> Avoid untrusted websites and networks while using this script!
> Enables MojoJS and Chrome DevTools Protocol both make the browser less secure but help with security research.

## Quick Start

### Windows (WinDbg)

- Install [Chrome Canary](https://www.google.com/chrome/canary/)
- Install [WinDbg from MS Store](https://apps.microsoft.com/detail/9pgjgd53tn86)
- Download repository and run `debug_chrome.bat`
- When it says BUSY you need to click Break to use the command line

Then in WinDbg: `!chelp`

### Linux / macOS

- Install Chrome/Chromium (Canary recommended)
- Run `./debug_chrome.sh`
- Choose launch mode: standalone, GDB, or LLDB

```bash
# Custom Chrome path
CHROME_PATH=/opt/chromium/chrome ./debug_chrome.sh
```

## Commands

### Process Info

| Command    | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| `!chelp`   | Show all commands                                            |
| `!procs`   | List all Chrome processes with types & sites                 |
| `!proc`    | Show current process type (+ site if renderer)               |
| `!cmdline` | Show command line switches                                   |
| `!frames`  | List all frames (Local/Remote) with URLs, IDs, and addresses |

### Sandbox & Security

| Command          | Description                             |
| ---------------- | --------------------------------------- |
| `!sandbox_state` | Check sandbox status of current process |
| `!sandbox_all`   | Dashboard of all process sandbox states |
| `!sandbox_token` | Dump token info and integrity level     |

### Security Breakpoints

| Command            | Description                                               |
| ------------------ | --------------------------------------------------------- |
| `!bp_bad`          | **Break on security violations (mojo::ReportBadMessage)** |
| `!bp_security`     | Break on ChildProcessSecurityPolicy checks                |
| `!bp_renderer`     | Break when renderers are launched                         |
| `!bp_sandbox`      | Break when sandbox lowers token                           |
| `!bp_mojo`         | Break on Mojo interface binding                           |
| `!bp_ipc`          | Break on IPC message dispatch                             |
| `!trace_ipc`       | Enable IPC message logging                                |
| `!mojo_interfaces` | **List mojo interfaces exposed to current renderer**      |

### Mojo Security Research

| Command             | Description                                             |
| ------------------- | ------------------------------------------------------- |
| `!bp_mojo_validate` | **Break on Mojo message validation errors**             |
| `!bp_permissions`   | Break on permission & feature flag checks               |
| `!bp_nav_commit`    | Break on navigation commit security checks              |
| `!mojo_trace`       | **Live Mojo IPC tracing (bind/send/recv)**              |
| `!renderer_sec`     | **Full renderer security dashboard**                    |

### Mojo Handle Hijacking & Mapping

| Command                         | Description                                                     |
| ------------------------------- | --------------------------------------------------------------- |
| `!list_js_handles`              | Scan heap for live `blink::MojoHandle` objects in JS            |
| `!map_interfaces`               | **Map all active Mojo interfaces to their Interface IDs**       |
| `!hijack_interface(addr, name)` | **Hijack a JS handle with any live master handle/interface ID** |

### MojoGUI Debug Bridge (Shared Memory)

| Command                                    | Description                                               |
| ------------------------------------------ | --------------------------------------------------------- |
| `!bridge`                                  | **Full setup: connect, sync IDs, validation BPs, crash handler** |
| `!bridge_status`                           | Show connection status, header values, and pending messages |
| `!bridge_sync`                             | **Re-scan interfaces & push IDs + master handles**         |
| `!bridge_analyze "iface" "method"`         | **PDB analysis: constants, strings, callees, security checks** |
| `!bridge_read`                             | Read pending message from JS                               |
| `!bridge_send "json"`                      | Send raw JSON message to JS                                |
| `!bridge_push_validation_smart`            | Push validation error with stack-based attribution         |
| `!bridge_help`                             | Show bridge help                                           |

### Site Isolation Analysis

| Command     | Description                                          |
| ----------- | ---------------------------------------------------- |
| `!site_iso` | Check Site Isolation status (flags & runtime checks) |

### Blink DOM Hooks

| Command       | Description                               |
| ------------- | ----------------------------------------- |
| `!bp_element` | Break on DOM element creation             |
| `!bp_nav`     | Break on navigation/location changes      |
| `!bp_pm`      | Break on postMessage (cross-origin comms) |
| `!bp_fetch`   | Break on fetch/XHR requests               |

### Per-Frame Inspection

| Command                           | Description                                         |
| --------------------------------- | --------------------------------------------------- |
| `!frame_doc(idx)`                 | Get Document object for frame at index              |
| `!frame_win(idx)`                 | Get LocalDOMWindow for frame at index               |
| `!frame_origin(idx)`              | Get SecurityOrigin for frame at index               |
| `!frame_elem(idx,"tag")`          | List elements by tag name in frame                  |
| `!frame_getattr(el,"attr")`       | Get attribute value (decodes `WTF::String`, `KURL`) |
| `!frame_setattr(el,"attr","val")` | Set attribute value                                 |
| `!frame_attrs(el)`                | List attributes with direct string preview          |

### V8 Exploitation Hooks

| Command       | Description                      |
| ------------- | -------------------------------- |
| `!bp_compile` | Break on script compilation      |
| `!bp_gc`      | Break on garbage collection      |
| `!bp_wasm`    | Break on WebAssembly compilation |
| `!bp_jit`     | Break on JIT code generation     |

### V8 Pointer Compression

| Command               | Description                               |
| --------------------- | ----------------------------------------- |
| `!v8_cage`            | Show V8 cage base address                 |
| `!decompress(ptr)`    | Decompress a 32-bit V8 compressed pointer |
| `!decompress_gc(ptr)` | Decompress Oilpan/cppgc pointer           |

### Vulnerability Hunting

| Command      | Description                                                |
| ------------ | ---------------------------------------------------------- |
| `!vuln_hunt` | **UAF, type confusion, race, Mojo lifetime breakpoints**   |
| `!heap_info` | PartitionAlloc/V8 heap inspection guide                    |

### Origin Spoofing & Function Patching

| Command                | Description                                          |
| ---------------------- | ---------------------------------------------------- |
| `!spoof("url")`        | Spoof origin (default). `!spoof("https://site.com")` |
| `!spoof("s1","s2")`    | Replace strings. `!spoof("old","new")`               |
| `!spoof("s1","")`      | Delete string. `!spoof("token","")`                  |
| `!spoof(...,"host")`   | Partial spoof. `!spoof("x.com","host")`              |
| `!patch("Func","val")` | Patch function return value (supports strings)       |

### Cross-Process Execution

| Command                    | Description                            |
| -------------------------- | -------------------------------------- |
| `!run_renderer("cmd")`     | Run command in all renderer processes  |
| `!run_browser("cmd")`      | Run command in browser process         |
| `!run_gpu("cmd")`          | Run command in GPU process             |
| `!script_renderer("path")` | Load script in all renderers           |
| `!on_attach("cmd")`        | Auto-run command when renderers attach |

### C++ Execution / REPL (Very very experimental)

| Command         | Description                                          |
| --------------- | ---------------------------------------------------- |
| `!exec("expr")` | Execute C++ function chains with shellcode injection |

#### Features

- **Method Chaining**: Chain calls with `->` syntax
- **Automatic String Decoding**: Decodes `WTF::String`, `AtomicString`, `KURL`
- **Type Detection**: PDB-based (inlined functions) + vtable-based (polymorphic types)
- **Return Types**: Handles integers, floats/doubles, booleans, compressed pointers

#### Examples

```text
!exec "blink::LocalFrame::DomWindow()->document()"
!exec "blink::Document::Url()->Host()"
!exec "blink::Document::Url()->ProtocolIs(\"https\")"
```

## Security Research Workflow

A typical Mojo IPC security research session:

```text
1. !procs                     # Find renderer processes
2. |2s                        # Switch to target renderer
3. !renderer_sec              # Security dashboard overview
4. !mojo_interfaces           # What's exposed?
5. !bp_mojo_validate          # Catch validation failures
6. !mojo_trace                # Watch message flow
7. g                          # Continue execution
   (trigger MojoGUI fuzzer)
8. !vuln_hunt                 # Set vuln detection breakpoints
9. !map_interfaces            # Get interface IDs for hijacking
```

### With Debug Bridge (automated)

```text
1. !procs                     # Find renderer processes
2. |2s                        # Switch to renderer running MojoGUI
3. !bridge                    # One command does everything:
                              #   - Finds shared memory buffer
                              #   - Syncs interface IDs + master handles
                              #   - Sets validation BPs (auto-push errors to fuzzer)
                              #   - Crash capture on renderer exit
                              #   - Processes pending JS requests
4. g                          # Continue — start fuzzing in MojoGUI
                              # Everything is now automatic!
```

The bridge uses a shared `ArrayBuffer` in renderer memory. JS writes a sentinel
(`MGUI_BRIDGE_V01`) that WinDbg scans for, then both sides exchange JSON messages
through the same physical memory region — no CDP, no copy-paste.

**What happens automatically with the bridge:**

- **Smart validation attribution**: When `ReportBadMessage` or `ValidationError` fires, WinDbg walks the C++ call stack to identify the exact interface and method that triggered the error (not just "unknown")
- **PDB code analysis**: The fuzzer auto-requests analysis of each method's C++ implementation. WinDbg extracts comparison constants, string literals, callee graphs, null check counts, switch table sizes, and security-relevant callees from the binary
- **Code-aware fuzzing**: The fuzzer uses all this WinDbg data to generate highly targeted inputs — probing comparison boundaries, using string literals from the binary, adapting to security checks (origin validation, permission checks, WebUI restrictions)
- **Fuzz target tracking**: When the fuzzer targets a method, WinDbg sets focused breakpoints on its C++ implementation to confirm the IPC message reached the handler
- **Crash recovery**: Crash context (exception code, stack, registers, Mojo frame) is captured and pushed to the next renderer's bridge automatically

## Files

```
chromiumdebug/
├── debug_chrome.bat          # Windows launcher (WinDbg + Chrome)
├── debug_chrome.sh           # Linux/macOS launcher (GDB/LLDB + Chrome)
├── chromium_security.js      # Main WinDbg script (11k+ lines)
├── SECURITY.md               # Security policy
└── init.txt                  # WinDbg init commands (auto-generated)
```
