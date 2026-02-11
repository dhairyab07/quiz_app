## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2026-02-11 - Enhanced Quiz Accessibility & Keyboard Navigation
**Learning:** Transitioning between quiz questions requires deliberate focus management (e.g., using setTimeout) and ARIA live announcements to ensure screen reader users and keyboard-only users maintain context during the fast-paced interaction.
**Action:** Use a 350ms delay for focusing new content after transitions and implement a dedicated aria-announcer for state changes (Correct/Wrong feedback).
