import React from 'react';
import { useNavigate } from 'react-router-dom';
import alignlogo from '../assets/alignlogo.png';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <section className="welcomepg_wrap">
      <div className="welcomepg_cont">
        <div className="welcomepg_icon">
          <img src={alignlogo} alt="Align logo" className="welcomepg_logo" />
        </div>
        <header className="welcomepg_head">
          <h1 className="welcomepg_title">Welcome to Align</h1>
          <p className="welcomepg_sub">Balanced is the new productive</p>
          <p className="welcomepg_text">
            A gentle system designed to support you in building sustainable
            routines
          </p>
        </header>
        <div className="welcomepg_list">
          <div className="welcomepg_item">
            <span className="welcomepg_dot welcomepg_mint" />
            <p>Calm, supportive guidance</p>
          </div>
          <div className="welcomepg_item">
            <span className="welcomepg_dot welcomepg_lav" />
            <p>Energy-aware scheduling</p>
          </div>
          <div className="welcomepg_item">
            <span className="welcomepg_dot welcomepg_mint" />
            <p>Built for executive function</p>
          </div>
        </div>
      </div>

      <div className="welcomepg_bot">
        <button
          type="button"
          className="welcomepg_btn"
          onClick={() => navigate('/onboarding/struggles')}
        >
          Get Started
        </button>
        <p className="welcomepg_hint">Takes less than a minute</p>
      </div>
    </section>
  );
};

export default Welcome;
