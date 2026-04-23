import React from 'react';
import { TrendingUp } from 'lucide-react';
import './ConsistencyBanner.css';

const ConsistencyBanner = ({ title, subtitle }) => {
  return (
    <section className="consistency_wrap">
      <div className="consistency_iconbox">
        <TrendingUp className="consistency_icon" />
      </div>
      <div>
        <p className="consistency_title">{title}</p>
        <p className="consistency_sub">{subtitle}</p>
      </div>
    </section>
  );
};

export default ConsistencyBanner;