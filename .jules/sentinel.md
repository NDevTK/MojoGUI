## 2025-02-18 - Unescaped Metadata in HTML Generation
**Vulnerability:** XSS via unescaped 'parentInfo' (associated interface name) in renderTargetControl in js/app.js.
**Learning:** Metadata from bindings (mojom) is treated as trusted but can be manipulated. Even internal metadata should be escaped when rendering to HTML.
**Prevention:** Always use escapeHtml() or safeHTML() properly when interpolating any variable into HTML strings, even if the source is internal metadata.
