## 2025-05-14 - Initial Accessibility Audit
**Learning:** The app has a strong visual identity but lacks basic accessibility features like ARIA labels for icon-only buttons and clear focus indicators for keyboard navigation.
**Action:** Implement ARIA labels, expanded states, and focus-visible styles to make the premium experience accessible to everyone.

## 2026-03-02 - Screen Reader Announcers and Focus Management
**Learning:** Implementing `aria-live` announcers with a slight delay (100ms) ensures that screen readers reliably catch updates even when the text content is quickly refreshed. Moving focus to the primary next action after a selection improves keyboard navigation speed and clarity.
**Action:** Use a `setTimeout` for both `aria-live` text updates and focus transitions to primary action buttons to ensure reliable assistive technology response.
