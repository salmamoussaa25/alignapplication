import React from 'react';
import './AISuggestionCard.css';

const AISuggestionCard = ({ insight, onAdjust, onMoveTasks, onLighten, onDismiss }) => {
  return (
    <section className="aisuggestion_wrap">
      <div className="aisuggestion_head">
        <div className="aisuggestion_dot" />
        <p className="aisuggestion_label">AI Suggestion</p>
      </div>
      <p className="aisuggestion_text">{insight}</p>
      <button type="button" className="aisuggestion_mainbtn" onClick={onAdjust}>
        Help me adjust
      </button>
      <div className="aisuggestion_grid">
        <button type="button" className="aisuggestion_smallbtn" onClick={onMoveTasks}>Move tasks</button>
        <button type="button" className="aisuggestion_smallbtn" onClick={onLighten}>Lighten schedule</button>
      </div>
      <button type="button" className="aisuggestion_ghostbtn" onClick={onDismiss}>Not now</button>
    </section>
  );
};

export default AISuggestionCard;