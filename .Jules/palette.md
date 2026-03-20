## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Quiz Keyboard Navigation
**Learning:** Adding global keyboard shortcuts (like Enter for navigation) can cause double-triggering when focus is explicitly moved to a button that already handles that key natively.
**Action:** Use `e.preventDefault()` in global key listeners and handle actions explicitly, or rely solely on focus management if standard button behavior suffices.

## 2026-03-20 - Accessible State Management in SPAs
**Learning:** In a vanilla JS single-page application, visual state changes (like 'active' or 'selected' classes) must be manually synchronized with ARIA attributes like `aria-pressed` to ensure they are perceivable by screen reader users.
**Action:** Always update `aria-pressed` or `aria-selected` alongside class toggles in selection handlers, and ensure the `event` object is passed to access the target element reliably.
