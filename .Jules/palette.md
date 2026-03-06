## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2026-03-06 - Accessible Keyboard-First Quiz Flow
**Learning:** Combining visual shortcut hints (1-4, A-D) with automated focus management (focusing the first option on load and the 'Next' button after selection) creates a "zero-tab" experience that significantly reduces the motor load for keyboard users.
**Action:** Use the `hidden sm:inline-block` pattern for shortcut hints and combine with `setTimeout` based focus shifts to guide users through multi-step interactions without requiring manual tabbing.
