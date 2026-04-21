import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, Clock3, RefreshCcw, Rocket, Waves, Zap, Focus } from 'lucide-react';
import BottomActionBar from '../components/BottomActionBar';
import OnboardChoiceCard from '../components/OnboardChoiceCard';
import OnboardNote from '../components/OnboardNote';
import './Struggles.css';

const items = [
  { id: 'focus', title: 'Staying focused', icon: Focus },
  { id: 'time', title: 'Managing time', icon: Clock3 },
  { id: 'starting', title: 'Starting tasks', icon: Rocket },
  { id: 'overwhelm', title: 'Feeling overwhelmed', icon: Waves },
  { id: 'energy', title: 'Energy management', icon: Zap },
  { id: 'consistency', title: 'Building consistency', icon: RefreshCcw }
];

const Struggles = ({ onboardingData, setOnboardingData }) => {
  const navigate = useNavigate();

  const toggleItem = (id) => {
    const current = onboardingData.struggles;
    const updated = current.includes(id)
      ? current.filter((item) => item !== id)
      : current.concat(id);

    setOnboardingData({
      ...onboardingData,
      struggles: updated
    });
  };

  return (
    <section className="strugglepg_wrap">
      <div className="strugglepg_scroll">
        <header className="strugglepg_head">
          <h1 className="strugglepg_title">What would help you most?</h1>
          <p className="strugglepg_text">
            Select any that resonate. This helps us support you better.
          </p>
        </header>

        <div className="strugglepg_list">
          {items.map((item) => (
            <OnboardChoiceCard
              key={item.id}
              icon={<item.icon />}
              title={item.title}
              selected={onboardingData.struggles.includes(item.id)}
              onClick={() => toggleItem(item.id)}
            />
          ))}
        </div>

        <OnboardNote
          icon={AlertCircle}
          text="These are common experiences. You're not alone in this."
        />
      </div>

      <BottomActionBar
        backLabel="Back"
        nextLabel="Continue"
        onBack={() => navigate('/')}
        onNext={() => navigate('/onboarding/rhythm')}
        nextDisabled={onboardingData.struggles.length === 0}
        nextActive={onboardingData.struggles.length > 0}
      />
    </section>
  );
};

export default Struggles;
