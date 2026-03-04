## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-14 - Quiz Interactivity & Feedback
**Learning:** Screen readers need explicit announcements for dynamic state changes like answer correctness and result transitions, even in visual-heavy apps. Global keyboard shortcuts (1-4, A-D) combined with visual hints and proactive focus management significantly reduce cognitive load for all users.
**Action:** Use a hidden aria-live region for status updates and manage focus explicitly during multi-step processes (like quizzes) to guide the user through the interaction loop.
