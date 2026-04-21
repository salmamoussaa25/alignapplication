import React from 'react';
import './GlowIcon.css';

const GlowIcon = ({ icon: Icon, play }) => {
  return (
    <div className={`glowicon_wrap ${play ? 'glowicon_play' : ''}`}>
      <Icon className="glowicon_mark" strokeWidth={2.2} />
    </div>
  );
};

export default GlowIcon;
