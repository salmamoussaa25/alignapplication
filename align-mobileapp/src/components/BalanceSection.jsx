import React from 'react';
import { Lightbulb } from 'lucide-react';
import './BalanceSection.css';

const BalanceSection = ({ items, tip }) => {
  return (
    <section className="balancesection_wrap">
      <h3 className="balancesection_title">Today's Balance</h3>
      <article className="balancesection_card">
        {items.map((item) => (
          <div key={item.id} className="balancesection_row">
            <div className="balancesection_rowhead">
              <p className={`balancesection_label balancesection_label_${item.tone}`}>{item.title}</p>
              <p className={`balancesection_time balancesection_time_${item.tone}`}>{item.time}</p>
            </div>
            <div className="balancesection_progbar">
              <span
                className={`balancesection_progfill balancesection_progfill_${item.tone}`}
                style={{ width: item.widthPercent }}
              />
            </div>
          </div>
        ))}
        <div className="balancesection_note">
          <Lightbulb className="balancesection_noteicon" />
          <p>{tip}</p>
        </div>
      </article>
    </section>
  );
};

export default BalanceSection;