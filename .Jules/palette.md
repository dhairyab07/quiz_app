## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Discoverable Keyboard Shortcuts
**Learning:** Keyboard shortcuts drastically improve the UX for power users, but they must be discoverable via visual hints. In minimalist "premium" designs, subtle numeric indicators that hide on mobile maintain aesthetic while providing utility.
**Action:** Use conditional visibility (e.g., `hidden sm:inline-block`) for shortcut hints and ensure they are paired with a scoped global event listener.
