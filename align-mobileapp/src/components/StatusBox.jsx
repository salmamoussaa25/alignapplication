import React from 'react';
import './StatusBox.css';

const StatusBox = ({ text, mode }) => {
  if (!text) {
    return null;
  }

  return <p className={`statusbox_note statusbox_${mode}`}>{text}</p>;
};

export default StatusBox;
