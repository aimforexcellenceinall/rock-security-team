import React, { useState } from "react"

const LostFoundChildForm = () => {
  const [formData, setFormData] = useState({
    race: "",
    hair: "",
    build: "",
    shirt: "",
    pants: "",
    areaLastSeen: ""
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // API call for data submission
    fetch("https://localhost:3000/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log("Success:", data)
      alert("Form submitted. Please consider contacting emergency services if necessary.")
    })
    .catch((error) => {
      console.error("Error:", error)
    })
  }

  return (
    <form onSubmit={handleSubmit} className="lost-found-form">
      {/* Race Dropdown */}
      <label>Race:
        <select name="race" value={formData.race} onChange={handleChange} className="dropdown">
          <option value="">Select Race</option>
          <option value="Caucasian">Caucasian</option>
          <option value="African American">African American</option>
          <option value="Hispanic">Hispanic</option>
          <option value="Asian">Asian</option>
          <option value="Other">Other</option>
        </select>
      </label>

      {/* Hair Dropdown */}
      <label>Hair Color:
        <select name="hair" value={formData.hair} onChange={handleChange} className="dropdown">
          <option value="">Select Hair Color</option>
          <option value="Blonde">Blonde</option>
          <option value="Brown">Brown</option>
          <option value="Black">Black</option>
          <option value="Red">Red</option>
          <option value="Gray">Gray</option>
          <option value="Other">Other</option>
        </select>
      </label>

      {/* Build Dropdown */}
      <label>Build:
        <select name="build" value={formData.build} onChange={handleChange} className="dropdown">
          <option value="">Select Build</option>
          <option value="Slim">Slim</option>
          <option value="Medium">Medium</option>
          <option value="Heavy">Heavy</option>
        </select>
      </label>

      {/* Shirt Dropdown */}
      <label>Shirt Color:
        <select name="shirt" value={formData.shirt} onChange={handleChange} className="dropdown">
          <option value="">Select Shirt Color</option>
          <option value="White">White</option>
          <option value="Black">Black</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Other">Other</option>
        </select>
      </label>

      {/* Pants Dropdown */}
      <label>Pants Color:
        <select name="pants" value={formData.pants} onChange={handleChange} className="dropdown">
          <option value="">Select Pants Color</option>
          <option value="Jeans">Jeans</option>
          <option value="Black">Black</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Other">Other</option>
        </select>
      </label>

      {/* Area Last Seen Dropdown */}
      <label>Area Last Seen:
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
      </label>

      {/* Submit Button */}
      <button type="submit" className="submit-button">Submit Form</button>
    </form>
  )
}

export default LostFoundChildForm