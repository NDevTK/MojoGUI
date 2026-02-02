## 2025-02-01 - Div-based Interactive Lists
**Learning:** The app relies on `div` elements for interactive lists (Interfaces, Methods) which lack native keyboard accessibility.
**Action:** When touching list components, ensure `role="button"`, `tabindex="0"`, and `keydown` handlers (Enter/Space) are explicitly added to restore accessibility. Use `:focus-visible` to provide clear indicators matching the theme.
