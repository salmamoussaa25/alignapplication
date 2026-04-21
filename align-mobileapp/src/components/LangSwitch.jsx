import React from 'react';
import './LangSwitch.css';

const LangSwitch = ({ lang, setLang, text }) => {
  return (
    <div className="langswitch_wrap" aria-label={text.languageLabel}>
      <button
        type="button"
        className={`langswitch_btn ${lang === 'en' ? 'langswitch_on' : ''}`}
        onClick={() => setLang('en')}
      >
        {text.englishName}
      </button>
      <button
        type="button"
        className={`langswitch_btn ${lang === 'ar' ? 'langswitch_on' : ''}`}
        onClick={() => setLang('ar')}
      >
        {text.arabicName}
      </button>
    </div>
  );
};

export default LangSwitch;
