## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - ARIA Announcer and Keyboard Shortcuts
**Learning:** For single-page applications that toggle visibility of sections, a global ARIA live region is essential for narrating screen transitions. Additionally, implementing keyboard shortcuts (1-4, A-D) significantly enhances the "premium" feel while improving accessibility for power users.
**Action:** Always include an #aria-announcer element and provide spoken feedback for state changes, and consider keyboard shortcuts for repetitive interactions like multiple-choice answers.
