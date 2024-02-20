// Function to manage focus
export const setFocus = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) element.focus()
  }
  
  // Accessible Button Component
  export const AccessibleButton = ({ onClick, children, ariaLabel }) => {
    const handleKeyDown = (event) => {
      // Typically, you'd check for space or enter keys
      if (event.key === "Enter" || event.key === " ") {
        onClick()
      }
    }
  
    return (
      <div
        tabIndex="0"
        role="button"
        aria-label={ariaLabel}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        style={{ cursor: "pointer" }}
      >
        {children}
      </div>
    )
  }
  
  
  // Skip to Content Link (for bypassing repetitive navigation)
  export const SkipToContentLink = ({ targetId }) => {
    return (
      <a href={`#${targetId}`} className="skip-link">
        Skip to Content
      </a>
    )
  }
  
  // ARIA Live Region for Announcements
  export const AriaLiveRegion = ({ message, role = "status" }) => {
    return (
      <div aria-live="polite" aria-atomic="true" role={role}>
        {message}
      </div>
    )
  }  