import React, { useState, useEffect } from 'react';

const ParentIsLostForm = () => {
  const [description, setDescription] = useState('');
  const [timer, setTimer] = useState(3600); // 1 hour in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    let interval;
    if (isSubmitted && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      // Timer expires
      alert("1 hour has passed. Please initiate the next steps.");
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isSubmitted, timer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission logic here, including sending description data
  };

  // Convert timer to human-readable format
  const formatTime = () => {
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="parent-lost-container">
      <h1>Parent is Lost</h1>
      <p>If you are speaking with the child, please provide details:</p>
      <div className="reminder">
        <p>Please include height, hair color, clothing details, distinctive features, and last known location.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="parentDescription">Description of Parent:</label>
          <input 
            type="text" 
            id="parentDescription" 
            name="parentDescription" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Height, hair color, clothing, distinctive features, last known location."
          />
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
  );
};

export default ParentIsLostForm;