import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, CalendarDays } from 'lucide-react';
import GlowIcon from '../components/GlowIcon';
import ProgressTrack from '../components/ProgressTrack';
import OnboardChoiceCard from '../components/OnboardChoiceCard';
import OnboardNote from '../components/OnboardNote';
import './FirstTimeChoice.css';

const FirstTimeChoice = ({ onboardingData, setOnboardingData }) => {
  const navigate = useNavigate();

  return (
    <section className="firstchoicepg_wrap">
      <ProgressTrack activeStep={2} />

      <div className="firstchoicepg_icon">
        <GlowIcon icon={CalendarDays} />
      </div>

      <header className="firstchoicepg_head">
        <h1 className="firstchoicepg_title">When would you like to work on this?</h1>
        <p className="firstchoicepg_task">"{onboardingData.firstTask || 'Task'}"</p>
      </header>

      <div className="firstchoicepg_list">
        <OnboardChoiceCard
          title="Right now"
          description="Start a focus session"
          selected={onboardingData.firstTimeChoice === 'now'}
          onClick={() =>
            setOnboardingData({
              ...onboardingData,
              firstTimeChoice: 'now'
            })
          }
        />
        <OnboardChoiceCard
          title="Schedule for later"
          description="Choose a specific time"
          selected={onboardingData.firstTimeChoice === 'later'}
          onClick={() =>
            setOnboardingData({
              ...onboardingData,
              firstTimeChoice: 'later'
            })
          }
        />
      </div>

      <OnboardNote
        icon={AlertCircle}
        text="Starting now builds momentum. You've got this."
      />

      <button
        type="button"
        className="firstchoicepg_skip"
        onClick={() => navigate('/onboarding/ready')}
      >
        Skip for now
      </button>

      <button
        type="button"
        className={`firstchoicepg_btn ${onboardingData.firstTimeChoice ? 'firstchoicepg_on' : ''}`}
        onClick={() => navigate('/onboarding/ready')}
        disabled={!onboardingData.firstTimeChoice}
      >
        Continue
      </button>
    </section>
  );
};

export default FirstTimeChoice;
