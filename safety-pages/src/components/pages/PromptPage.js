import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const PromptPage = ({ promptType }) => {
  const navigate = useNavigate();

  // Function to navigate to different pages
  const navigateTo = (path) => {
    navigate.push(path);
  };

  const renderPromptContent = () => {
    switch (promptType) {
      case 'lostChild':
        return (
          <div>
            {/* ... Lost Child Protocol Content */}
            <button onClick={() => navigateTo('/lockdown')}>Initiate Lockdown</button>
            <button onClick={() => navigateTo('/search')}>Start Search Operation</button>
          </div>
        );
      case 'lostParent':
        return (
          <div>
            {/* ... Lost Parent Protocol Content */}
            <button onClick={() => navigateTo('/secure-area')}>Escort to Secure Area</button>
          </div>
        );
      case 'recoverReunite':
        return (
          <div>
            {/* ... Recover/Reunite Protocol Content */}
            <button onClick={() => navigateTo('/reunite')}>Reunite Child</button>
          </div>
        );
      default:
        return <div>Select a prompt</div>;
    }
  };

  return (
    <div>
      <h1>Prompt Page</h1>
      {renderPromptContent()}
    </div>
  );
};

export default PromptPage;