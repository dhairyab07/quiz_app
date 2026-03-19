## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Quiz Keyboard Navigation
**Learning:** Adding global keyboard shortcuts (like Enter for navigation) can cause double-triggering when focus is explicitly moved to a button that already handles that key natively.
**Action:** Use `e.preventDefault()` in global key listeners and handle actions explicitly, or rely solely on focus management if standard button behavior suffices.

## 2026-03-19 - ARIA Live Regions in High-Visual SPAs
**Learning:** High-fidelity, animated single-page applications often fail to communicate state changes (like question transitions or score updates) to screen readers because they lack standard navigation cues.
**Action:** Implement a dedicated ARIA live region ("announcer") and manually trigger updates during key state transitions to ensure the "premium" feel extends to users with assistive technology.
