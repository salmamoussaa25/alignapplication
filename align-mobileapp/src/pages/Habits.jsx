import React, { useState } from 'react';
import { Check, Flame, Sparkles } from 'lucide-react';
import MobileBottomNav from '../components/MobileBottomNav';
import './Habits.css';

const habits_list = [
  { id: 1, name: 'Morning routine', category: 'Health', done: true, streak: true },
  { id: 2, name: 'Study session', category: 'Focus', done: true, streak: true },
  { id: 3, name: 'Exercise', category: 'Health', done: false, streak: false },
  { id: 4, name: 'Evening reflection', category: 'Well-being', done: false, streak: true },
  { id: 5, name: 'Connect with family', category: 'Social', done: true, streak: false },
  { id: 6, name: 'Healthy meal prep', category: 'Health', done: false, streak: false }
];

const Habits = () => {
  const [habits_state, setHabitsState] = useState(habits_list);
  const [show_overlay, setShowOverlay] = useState(false);

  const completed_count = habits_state.filter((item) => item.done).length;

  const toggle_habit = (habit_id) => {
    const target_habit = habits_state.find((item) => item.id === habit_id);
    if (target_habit && !target_habit.done) {
      setShowOverlay(true);
      window.setTimeout(() => {
        setShowOverlay(false);
      }, 2000);
    }

    setHabitsState((prev_state) =>
      prev_state.map((item) =>
        item.id === habit_id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <section className="habitspg_wrap">
      {show_overlay ? (
        <div className="habitspg_overlay">
          <div className="habitspg_overlayiconbox">
            <Check className="habitspg_overlayicon" />
          </div>
          <p className="habitspg_overlaytext">Great work! Habit completed</p>
          <Sparkles className="habitspg_overlayspark" />
        </div>
      ) : null}

      <div className="habitspg_scroll">
        <header className="habitspg_head">
          <h1 className="habitspg_title">Habits</h1>
          <p className="habitspg_sub">{completed_count} of {habits_state.length} completed today</p>
        </header>

        <section className="habitspg_progresscard">
          <div className="habitspg_progresshead">
            <p className="habitspg_progresslabel">Today's Progress</p>
            <p className="habitspg_progressnum">{Math.round((completed_count / habits_state.length) * 100)}%</p>
          </div>
          <div className="habitspg_progbar">
            <span
              className={`habitspg_progfill ${
                completed_count === 4
                  ? 'habitspg_progfill_67'
                  : completed_count === 3
                    ? 'habitspg_progfill_50'
                    : 'habitspg_progfill_83'
              }`}
            />
          </div>
          <p className="habitspg_progresstext">Keep going — you're building momentum</p>
        </section>

        <section className="habitspg_section">
          <h2 className="habitspg_sectiontitle">Today's Habits</h2>
          <div className="habitspg_list">
            {habits_state.map((item) => (
              <button
                type="button"
                key={item.id}
                className={`habitspg_card ${item.done ? 'habitspg_card_done' : ''}`}
                onClick={() => toggle_habit(item.id)}
              >
                <div className="habitspg_cardrow">
                  <span className={`habitspg_check ${item.done ? 'habitspg_check_on' : ''}`}>
                    {item.done ? <Check className="habitspg_checkicon" /> : null}
                  </span>
                  <div className="habitspg_main">
                    <div className="habitspg_topline">
                      <h3 className="habitspg_cardtitle">{item.name}</h3>
                      {item.streak ? <Flame className="habitspg_flame" /> : null}
                    </div>
                    <div className="habitspg_tagrow">
                      <span className={`habitspg_tag habitspg_tag_${item.category.toLowerCase().replace(/[^a-z]/g, '')}`}>
                        {item.category}
                      </span>
                      {item.streak ? <span className="habitspg_hint">Building consistency</span> : null}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="habitspg_note">
          <p className="habitspg_notetitle">Small steps create lasting change</p>
          <p className="habitspg_notetext">Focus on progress, not perfection. Every habit you complete matters.</p>
        </section>
      </div>

      <MobileBottomNav currentScreen="habits" />
    </section>
  );
};

export default Habits;
