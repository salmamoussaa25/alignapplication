import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomActionBar from '../components/BottomActionBar';
import OnboardChoiceCard from '../components/OnboardChoiceCard';
import './Rhythm.css';

const energyItems = [
  {
    id: 'morning',
    title: 'Morning person',
    description: 'Most energy in early hours'
  },
  {
    id: 'afternoon',
    title: 'Afternoon peak',
    description: 'Energy builds through the day'
  },
  {
    id: 'night',
    title: 'Night owl',
    description: 'Most productive in evenings'
  },
  {
    id: 'varies',
    title: 'It varies',
    description: 'Energy fluctuates day to day'
  }
];

const workItems = [
  {
    id: 'guided',
    title: 'Guided support',
    description: 'Help me plan and structure my day'
  },
  {
    id: 'flexible',
    title: 'Flexible approach',
    description: 'I prefer more control and flexibility'
  }
];

const Rhythm = ({ onboardingData, setOnboardingData }) => {
  const navigate = useNavigate();
  const canContinue = onboardingData.energy && onboardingData.workStyle;

  return (
    <section className="rhythmpg_wrap">
      <div className="rhythmpg_scroll">
        <header className="rhythmpg_head">
          <h1 className="rhythmpg_title">Help us understand your rhythm</h1>
          <p className="rhythmpg_text">
            We'll use this to schedule tasks at better times
          </p>
        </header>

        <section className="rhythmpg_group">
          <h2 className="rhythmpg_subhead">When do you have the most energy?</h2>
          <div className="rhythmpg_list">
            {energyItems.map((item) => (
              <OnboardChoiceCard
                key={item.id}
                title={item.title}
                description={item.description}
                selected={onboardingData.energy === item.id}
                onClick={() =>
                  setOnboardingData({
                    ...onboardingData,
                    energy: item.id
                  })
                }
              />
            ))}
          </div>
        </section>

        <section className="rhythmpg_group">
          <h2 className="rhythmpg_subhead">How would you like to work?</h2>
          <div className="rhythmpg_list">
            {workItems.map((item) => (
              <OnboardChoiceCard
                key={item.id}
                title={item.title}
                description={item.description}
                accent="lav"
                selected={onboardingData.workStyle === item.id}
                onClick={() =>
                  setOnboardingData({
                    ...onboardingData,
                    workStyle: item.id
                  })
                }
              />
            ))}
          </div>
        </section>
      </div>

      <BottomActionBar
        backLabel="Back"
        nextLabel="Continue"
        onBack={() => navigate('/onboarding/struggles')}
        onNext={() => navigate('/onboarding/mode')}
        nextDisabled={!canContinue}
        nextActive={canContinue}
      />
    </section>
  );
};

export default Rhythm;
