import React from 'react';
import { AccessibleButton } from '../Accessibility/AccessibilityUtils';
import { formatDate, capitalizeFirstLetter, truncateString } from './OtherUtils';

const MyComponent = ({ date, title, description, onMoreInfoClick }) => {
  return (
    <div className="feature-card">
      <h2 className="card-title">{capitalizeFirstLetter(title)}</h2>
      <p className="card-date">{formatDate(date)}</p>
      <p className="card-description">{truncateString(description, 100)}</p>

      <AccessibleButton 
        onClick={onMoreInfoClick} 
        ariaLabel="More Info" 
        className="info-button">
        More Info
      </AccessibleButton>
    </div>
  );
};

export default MyComponent;
