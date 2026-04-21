import React from 'react';
import './OnboardChoiceCard.css';

const OnboardChoiceCard = ({
  icon,
  title,
  description,
  bullets,
  selected,
  accent = 'mint',
  badge,
  onClick
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`choicecard_wrap choicecard_${accent} ${selected ? 'choicecard_on' : ''}`}
    >
      <div className="choicecard_head">
        {icon ? <div className="choicecard_icon">{icon}</div> : null}
        <div className="choicecard_main">
          <h3 className="choicecard_title">{title}</h3>
          {description ? <p className="choicecard_text">{description}</p> : null}
        </div>
        {selected ? <span className="choicecard_check">✓</span> : null}
      </div>
      {bullets && bullets.length ? (
        <ul className="choicecard_list">
          {bullets.map((item) => (
            <li key={item} className="choicecard_item">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      {badge ? <span className="choicecard_badge">{badge}</span> : null}
    </button>
  );
};

export default OnboardChoiceCard;
