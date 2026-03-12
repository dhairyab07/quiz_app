## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Quiz Keyboard Navigation
**Learning:** Adding global keyboard shortcuts (like Enter for navigation) can cause double-triggering when focus is explicitly moved to a button that already handles that key natively.
**Action:** Use `e.preventDefault()` in global key listeners and handle actions explicitly, or rely solely on focus management if standard button behavior suffices.

## 2026-03-12 - Screen Reader Feedback
**Learning:** Visual-only updates (like color changes or text updates) in a single-page app are often missed by screen reader users unless explicitly announced via an ARIA live region.
**Action:** Implement a global `announce` function linked to a `polite` live region to communicate state changes like question loading, correctness feedback, and final scores.
