import React from 'react';
import { Heart } from 'lucide-react';
import './SeenBanner.css';

const SeenBanner = ({ text }) => {
  return (
    <section className="seenbanner_wrap">
      <div className="seenbanner_iconbox">
        <Heart className="seenbanner_icon" />
      </div>
      <p className="seenbanner_text">{text}</p>
    </section>
  );
};

export default SeenBanner;