import React, { useState, useEffect } from "react"

const ParentIsLostForm = () => {
  const [formData, setFormData] = useState({
    height: "",
    hairColor: "",
    clothing: "",
    distinctiveFeatures: "",
    lastKnownLocation: "",
    isPregnant: "No" // Added for pregnancy status
  })
  const [timer, setTimer] = useState(3600) // 1 hour in seconds
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    let interval
    if (isSubmitted && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1)
      }, 1000)
    } else if (timer === 0) {
      alert("1 hour has passed. Please initiate the next steps.")
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isSubmitted, timer])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Handle form submission logic here
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const formatTime = () => {
    const hours = Math.floor(timer / 3600)
    const minutes = Math.floor((timer % 3600) / 60)
    const seconds = timer % 60
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <div className="parent-lost-container">
      <h1>Parent is Lost</h1>
      <p>If you are speaking with the child, please provide details:</p>
      <form onSubmit={handleSubmit}>
        {/* Height Dropdown */}
        <div className="form-group">
          <label htmlFor="height">Height:</label>
          <select name="height" value={formData.height} onChange={handleChange}>
            <option value="">Select height...</option>
            <option value="short">Short</option>
            <option value="average">Average</option>
            <option value="tall">Tall</option>
          </select>
        </div>

        {/* Hair Color Dropdown */}
        <div className="form-group">
          <label htmlFor="hairColor">Hair Color:</label>
          <select name="hairColor" value={formData.hairColor} onChange={handleChange}>
            <option value="">Select hair color...</option>
            <option value="blonde">Blonde</option>
            <option value="brown">Brown</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="gray">Gray</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Clothing Text Input */}
        <div className="form-group">
          <label htmlFor="clothing">Clothing:</label>
          <input
            type="text"
            name="clothing"
            value={formData.clothing}
            onChange={handleChange}
            placeholder="Describe clothing..."
          />
        </div>

        {/* Distinctive Features Text Input */}
        <div className="form-group">
          <label htmlFor="distinctiveFeatures">Distinctive Features:</label>
          <input
            type="text"
            name="distinctiveFeatures"
            value={formData.distinctiveFeatures}
            onChange={handleChange}
            placeholder="Any distinctive features..."
          />
        </div>

        {/* Last Known Location Text Input */}
        <div className="form-group">
          <label>Area Last Seen:</label>
          <select name="areaLastSeen" value={formData.areaLastSeen} onChange={handleChange} className="dropdown">
            <option value="">Select Area</option>
            <option value="Post 1">Post 1</option>
            <option value="Post 2">Post 2</option>
            <option value="Post 3">Post 3</option>
            <option value="Post 4">Post 4</option>
            <option value="Post 5">Post 5</option>
            <option value="Post 6">Post 6</option>
            <option value="Post 7">Post 7</option>
          </select>
        </div>

        {/* Pregnancy Status Dropdown */}
        <div className="form-group">
          <label htmlFor="isPregnant">Pregnant:</label>
          <select name="isPregnant" value={formData.isPregnant} onChange={handleChange}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        <button type="submit">Submit Report</button>
      </form>
      {isSubmitted && (
        <>
          <div>
            <h4>Time remaining for initial response: {formatTime()}</h4>
          </div>
          <div className="next-steps">
            <h2>Next Steps:</h2>
            <p>Escort Child to Rock Kids Check-in Area, by a minimum of two (2) team members, preferably one male, one female.</p>
            <p>Advise Rock Kids staff of missing parent and have them check their system for parent/guardian contact info.</p>
          </div>
        </>
      )}
    </div>
  )
}

export default ParentIsLostForm