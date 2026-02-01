## 2024-10-26 - [Secure Screenshot Capture via CDP]
**Vulnerability:** Usage of `execAsync` to run external Python scripts for browser interaction introduces command injection risks and platform dependency.
**Learning:** Chrome DevTools Protocol (CDP) provides native, secure methods for browser interaction (like `Page.captureScreenshot`) that eliminate the need for external shell commands.
**Prevention:** Prefer using the existing `CDPClient` infrastructure for all browser interactions instead of spawning child processes.
