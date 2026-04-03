## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Quiz Keyboard Navigation
**Learning:** Adding global keyboard shortcuts (like Enter for navigation) can cause double-triggering when focus is explicitly moved to a button that already handles that key natively.
**Action:** Use `e.preventDefault()` in global key listeners and handle actions explicitly, or rely solely on focus management if standard button behavior suffices.

## 2025-05-15 - ARIA Announcer for Dynamic Feedback
**Learning:** For single-page applications with high visual feedback (like color changes or score updates), an `#aria-announcer` div with `aria-live="polite"` and `aria-atomic="true"` provides a central accessible notification point. A 100ms `setTimeout` when updating the announcer ensures screen readers reliably re-announce updates even if the message text is identical to the previous one.
**Action:** Use the `announce(message)` helper function to synchronize visual state changes with screen reader announcements.
