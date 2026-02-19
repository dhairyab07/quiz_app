## 2025-05-15 - Enhancing Quiz Accessibility and Navigation
**Learning:** Adding an `aria-live` announcer and focus management significantly improves the experience for screen reader and keyboard users without compromising the visual aesthetic. Providing subtle visual hints for keyboard shortcuts empowers power users while maintaining a clean UI.
**Action:** Always include an `#aria-announcer` for dynamic feedback and use `setTimeout` to manage focus transitions in animated single-page applications.

## 2025-05-15 - Preventing Double-Trigger Key Events
**Learning:** Custom keyboard listeners for keys like "Enter" can conflict with native browser behavior if focus is moved to an interactive element.
**Action:** Rely on focus management and native browser events for "Enter" and "Space" whenever possible, while using `e.preventDefault()` for non-standard alphanumeric shortcuts.
