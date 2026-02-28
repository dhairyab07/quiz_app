## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2026-02-28 - Keyboard Navigation & Screen Reader Feedback
**Learning:** Single-page quiz applications often fail to communicate state changes (like correctness feedback) to screen readers. Using a hidden ARIA live region (aria-live="polite") allows for non-disruptive but clear status updates.
**Action:** Always implement a hidden announcer for dynamic feedback and ensure focus management accompanies view transitions to aid keyboard users.
