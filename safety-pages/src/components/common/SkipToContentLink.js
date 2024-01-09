import React from 'react';

const SkipToContentLink = ({ targetId }) => {
  return <a href={`#${targetId}`} className="skip-link">Skip to Content</a>;
};

export default SkipToContentLink;