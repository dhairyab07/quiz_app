## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Quiz Keyboard Navigation
**Learning:** Adding global keyboard shortcuts (like Enter for navigation) can cause double-triggering when focus is explicitly moved to a button that already handles that key natively.
**Action:** Use `e.preventDefault()` in global key listeners and handle actions explicitly, or rely solely on focus management if standard button behavior suffices.

## 2026-03-15 - Dynamic Screen Reader Announcements
**Learning:** For single-page applications with heavy animations, using a dedicated ARIA live region with a slight update delay (e.g., 100ms) ensures that screen readers reliably catch and announce state changes (like new questions or score updates) that might otherwise be missed during DOM transitions.
**Action:** Implement a global `announce()` utility that clears and then sets the content of an `#aria-announcer` div to guarantee re-announcement of similar messages.
