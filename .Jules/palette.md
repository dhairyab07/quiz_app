## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2026-02-15 - Enhancing Delight with Keyboard Shortcuts
**Learning:** Adding keyboard shortcuts (A-D, 1-4, Enter) significantly improves the perceived quality and speed of a quiz application. Providing visual hints for these shortcuts ensures they are discoverable and reduces cognitive load for power users.
**Action:** Always pair custom keyboard listeners with visual hints (e.g., [1], [2]) and use aria-live regions to announce feedback that would otherwise be purely visual.
