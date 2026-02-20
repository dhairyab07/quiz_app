## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Accessible Keyboard Navigation
**Learning:** Adding keyboard shortcuts (1-4, A-D) significantly improves the "flow" of a quiz app, but requires explicit focus management and screen reader announcements to remain accessible.
**Action:** Use a combination of `keydown` listeners, `aria-live` announcements for feedback, and `.focus()` calls to ensure keyboard users are never "lost" after an action.
