## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-15 - Quiz Keyboard Navigation
**Learning:** Adding global keyboard shortcuts (like Enter for navigation) can cause double-triggering when focus is explicitly moved to a button that already handles that key natively.
**Action:** Use `e.preventDefault()` in global key listeners and handle actions explicitly, or rely solely on focus management if standard button behavior suffices.

## 2026-03-14 - Multi-Modal Feedback & Hints
**Learning:** Screen readers may miss dynamic UI changes (like answer correctness or progress updates) if they aren't explicitly narrated via an ARIA live region. Additionally, visual keyboard hints (e.g., [1], [2]) provide helpful anchors for all users while signaling accessibility for power users.
**Action:** Use a hidden `#aria-announcer` with `aria-live="polite"` for narrating state changes and include `hidden sm:inline-block` shortcut hints in buttons to enhance discoverability.
