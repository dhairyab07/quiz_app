## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Quiz Keyboard Navigation
**Learning:** Adding global keyboard shortcuts (like Enter for navigation) can cause double-triggering when focus is explicitly moved to a button that already handles that key natively.
**Action:** Use `e.preventDefault()` in global key listeners and handle actions explicitly, or rely solely on focus management if standard button behavior suffices.

## 2025-05-16 - Screen Reader Feedback for Dynamic UI
**Learning:** Vanilla JS apps often leave screen reader users in the dark when UI state changes (like quiz feedback). A hidden `aria-live` announcer provides a smooth, non-visual narration of the app state.
**Action:** Implement an `announce()` helper that manages a hidden `polite` live region for all critical state changes and feedback.
