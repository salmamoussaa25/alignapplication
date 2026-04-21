import React from 'react';
import './LogInButton.css';

export default function LogInButton({ children, isLoading, type = "button" }) {
  return (
    <button
      type={type}
      className={`loginbtn_base ${isLoading ? 'loginbtn_loading_state' : ''}`}
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="loginbtn_spinner"></span>
      ) : (
        children
      )}
    </button>
  );
}