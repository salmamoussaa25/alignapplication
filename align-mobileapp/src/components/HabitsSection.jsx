import React from 'react';
import { Check } from 'lucide-react';
import './HabitsSection.css';

const HabitsSection = ({ habits, onViewAll }) => {
  return (
    <section className="habitssection_wrap">
      <div className="habitssection_head">
        <h3 className="habitssection_title">Today's Habits</h3>
        <button type="button" className="habitssection_viewbtn" onClick={onViewAll}>
          View all
        </button>
      </div>
      <div className="habitssection_row">
        {habits.map((item) => (
          <button
            type="button"
            key={item.id}
            className={`habitssection_card ${item.done ? 'habitssection_card_on' : ''}`}
          >
            <div className="habitssection_checkrow">
              <span className={`habitssection_check ${item.done ? 'habitssection_check_on' : ''}`}>
                {item.done ? <Check className="habitssection_checkicon" /> : null}
              </span>
              {item.done && <span className="habitssection_flame">🔥</span>}
            </div>
            <p className="habitssection_cardtitle">{item.title}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default HabitsSection;