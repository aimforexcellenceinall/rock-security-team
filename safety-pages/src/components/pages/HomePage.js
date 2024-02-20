import React, { useState, useEffect } from "react"
import { database } from "../Firebase" 

const HomePage = () => {
  const [campusInfo, setCampusInfo] = useState({
    address: "",
    phone: "",
    posts: {}
  })

  useEffect(() => {
    // Fetch campus info from Firebase
    const campusInfoRef = database.ref("/campus-info")
    campusInfoRef.on("value", (snapshot) => {
      const data = snapshot.val()
      setCampusInfo(data || {})
    })
  }, [])

  const handleInputChange = (e) => {
    setCampusInfo({ ...campusInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Submit updated campus info to your API or database
    fetch("https://localhost:3000/update-campus-info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(campusInfo)
    })
    .then(response => response.json())
    .then(data => console.log("Success:", data))
    .catch(error => console.error("Error:", error))
  }

  return (
    <div className="homepage">
      {/* Campus Information Form */}
      <form onSubmit={handleSubmit} className="campus-info-form">
        <h2>Update Campus Information</h2>
        <input
          type="text"
          name="address"
          value={campusInfo.address}
          onChange={handleInputChange}
          placeholder="Campus Address"
        />
        <input
          type="tel"
          name="phone"
          value={campusInfo.phone}
          onChange={handleInputChange}
          placeholder="Campus Phone"
        />
        {/* Include inputs for updating posts if necessary */}
        <button type="submit">Update Info</button>
      </form>

      {/* Display Campus Posts */}
      <div className="campus-posts">
        <h2>Campus Posts</h2>
        {Object.entries(campusInfo.posts).map(([area, posts]) => (
          <div key={area}>
            <h3>{area}</h3>
            <ul>
              {posts.map(post => <li key={post}>Post {post}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage