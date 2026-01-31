## 2024-05-22 - [Batched DOM Updates for High-Frequency Logs]
**Learning:** Appending or prepending individual rows to a table during high-frequency events (like network logging) causes excessive reflows and layout thrashing.
**Action:** Use a `DocumentFragment` combined with `requestAnimationFrame` to batch updates. Store references to created elements in a `Map` to allow O(1) updates (e.g., status changes) even before the element is attached to the DOM, decoupling data updates from rendering.
