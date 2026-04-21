import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, SlidersHorizontal, Sparkles } from 'lucide-react';
import BottomActionBar from '../components/BottomActionBar';
import OnboardChoiceCard from '../components/OnboardChoiceCard';
import OnboardNote from '../components/OnboardNote';
import './Mode.css';

const modeItems = [
  {
    id: 'guide',
    icon: Sparkles,
    title: 'Guide Mode',
    description: 'AI helps plan your day and suggests next steps',
    bullets: ['Smart scheduling', 'Regular check-ins', 'Task breakdown'],
    badge: 'Recommended'
  },
  {
    id: 'productivity',
    icon: SlidersHorizontal,
    title: 'Productivity Mode',
    description: 'You control your schedule with gentle support',
    bullets: ['Manual planning', 'Flexible structure', 'Minimal prompts']
  }
];

const Mode = ({ onboardingData, setOnboardingData }) => {
  const navigate = useNavigate();

  return (
    <section className="modepg_wrap">
      <div className="modepg_scroll">
        <header className="modepg_head">
          <h1 className="modepg_title">Choose your mode</h1>
          <p className="modepg_text">You can change this anytime in settings</p>
        </header>

        <div className="modepg_list">
          {modeItems.map((item) => (
            <OnboardChoiceCard
              key={item.id}
              icon={<item.icon />}
              title={item.title}
              description={item.description}
              bullets={item.bullets}
              badge={item.badge}
              selected={onboardingData.mode === item.id}
              onClick={() =>
                setOnboardingData({
                  ...onboardingData,
                  mode: item.id
                })
              }
            />
          ))}
        </div>

        <OnboardNote
          icon={AlertCircle}
          text="Guide Mode is recommended if you struggle with planning or starting tasks"
        />
      </div>

      <BottomActionBar
        backLabel="Back"
        nextLabel="Get Started"
        onBack={() => navigate('/onboarding/rhythm')}
        onNext={() => navigate('/onboarding/first-task')}
        nextDisabled={!onboardingData.mode}
        nextActive={Boolean(onboardingData.mode)}
      />
    </section>
  );
};

export default Mode;
