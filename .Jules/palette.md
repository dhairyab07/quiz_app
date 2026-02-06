## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-02-06 - Keyboard Navigation & Focus Management
**Learning:** In animated SPAs, focus management must be synchronized with transitions (e.g., using setTimeouts) to prevent focus loss and ensure screen readers announce new content. Keyboard shortcuts for high-interaction apps (like quizzes) significantly improve the "premium" feel.
**Action:** Use 350ms delay for focusing elements after fade-in animations; implement Enter/Escape and A-D shortcuts for common interactions.
