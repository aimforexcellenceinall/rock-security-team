import React, { useState, useEffect } from "react"

// Optional: Utility function for debouncing
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

const NotepadPage = () => {
  const [notes, setNotes] = useState("")
  const debouncedNotes = useDebounce(notes, 1000) // 1-second delay

  const saveNotes = async (notes) => {
    try {
      const response = await fetch("https://localhost:3000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notes }),
      })
      if (!response.ok) throw new Error("Network response was not ok.")
      console.log("Notes saved successfully") // Or handle response appropriately
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error)
    }
  }

  useEffect(() => {
    if (debouncedNotes) {
      saveNotes(debouncedNotes)
    }
  }, [debouncedNotes])

  return (
    <div className="notepad-container">
      <textarea
        className="notepad-textarea"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Type your notes here..."
      />
      <p>{notes ? "Saved" : ""}</p>
    </div>
  )
}

export default NotepadPage