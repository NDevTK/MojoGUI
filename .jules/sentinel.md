## 2025-02-18 - Unescaped Metadata in HTML Generation
**Vulnerability:** XSS via unescaped 'parentInfo' (associated interface name) in renderTargetControl in js/app.js.
**Learning:** Metadata from bindings (mojom) is treated as trusted but can be manipulated. Even internal metadata should be escaped when rendering to HTML.
**Prevention:** Always use escapeHtml() or safeHTML() properly when interpolating any variable into HTML strings, even if the source is internal metadata.

## 2025-02-24 - XSS via Unescaped IDs in Traffic Log
**Vulnerability:** Stored XSS in Traffic Log via unescaped `id` in `MojoGUI_API.addActivity` and `TrafficUIService`.
**Learning:** Internal IDs are often assumed to be safe (integers or alphanumeric), but exposing an API that allows setting arbitrary IDs creates an XSS vector if those IDs are rendered unescaped.
**Prevention:** Always escape variables interpolated into HTML, even if they seem like internal identifiers. Use `escapeHtml()` for all template literals.

## 2025-05-23 - XSS in PoC Generator
**Vulnerability:** XSS and Code Injection in `PoCGenerator.js` via unescaped interface/method names in generated HTML and JS.
**Learning:** Generated code artifacts (like downloadables) are often overlooked for XSS. User-controlled or metadata-derived strings interpolated into generated files must be escaped for the target context (HTML or JS).
**Prevention:** Sanitize inputs before interpolating into generated file templates. Use HTML escaping for HTML contexts and identifier sanitization for JS variable names.
