import React from "react"

const AriaLiveRegion = ({ message }) => {
  return (
    <div aria-live="polite" aria-atomic="true">
      {message}
    </div>
  )
}

export default AriaLiveRegion