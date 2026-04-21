import React from 'react';
import './OnboardNote.css';

const OnboardNote = ({ icon: Icon, text }) => {
  return (
    <div className="onboardnote_box">
      {Icon ? <Icon className="onboardnote_icon" strokeWidth={2.1} /> : null}
      <p className="onboardnote_text">{text}</p>
    </div>
  );
};

export default OnboardNote;
