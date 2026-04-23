import React from 'react';
import { Sparkles } from 'lucide-react';
import './ProgressFooterCard.css';

const ProgressFooterCard = ({ title, text }) => {
  return (
    <section className="progressfooter_wrap">
      <div className="progressfooter_iconbox">
        <Sparkles className="progressfooter_icon" />
      </div>
      <div>
        <p className="progressfooter_title">{title}</p>
        <p className="progressfooter_text">{text}</p>
      </div>
    </section>
  );
};

export default ProgressFooterCard;