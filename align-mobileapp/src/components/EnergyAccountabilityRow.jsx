import React from 'react';
import { Users } from 'lucide-react';
import './EnergyAccountabilityRow.css';

const EnergyAccountabilityRow = ({ energyLevel, energyLabel, onAccountabilityClick }) => {
  const totalBars = 5;
  return (
    <section className="energyrow_wrap">
      <article className="energyrow_energycard">
        <p className="energyrow_energylabel">Energy Level</p>
        <div className="energyrow_bars">
          {Array.from({ length: totalBars }).map((_, i) => (
            <span
              key={i}
              className={`energyrow_bar ${i < energyLevel ? 'energyrow_bar_on' : ''}`}
            />
          ))}
        </div>
        <p className="energyrow_energytext">{energyLabel}</p>
      </article>

      <button
        type="button"
        className="energyrow_accountcard"
        onClick={onAccountabilityClick}
      >
        <Users className="energyrow_accounticon" />
        <p className="energyrow_accounttitle">Accountability</p>
        <p className="energyrow_accountsub">Partner online</p>
      </button>
    </section>
  );
};

export default EnergyAccountabilityRow;