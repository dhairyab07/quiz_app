## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Enhancing Interactive State Communication
**Learning:** Visual selection states (like gold borders or highlights) are not automatically communicated to screen readers. Elements like the occupation grid and question count buttons require explicit state management via ARIA.
**Action:** Use `aria-pressed` for button-based selections and `role="progressbar"` with `aria-valuenow` for visual progress indicators to ensure dynamic UI changes are perceivable.
