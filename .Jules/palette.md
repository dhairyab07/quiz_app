## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Quiz Keyboard Navigation
**Learning:** Adding global keyboard shortcuts (like Enter for navigation) can cause double-triggering when focus is explicitly moved to a button that already handles that key natively.
**Action:** Use `e.preventDefault()` in global key listeners and handle actions explicitly, or rely solely on focus management if standard button behavior suffices.

## 2026-03-27 - Dynamic Quiz Feedback via ARIA Live Regions
**Learning:** In highly visual SPAs, dynamic state changes (like quiz correctness) are often invisible to screen readers unless explicitly announced. A central aria-live="polite" region combined with a staggered update (using a 100ms timeout) ensures that assistive technology reliably picks up and repeats even identical sequential messages.
**Action:** Always implement a central 'announcer' utility for critical UI state transitions to maintain parity between visual and auditory feedback.
