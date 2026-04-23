import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Pause } from 'lucide-react';
import './OverwhelmOverlay.css';

export default function OverwhelmOverlay({ isOpen, onClose }) {
  const navigate = useNavigate();

  // UX Heuristic: Allow users to close the overlay using the Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // UX Heuristic: Allow users to close the overlay by clicking the backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleActivateUrgency = () => {
    onClose();
    navigate('/high-urgency');
  };

  return (
    <div className="overwhelmoverlay_backdrop" onClick={handleBackdropClick}>
      
      <button 
        className="overwhelmoverlay_close_btn" 
        onClick={onClose}
        aria-label="Close overlay"
      >
        <X className="overwhelmoverlay_close_icon" />
      </button>

      <div className="overwhelmoverlay_card" role="dialog" aria-modal="true">
        <div className="overwhelmoverlay_icon_box">
          <Pause className="overwhelmoverlay_pause_icon" />
        </div>
        
        <div className="overwhelmoverlay_content">
          <h2 className="overwhelmoverlay_title">
            Let's take this one step at a time
          </h2>
          <p className="overwhelmoverlay_text">
            You don't need to do everything right now. Focus on what matters most.
          </p>
          
          <button 
            className="overwhelmoverlay_cta_btn"
            onClick={handleActivateUrgency}
          >
            Enter High Urgency Mode
          </button>
        </div>
      </div>
      
    </div>
  );
}