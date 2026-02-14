## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-22 - Enhanced Interaction Feedback
**Learning:** Screen reader users need immediate confirmation for dynamic selection states (like grid buttons) and quiz results. Standard click listeners often miss updating ARIA states, and without an aria-live announcer, quiz feedback is invisible to assistive tech.
**Action:** Use aria-pressed for toggle-like selection buttons and implement a global #aria-announcer to communicate transient state changes like "Correct/Incorrect" results.
