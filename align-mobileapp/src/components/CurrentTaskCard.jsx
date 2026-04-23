import React from 'react';
import { Play } from 'lucide-react';
import './CurrentTaskCard.css';

const CurrentTaskCard = ({ task, onStartFocus }) => {
  const { title, badge, priority, duration, category, progress } = task;

  return (
    <section className="currenttask_wrap">
      <div className="currenttask_top">
        <div className="currenttask_badges">
          <span className="currenttask_label">Current Task</span>
          <span className="currenttask_badge">{badge}</span>
        </div>
        <span className="currenttask_priority">{priority}</span>
      </div>

      <h2 className="currenttask_title">{title}</h2>

      <div className="currenttask_meta">
        <div className="currenttask_dot currenttask_dot_mint" />
        <span className="currenttask_metaitem">{duration}</span>
        <div className="currenttask_dot currenttask_dot_lav" />
        <span className="currenttask_metaitem">{category}</span>
      </div>

      <div className="currenttask_progressbox">
        <div className="currenttask_progresshead">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="currenttask_progbar">
          <span
            className="currenttask_progfill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <button
        type="button"
        className="currenttask_focusbtn"
        onClick={onStartFocus}
      >
        <Play className="currenttask_focusicon" />
        Start Focus
      </button>
    </section>
  );
};

export default CurrentTaskCard;