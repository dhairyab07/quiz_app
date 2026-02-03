## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Focus Management and Keyboard Shortcuts
**Learning:** Combining custom keyboard listeners with focused interactive elements can cause "double-trigger" bugs. Using `e.preventDefault()` in the listener stops native browser behavior (like Enter clicking a focused button).
**Action:** Always use `e.preventDefault()` for custom shortcuts and manage focus explicitly after state changes to guide keyboard users.
