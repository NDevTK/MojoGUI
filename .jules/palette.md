## 2025-02-01 - Div-based Interactive Lists
**Learning:** The app relies on `div` elements for interactive lists (Interfaces, Methods) which lack native keyboard accessibility.
**Action:** When touching list components, ensure `role="button"`, `tabindex="0"`, and `keydown` handlers (Enter/Space) are explicitly added to restore accessibility. Use `:focus-visible` to provide clear indicators matching the theme.

## 2025-05-23 - Global Keyboard Shortcuts
**Learning:** Adding global shortcuts (like `/` for search) dramatically improves developer efficiency but must be implemented carefully to avoid hijacking normal typing.
**Action:** Always wrap global `keydown` handlers with a check for `document.activeElement.tagName` to ensure the user is not typing in an `INPUT`, `TEXTAREA`, or `SELECT` field before triggering the shortcut.

## 2025-10-27 - Visual Feedback for Async Actions
**Learning:** Users need immediate feedback for actions like "Execute" to know the system is working, especially for Mojo calls that might take time.
**Action:** Implement loading states (spinner + disabled state) for all async action buttons, ensuring the button returns to its original state even if the action fails.

## 2024-05-22 - [Sidebar Tabs Navigation]
**Learning:** Sidebar tabs were implemented as buttons but lacked proper ARIA `tabindex` management and keyboard navigation (Arrow keys), making them cumbersome for keyboard users who expect standard tab widget behavior.
**Action:** When implementing tab interfaces, always use the "Roving Tabindex" pattern: set `tabindex="0"` on the active tab and `-1` on others, and handle Arrow keys to move focus and activate tabs.

## 2025-05-24 - [Pseudo-Button Pattern]
**Learning:** Collapsible headers were implemented using `<label>` elements without form inputs, relying on click events. This breaks accessibility as labels are not natively focusable or announced as interactive.
**Action:** When using non-standard elements as buttons (like `<label>` for toggles), explicitly add `role="button"`, `tabindex="0"`, `aria-expanded`, and keyboard handlers (Enter/Space) to emulate native button behavior.

## 2025-05-25 - [Focus and Visibility Transitions]
**Learning:** Using `display: none` for toggling interactive elements prevents smooth transitions and can disrupt keyboard focus management if not handled carefully.
**Action:** Use `opacity` and `visibility` (with `pointer-events`) to animate appearance/disappearance. This preserves the element's layout presence during transition and allows for nicer focus handling.
