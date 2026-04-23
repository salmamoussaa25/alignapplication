import React from 'react';
import './TimelineSection.css';

const TimelineSection = ({ items, onOpenPlanner }) => {
  return (
    <section className="timeline_wrap">
      <h3 className="timeline_sectiontitle">Today's Timeline</h3>
      <div className="timeline_list">
        {items.map((item) => (
          <article key={item.id} className="timeline_item">
            <div className="timeline_timecol">
              <p className={`timeline_timetext timeline_timetext_${item.tone}`}>{item.time}</p>
            </div>
            <div className={`timeline_card timeline_card_${item.tone}`}>
              <p className="timeline_cardtitle">{item.title}</p>
              <p className={`timeline_cardmeta timeline_cardmeta_${item.tone}`}>{item.meta}</p>
            </div>
          </article>
        ))}
      </div>
      <button
        type="button"
        className="timeline_cta"
        onClick={onOpenPlanner}
      >
        Open full planner
      </button>
    </section>
  );
};

export default TimelineSection;