import React from 'react';
import './UrgencyBanner.css';

const UrgencyBanner = ({ onActivate }) => {
  return (
    <section className="urgencybanner_wrap" onClick={onActivate}>
      <div className="urgencybanner_iconbox">
        <span className="urgencybanner_barsicon">
          <span className="urgencybanner_bar" />
          <span className="urgencybanner_bar urgencybanner_bar_mid" />
          <span className="urgencybanner_bar urgencybanner_bar_tall" />
        </span>
      </div>
      <div>
        <p className="urgencybanner_title">Overwhelmed?</p>
        <p className="urgencybanner_sub">Turn on High Urgency Mode</p>
      </div>
    </section>
  );
};

export default UrgencyBanner;