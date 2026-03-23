## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Quiz Keyboard Navigation
**Learning:** Adding global keyboard shortcuts (like Enter for navigation) can cause double-triggering when focus is explicitly moved to a button that already handles that key natively.
**Action:** Use `e.preventDefault()` in global key listeners and handle actions explicitly, or rely solely on focus management if standard button behavior suffices.

## 2025-05-16 - ARIA Live Region for Quiz Feedback
**Learning:** In highly visual single-page applications, updating an off-screen ARIA live region (using a 100ms delay to ensure DOM update detection) is a reliable way to provide screen reader feedback for state changes like new questions and correctness alerts.
**Action:** Implement an '#aria-announcer' element and a corresponding 'announce(message)' utility function to handle all dynamic accessibility updates.
