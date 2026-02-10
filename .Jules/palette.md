## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2026-02-10 - Enhanced Quiz Accessibility & Keyboard Shortcuts
**Learning:** Adding keyboard shortcuts (1-4, A-D) and an ARIA live region for immediate feedback significantly improves the quiz experience for both power users and screen reader users. Proper focus management (focusing the first option on a new question) ensures a seamless keyboard-only flow.
**Action:** Always include keyboard shortcuts and aria-live announcements for time-sensitive or interactive feedback components.
