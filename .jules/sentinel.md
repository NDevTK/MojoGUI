## 2025-02-18 - Unescaped Metadata in HTML Generation
**Vulnerability:** XSS via unescaped 'parentInfo' (associated interface name) in renderTargetControl in js/app.js.
**Learning:** Metadata from bindings (mojom) is treated as trusted but can be manipulated. Even internal metadata should be escaped when rendering to HTML.
**Prevention:** Always use escapeHtml() or safeHTML() properly when interpolating any variable into HTML strings, even if the source is internal metadata.

## 2026-02-04 - Unrestricted Window Capture in Helper Script
**Vulnerability:** The `capture_chrome.py` script captured all visible windows of the Chrome process listening on the debugging port, potentially exposing sensitive information from other open tabs (e.g., banking, email) sharing the same process.
**Learning:** Tooling scripts that interact with the OS window manager must explicitly filter targets, as process-level grouping in browsers (like Chrome) often includes multiple distinct contexts (windows/tabs) in the same process tree.
**Prevention:** Always validate window titles or other identifiers against expected values (e.g., "MojoJS") before capturing or interacting with them.
