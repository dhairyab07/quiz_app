## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Quiz Keyboard Navigation
**Learning:** Adding global keyboard shortcuts (like Enter for navigation) can cause double-triggering when focus is explicitly moved to a button that already handles that key natively.
**Action:** Use `e.preventDefault()` in global key listeners and handle actions explicitly, or rely solely on focus management if standard button behavior suffices.

## 2025-05-22 - ARIA Announcer and Focus Sequencing
**Learning:** When using an ARIA live region to announce feedback (e.g., "Correct!" or "Incorrect"), immediately moving focus to a new element (like a "Next" button) can cause screen readers to interrupt and skip the announcement.
**Action:** Use a short `setTimeout` (approx. 100ms) before shifting focus to allow the screen reader to prioritize the live region announcement before announcing the new focused element.
