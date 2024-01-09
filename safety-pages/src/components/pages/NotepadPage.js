import React, { useState, useEffect } from 'react';

const NotepadPage = () => {
  const saveNotes = async (notes) => {
    try {
      const response = await fetch('https://your-api-endpoint.com/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ notes }),
      });
      if (!response.ok) throw new Error('Network response was not ok.');
      // Handle response
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      // Handle errors appropriately
    }
  };
  
  useEffect(() => {
    if (debouncedNotes) {
      saveNotes(debouncedNotes);
    }
  }, [debouncedNotes]);
  

  return (
    <div>
      <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      <p>{notes ? 'Saved' : ''}</p>
    </div>
  );
};

export default NotepadPage;