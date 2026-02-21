## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2026-02-21 - Quiz Keyboard Accessibility
**Learning:** To prevent 'double-trigger' bugs with custom keyboard listeners, use e.preventDefault() for alphanumeric shortcuts (like A-D, 1-4) but avoid preventing default on 'Enter' or 'Space' keys if they are needed to trigger natively focused buttons (like the 'Next' button). Auto-focusing a button makes a custom 'Enter' listener redundant and potentially buggy.
**Action:** Rely on native browser behavior for 'Enter' and 'Space' when a target button is already focused; only use custom listeners for shortcuts that don't have native counterparts.
