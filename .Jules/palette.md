## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2025-05-14 - Keyboard Shortcuts and ARIA Announcements
**Learning:** Screen readers may miss rapid UI updates if they aren't explicitly announced via a live region. Providing keyboard shortcuts for frequent actions (like selecting quiz answers) significantly improves the UX for power users and users with accessibility needs.
**Action:** Use a dedicated #aria-announcer live region with a slight delay (100ms) to ensure consistent announcements across browsers and screen readers. Implement global keydown listeners for common shortcuts like A-D and numbers 1-4.
