## 2025-02-17 - Permissive Trusted Types Policy Bypass
**Vulnerability:** The application enabled Trusted Types (`require-trusted-types-for 'script'`) but implemented policies (`mojoGUI`, `mojoBindings`) that acted as identity functions (`input => input`). This effectively disabled the protection, allowing arbitrary strings to be used as script URLs, leading to potential path traversal and XSS via `MojoLoader.loadBinding` if the input file list was compromised.
**Learning:** Simply enabling Trusted Types is not enough; the policies must validate or sanitize the input. Identity policies create a false sense of security.
**Prevention:** Always implement strict validation in Trusted Types policies. For script URLs, ensure they match expected paths (e.g., specific directory prefixes) and reject path traversal characters (`..`). Remove unused policy methods to reduce the attack surface.

## 2025-02-18 - Regex-based HTML Sanitization Vulnerability
**Vulnerability:** An attempt to harden the `mojoGUI` Trusted Types policy used regex blacklisting (`/<\s*script/i`) to filter unsafe HTML. This approach is fundamentally insecure as it can be bypassed with HTML entities, encoding tricks, or alternative injection vectors (e.g., `<iframe src=javascript:...>`).
**Learning:** Regex is insufficient for parsing HTML security contexts. Robust sanitization requires parsing the document structure to identify malicious nodes and attributes reliably.
**Prevention:** Use a proper sanitization library (like DOMPurify) or the browser's own `DOMParser` to validate HTML structure before blessing it as a Trusted Type.
