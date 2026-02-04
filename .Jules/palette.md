## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Keyboard Navigation and Progress Accessibility
**Learning:** Combining keyboard shortcuts with automatic focus management significantly improves the speed and accessibility of quiz interactions. Using aria-pressed for selection grids ensures screen reader users can track their active choices.
**Action:** Always implement A-D/1-4 shortcuts for quiz options and use aria-pressed for custom grid selections.
