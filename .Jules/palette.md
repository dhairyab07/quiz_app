## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Quiz Keyboard Navigation & ARIA Announcements
**Learning:** For interactive quizzes, screen reader users need immediate feedback on correctness and question changes. Keyboard shortcuts (1-4, A-D) significantly improve the "speed to result" for sighted users but must be paired with careful focus management to ensure the 'Next' action is immediately accessible.
**Action:** Use a hidden ARIA live region with a slight update delay (100ms) to ensure announcements are picked up reliably by screen readers after DOM updates.
