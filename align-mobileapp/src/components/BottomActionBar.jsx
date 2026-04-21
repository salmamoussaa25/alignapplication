import React from 'react';
import './BottomActionBar.css';

const BottomActionBar = ({
  backLabel,
  nextLabel,
  onBack,
  onNext,
  nextDisabled,
  nextActive,
  nextWide
}) => {
  return (
    <div className="btmbar_wrap">
      <button type="button" className="btmbar_back" onClick={onBack}>
        {backLabel}
      </button>
      <button
        type="button"
        className={`btmbar_next ${nextActive ? 'btmbar_on' : ''} ${nextWide ? 'btmbar_wide' : ''}`}
        onClick={onNext}
        disabled={nextDisabled}
      >
        {nextLabel}
      </button>
    </div>
  );
};

export default BottomActionBar;
