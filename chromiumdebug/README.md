# Chromium Security Research WinDbg Toolkit

An experimental WinDbg debugging toolkit for Chromium security researchers  
Inspired by [spoof.js](https://github.com/shhnjk/spoof.js)

> [!WARNING]
> Avoid untrusted websites and networks while using this script!  
> Enables MojoJS and Chrome DevTools Protocol both make the browser less secure but help with security research.

## Quick Start
- Install [Chrome Canary](https://www.google.com/chrome/canary/)
- Install [WinDbg from MS Store](https://apps.microsoft.com/detail/9pgjgd53tn86)
- Download repository and run `debug_chrome.bat`
- When it says BUSY you need to click Break to use the command line

Then in WinDbg: `!chelp`

## Commands

### Process Info
| Command | Description |
|---------|-------------|
| `!chelp` | Show all commands |
| `!procs` | List all Chrome processes with types & sites |
| `!proc` | Show current process type (+ site if renderer) |
| `!cmdline` | Show command line switches |
| `!frames` | List all frames (Local/Remote) with URLs, IDs, and addresses |

### Sandbox & Security
| Command | Description |
|---------|-------------|
| `!sandbox_state` | Check sandbox status of current process |
| `!sandbox_all` | Dashboard of all process sandbox states |
| `!sandbox_token` | Dump token info and integrity level |

### Security Breakpoints
| Command | Description |
|---------|-------------|
| `!bp_bad` | **Break on security violations (mojo::ReportBadMessage)** |
| `!bp_security` | Break on ChildProcessSecurityPolicy checks |
| `!bp_renderer` | Break when renderers are launched |
| `!bp_sandbox` | Break when sandbox lowers token |
| `!bp_mojo` | Break on Mojo interface binding |
| `!bp_ipc` | Break on IPC message dispatch |
| `!trace_ipc` | Enable IPC message logging |
| `!mojo_interfaces` | **List mojo interfaces exposed to current renderer** |

### Site Isolation Analysis
| Command | Description |
|---------|-------------|
| `!site_iso` | Check Site Isolation status (flags & runtime checks) |

### Blink DOM Hooks
| Command | Description |
|---------|-------------|
| `!bp_element` | Break on DOM element creation |
| `!bp_nav` | Break on navigation/location changes |
| `!bp_pm` | Break on postMessage (cross-origin comms) |
| `!bp_fetch` | Break on fetch/XHR requests |

### Per-Frame Inspection
| Command | Description |
|---------|-------------|
| `!frame_doc(idx)` | Get Document object for frame at index |
| `!frame_win(idx)` | Get LocalDOMWindow for frame at index |
| `!frame_origin(idx)` | Get SecurityOrigin for frame at index |
| `!frame_elem(idx,"tag")` | List elements by tag name in frame |
| `!frame_getattr(el,"attr")` | Get attribute value (decodes `WTF::String`, `KURL`) |
| `!frame_setattr(el,"attr","val")` | Set attribute value ⚠️ **Memory mutation warning** |
| `!frame_attrs(el)` | List attributes with direct string preview |

### V8 Exploitation Hooks
| Command | Description |
|---------|-------------|
| `!bp_compile` | Break on script compilation |
| `!bp_gc` | Break on garbage collection |
| `!bp_wasm` | Break on WebAssembly compilation |
| `!bp_jit` | Break on JIT code generation |

### V8 Pointer Compression
| Command | Description |
|---------|-------------|
| `!v8_cage` | Show V8 cage base address |
| `!decompress(ptr)` | Decompress a 32-bit V8 compressed pointer |
| `!decompress_gc(ptr)` | Decompress Oilpan/cppgc pointer |

### Vulnerability Hunting
| Command | Description |
|---------|-------------|
| `!vuln_hunt` | **Set UAF, type confusion, race condition breakpoints** |
| `!heap_info` | PartitionAlloc/V8 heap inspection guide |

### Origin Spoofing & Function Patching
| Command | Description |
|---------|-------------|
| `!spoof("url")` | Spoof origin (default). `!spoof("https://site.com")` |
| `!spoof("s1","s2")` | Replace strings. `!spoof("old","new")` |
| `!spoof("s1","")` | Delete string. `!spoof("token","")` |
| `!spoof(...,"host")` | Partial spoof. `!spoof("x.com","host")` |
| `!patch("Func","val")` | Patch function return value (supports strings) |

### Cross-Process Execution
| Command | Description |
|---------|-------------|
| `!run_renderer("cmd")` | Run command in all renderer processes |
| `!run_browser("cmd")` | Run command in browser process |
| `!run_gpu("cmd")` | Run command in GPU process |
| `!script_renderer("path")` | Load script in all renderers |
| `!on_attach("cmd")` | Auto-run command when renderers attach |

### C++ Execution / REPL (Very very experimental)
| Command | Description |
|---------|-------------|
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

## Files

```
chromiumdebug/
├── debug_chrome.bat          # Launcher (auto-cleans old sessions)
├── chromium_security.js      # Main WinDbg script
└── init.txt                  # WinDbg init commands
```
