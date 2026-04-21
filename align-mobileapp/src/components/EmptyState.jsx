import React from 'react';
import './EmptyState.css';

const EmptyState = ({ text }) => {
  return (
    <div className="emptystate_box">
      <p className="emptystate_text">{text}</p>
    </div>
  );
};

export default EmptyState;
