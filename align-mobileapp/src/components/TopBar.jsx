import React from 'react';
import './TopBar.css';
import alignlogo from '../assets/alignlogo.png';

const TopBar = ({ title, subtitle, rightNode }) => {
  return (
    <header className="topbar_wrap">
      <div className="topbar_brand">
        <img src={alignlogo} alt="Align logo" className="topbar_logo" />
        <div>
          <h1 className="topbar_title">{title}</h1>
          {subtitle ? <p className="topbar_sub">{subtitle}</p> : null}
        </div>
      </div>
      {rightNode ? <div className="topbar_side">{rightNode}</div> : null}
    </header>
  );
};

export default TopBar;
