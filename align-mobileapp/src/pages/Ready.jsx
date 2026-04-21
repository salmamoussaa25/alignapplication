import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react';
import GlowIcon from '../components/GlowIcon';
import ProgressTrack from '../components/ProgressTrack';
import './Ready.css';

const Ready = () => {
  const navigate = useNavigate();

  return (
    <section className="readypg_wrap">
      <ProgressTrack activeStep={3} />

      <div className="readypg_cont">
        <div className="readypg_icon">
          <GlowIcon icon={Play} play />
        </div>
        <h1 className="readypg_title">You're all set!</h1>
        <p className="readypg_text">
          Starting is the hardest part — and you've already done it.
        </p>
        <button
          type="button"
          className="readypg_btn"
          onClick={() => navigate('/home')}
        >
          Begin Focus Session
        </button>
      </div>
    </section>
  );
};

export default Ready;
