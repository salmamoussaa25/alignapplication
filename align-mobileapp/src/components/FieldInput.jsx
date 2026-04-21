import React from 'react';
import './FieldInput.css';

const FieldInput = ({ id, label, type = 'text', value, onChange, placeholder }) => {
  return (
    <label className="fieldinput_wrap" htmlFor={id}>
      <span className="fieldinput_label">{label}</span>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="fieldinput_box"
      />
    </label>
  );
};

export default FieldInput;
