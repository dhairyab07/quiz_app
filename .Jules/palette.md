## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Keyboard Navigation & Focus Management
**Learning:** In a fast-paced quiz app, keyboard shortcuts (A-D, 1-4) and automated focus management significantly reduce cognitive load and interaction friction. Using `setTimeout` (350ms for questions, 100ms for buttons) ensures focus transitions don't conflict with CSS animations.
**Action:** Always pair dynamic UI transitions with explicit focus management and provide keyboard alternatives for all primary actions.
