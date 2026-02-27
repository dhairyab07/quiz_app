## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Enhancing Quiz Interactivity and Accessibility
**Learning:** For interactive quizzes, screen reader users need immediate feedback on correctness and clear announcements of new questions. Combining an aria-live announcer with proactive focus management (focusing the first option of a new question and the 'Next' button after answering) creates a seamless flow that works for both keyboard and screen reader users.
**Action:** Always pair dynamic UI updates with aria-live announcements and manage focus transitions to guide users through multi-step interactive processes.
