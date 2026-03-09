## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Quiz Keyboard Navigation
**Learning:** Adding global keyboard shortcuts (like Enter for navigation) can cause double-triggering when focus is explicitly moved to a button that already handles that key natively.
**Action:** Use `e.preventDefault()` in global key listeners and handle actions explicitly, or rely solely on focus management if standard button behavior suffices.

## 2025-05-16 - Screen Reader Narrative & Discoverability
**Learning:** For interactive apps like quizzes, visual transitions are not enough for accessibility; an ARIA live region is necessary to narrate state changes (new questions, correctness feedback) to screen reader users. Additionally, "hidden" keyboard shortcuts become "delightful" features when discovered, but providing subtle visual hints (like '1-4' indicators) bridges the gap between power users and novices.
**Action:** Always include an `#aria-announcer` for dynamic feedback and provide visual cues for keyboard-driven interactions.
