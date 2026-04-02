## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Quiz Keyboard Navigation
**Learning:** Adding global keyboard shortcuts (like Enter for navigation) can cause double-triggering when focus is explicitly moved to a button that already handles that key natively.
**Action:** Use `e.preventDefault()` in global key listeners and handle actions explicitly, or rely solely on focus management if standard button behavior suffices.

## 2025-05-15 - ARIA Live Region for Dynamic Quiz Updates
**Learning:** In a highly visual single-page application like this quiz app, dynamic updates (new questions, correctness feedback, final results) are often missed by screen readers. A dedicated ARIA live region is essential for accessibility.
**Action:** Use a hidden `aria-live="polite"` element and a helper `announce()` function with a small delay to ensure screen readers reliably announce state changes.
