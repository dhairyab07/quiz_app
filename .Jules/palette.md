## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Quiz Keyboard Navigation
**Learning:** Adding global keyboard shortcuts (like Enter for navigation) can cause double-triggering when focus is explicitly moved to a button that already handles that key natively.
**Action:** Use `e.preventDefault()` in global key listeners and handle actions explicitly, or rely solely on focus management if standard button behavior suffices.

## 2025-05-16 - ARIA Announcer for Dynamic Feedback
**Learning:** In highly visual single-page applications, manual synchronization of ARIA live regions is essential to communicate state changes (like correctness feedback or progress) that are otherwise only visible through color or animations.
**Action:** Implement a central `announce()` helper function linked to a hidden `aria-live="polite"` region to provide consistent, non-intrusive updates to screen reader users.
