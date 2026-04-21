import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title, text }) => {
  return (
    <div className="sectiontitle_wrap">
      <h2 className="sectiontitle_head">{title}</h2>
      {text ? <p className="sectiontitle_text">{text}</p> : null}
    </div>
  );
};

export default SectionTitle;
