## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Quiz Keyboard Navigation
**Learning:** Adding global keyboard shortcuts (like Enter for navigation) can cause double-triggering when focus is explicitly moved to a button that already handles that key natively.
**Action:** Use `e.preventDefault()` in global key listeners and handle actions explicitly, or rely solely on focus management if standard button behavior suffices.

## 2025-05-16 - ARIA Live Regions for Quiz Feedback
**Learning:** In highly visual, single-page quiz applications, screen reader users often miss immediate feedback (like "Correct/Incorrect") or progress updates because focus doesn't move. A hidden ARIA live region provides a seamless way to narrate these state changes without disrupting the visual flow.
**Action:** Implement a dedicated `#aria-announcer` live region and a helper function to centralize all non-visual UI feedback.
