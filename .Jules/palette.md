## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Quiz Keyboard Navigation
**Learning:** Adding global keyboard shortcuts (like Enter for navigation) can cause double-triggering when focus is explicitly moved to a button that already handles that key natively.
**Action:** Use `e.preventDefault()` in global key listeners and handle actions explicitly, or rely solely on focus management if standard button behavior suffices.

## 2025-05-16 - Accessible Dynamic Feedback
**Learning:** In highly visual, animated single-page applications, users of assistive technology lose context of state changes (like quiz feedback or progress). A central ARIA live region combined with manual attribute synchronization (like `aria-pressed` for selections and `aria-valuenow` for progress) is essential for a screen-reader-accessible experience.
**Action:** Implement a dedicated `#aria-announcer` with a 100ms delay in updates to ensure reliable re-announcement of dynamic content.
