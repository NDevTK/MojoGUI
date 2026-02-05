## 2025-02-01 - Div-based Interactive Lists
**Learning:** The app relies on `div` elements for interactive lists (Interfaces, Methods) which lack native keyboard accessibility.
**Action:** When touching list components, ensure `role="button"`, `tabindex="0"`, and `keydown` handlers (Enter/Space) are explicitly added to restore accessibility. Use `:focus-visible` to provide clear indicators matching the theme.

## 2025-05-23 - Global Keyboard Shortcuts
**Learning:** Adding global shortcuts (like `/` for search) dramatically improves developer efficiency but must be implemented carefully to avoid hijacking normal typing.
**Action:** Always wrap global `keydown` handlers with a check for `document.activeElement.tagName` to ensure the user is not typing in an `INPUT`, `TEXTAREA`, or `SELECT` field before triggering the shortcut.

## 2025-10-27 - Visual Feedback for Async Actions
**Learning:** Users need immediate feedback for actions like "Execute" to know the system is working, especially for Mojo calls that might take time.
**Action:** Implement loading states (spinner + disabled state) for all async action buttons, ensuring the button returns to its original state even if the action fails.
