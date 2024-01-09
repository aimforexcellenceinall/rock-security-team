import React from 'react';

const AccessibleButton = ({ onClick, children, ariaLabel, ...props }) => {
  return (
    <button 
      aria-label={ariaLabel}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default AccessibleButton;