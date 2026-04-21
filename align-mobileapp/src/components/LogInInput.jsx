import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import './LogInInput.css';

export default function LogInInput({ label, type, value, onChange, placeholder, Icon, error }) {
  const [showPassword, setShowPassword] = useState(false);
  
  const isPassword = type === 'password';
  const currentType = isPassword && showPassword ? 'text' : type;

  return (
    <div className="logininput_container">
      <label className="logininput_label">{label}</label>
      <div className="logininput_wrapper">
        {Icon && (
          <Icon className={`logininput_icon ${error ? 'logininput_icon_error' : ''}`} />
        )}
        
        <input
          type={currentType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            logininput_field 
            ${Icon ? 'logininput_has_icon' : ''} 
            ${isPassword ? 'logininput_has_toggle' : ''}
            ${error ? 'logininput_field_error' : ''}
          `}
        />
        
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="logininput_toggle_btn"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="logininput_toggle_icon" />
            ) : (
              <Eye className="logininput_toggle_icon" />
            )}
          </button>
        )}
      </div>
      
      {/* Immediate Visual Feedback for Errors */}
      {error && <span className="logininput_error_text">{error}</span>}
    </div>
  );
}