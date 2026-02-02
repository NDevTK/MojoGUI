## 2024-05-23 - [XSS] Unescaped Metadata Injection in UI
**Vulnerability:** Found a Cross-Site Scripting (XSS) vulnerability in `js/app.js` within the `renderTargetControl` function. The `parentInfo` variable, derived from interface metadata (associated usage strings), was injected directly into the HTML template without escaping.
**Learning:** Even "trusted" internal data (like metadata from `bindings/index.json`) should be treated as untrusted when rendering to the DOM. The `safeHTML` utility in this codebase is a bypass wrapper for Trusted Types and does not sanitize input, making manual escaping with `escapeHtml` critical.
**Prevention:** Always wrap variable interpolations in HTML templates with `escapeHtml()` or use a robust sanitizer like DOMPurify before marking HTML as safe.
