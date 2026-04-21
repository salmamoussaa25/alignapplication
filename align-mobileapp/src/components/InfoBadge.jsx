import React from 'react';
import './InfoBadge.css';

const InfoBadge = ({ text, live }) => {
  return (
    <span className={`infobadge_tag ${live ? 'infobadge_live' : 'infobadge_demo'}`}>{text}</span>
  );
};

export default InfoBadge;
