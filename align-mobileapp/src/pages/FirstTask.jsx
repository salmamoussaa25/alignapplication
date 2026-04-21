import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, Plus } from 'lucide-react';
import GlowIcon from '../components/GlowIcon';
import ProgressTrack from '../components/ProgressTrack';
import OnboardNote from '../components/OnboardNote';
import './FirstTask.css';

const FirstTask = ({ onboardingData, setOnboardingData }) => {
  const navigate = useNavigate();
  const canContinue = onboardingData.firstTask.trim().length > 0;

  return (
    <section className="firsttaskpg_wrap">
      <ProgressTrack activeStep={1} />

      <div className="firsttaskpg_icon">
        <GlowIcon icon={Plus} />
      </div>

      <header className="firsttaskpg_head">
        <h1 className="firsttaskpg_title">Create your first task</h1>
        <p className="firsttaskpg_text">
          What would you like to work on today? Keep it simple.
        </p>
      </header>

      <label className="firsttaskpg_field" htmlFor="first-task">
        <input
          id="first-task"
          className="firsttaskpg_input"
          value={onboardingData.firstTask}
          onChange={(event) =>
            setOnboardingData({
              ...onboardingData,
              firstTask: event.target.value
            })
          }
          placeholder="E.g., Study for exam. Write email..."
        />
      </label>

      <OnboardNote
        icon={AlertCircle}
        text="Start with something achievable. You can always add more later."
      />

      <button
        type="button"
        className={`firsttaskpg_btn ${canContinue ? 'firsttaskpg_on' : ''}`}
        onClick={() => navigate('/onboarding/first-time')}
        disabled={!canContinue}
      >
        Continue
      </button>

      <button
        type="button"
        className="firsttaskpg_skip"
        onClick={() => navigate('/onboarding/first-time')}
      >
        Skip for now
      </button>
    </section>
  );
};

export default FirstTask;
