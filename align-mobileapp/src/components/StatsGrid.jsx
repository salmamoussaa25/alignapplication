import React from 'react';
import './StatsGrid.css';

const StatsGrid = ({ tasks, tasksTotal, focus, balanceLabel }) => {
  return (
    <section className="statsgrid_wrap">
      <article className="statsgrid_card">
        <p className="statsgrid_label">Tasks</p>
        <p className="statsgrid_num">{tasks}</p>
        <p className="statsgrid_meta">of {tasksTotal}</p>
      </article>
      <article className="statsgrid_card statsgrid_card_lav">
        <p className="statsgrid_label statsgrid_label_lav">Focus</p>
        <p className="statsgrid_num">{focus}</p>
        <p className="statsgrid_meta statsgrid_meta_lav">hours</p>
      </article>
      <article className="statsgrid_card">
        <p className="statsgrid_label">Balance</p>
        <div className="statsgrid_balancetag">
          <span className="statsgrid_balanceicon">⊕</span>
          {balanceLabel}
        </div>
      </article>
    </section>
  );
};

export default StatsGrid;