## 2025-02-18 - Unescaped Metadata in HTML Generation
**Vulnerability:** XSS via unescaped 'parentInfo' (associated interface name) in renderTargetControl in js/app.js.
**Learning:** Metadata from bindings (mojom) is treated as trusted but can be manipulated. Even internal metadata should be escaped when rendering to HTML.
**Prevention:** Always use escapeHtml() or safeHTML() properly when interpolating any variable into HTML strings, even if the source is internal metadata.

## 2025-02-18 - Object Injection in Template Literals
**Vulnerability:** `escapeHtml` returned non-string inputs as-is. When used in template literals (e.g., `${escapeHtml(obj)}`), the object's `toString()` method is called *after* escaping, bypassing XSS protection.
**Learning:** Functions intended for escaping must strictly return strings. Template literals implicitly call `toString()` on expressions, which happens outside the scope of the called function if that function returns a non-string.
**Prevention:** Ensure `escapeHtml` and similar sanitizers always coerce input to string (e.g., `String(str)`) before processing.
