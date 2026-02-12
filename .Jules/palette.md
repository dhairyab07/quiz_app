## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2026-02-12 - Accessible Selection States and Progress Indicators
**Learning:** Interactive selection grids (like categories or counts) and visual progress elements (like bars or circles) require specific ARIA roles and states (`aria-pressed`, `role="progressbar"`) to be correctly interpreted by assistive technologies.
**Action:** Always include `aria-pressed` for selectable buttons and `role="progressbar"` with `aria-valuenow` for progress indicators, ensuring they are updated dynamically in JavaScript alongside visual state changes.
