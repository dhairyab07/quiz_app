## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Quiz Keyboard Navigation
**Learning:** Adding global keyboard shortcuts (like Enter for navigation) can cause double-triggering when focus is explicitly moved to a button that already handles that key natively.
**Action:** Use `e.preventDefault()` in global key listeners and handle actions explicitly, or rely solely on focus management if standard button behavior suffices.

## 2026-03-29 - ARIA Live Regions for Dynamic Updates
**Learning:** In highly dynamic SPA-like interfaces (e.g., a quiz), screen reader users often miss state changes like new questions or correctness feedback because they are not automatically focused.
**Action:** Use a dedicated `#aria-announcer` live region and a helper `announce(message)` function that clears and resets text with a 100ms delay to ensure consecutive identical updates are voiced reliably.
