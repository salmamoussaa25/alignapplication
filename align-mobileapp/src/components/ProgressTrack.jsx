import React from 'react';
import './ProgressTrack.css';

const ProgressTrack = ({ activeStep = 1 }) => {
  return (
    <div className="progresstrack_row" aria-label="Progress">
      {[1, 2, 3].map((item) => (
        <span
          key={item}
          className={`progresstrack_bar ${item <= activeStep ? 'progresstrack_on' : ''}`}
        />
      ))}
    </div>
  );
};

export default ProgressTrack;
