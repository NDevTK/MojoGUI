## 2025-02-18 - Unescaped Metadata in HTML Generation
**Vulnerability:** XSS via unescaped 'parentInfo' (associated interface name) in renderTargetControl in js/app.js.
**Learning:** Metadata from bindings (mojom) is treated as trusted but can be manipulated. Even internal metadata should be escaped when rendering to HTML.
**Prevention:** Always use escapeHtml() or safeHTML() properly when interpolating any variable into HTML strings, even if the source is internal metadata.

## 2025-02-19 - Unbounded Resource Consumption in Local Storage
**Vulnerability:** Unbounded string inputs and unlimited log entries in `SelfImprovement` module led to `PROGRESS.json` growing indefinitely (DoS via disk/memory exhaustion).
**Learning:** Local file-based storage must enforce strict size limits and rotation policies, even for "trusted" agent inputs, to prevent resource exhaustion from accidental or malicious large payloads.
**Prevention:** Implement input truncation (length limits) and Log Rotation (FIFO) for all file-backed persistent storage.
