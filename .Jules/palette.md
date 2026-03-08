## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Quiz Keyboard Navigation
**Learning:** Adding global keyboard shortcuts (like Enter for navigation) can cause double-triggering when focus is explicitly moved to a button that already handles that key natively.
**Action:** Use `e.preventDefault()` in global key listeners and handle actions explicitly, or rely solely on focus management if standard button behavior suffices.

## 2025-05-16 - ARIA Live Regions and Selection States
**Learning:** For single-page applications with dynamic content updates (like new questions or feedback), a dedicated ARIA live region is essential to narrate changes that are otherwise purely visual. Additionally, toggle-like buttons in grids should use the `aria-pressed` attribute to communicate selection state to screen readers.
**Action:** Implement a hidden `#aria-announcer` live region and an `announce()` utility for major state changes. Use `aria-pressed` on all selection-based buttons.
