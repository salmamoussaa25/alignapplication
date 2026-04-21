import React from 'react';
import './PrimaryButton.css';

const PrimaryButton = ({ label, type = 'button', soft, onClick, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`primarybtn_main ${soft ? 'primarybtn_soft' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
