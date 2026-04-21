import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNav.css';

const BottomNav = ({ text }) => {
  const links = [
    { to: '/home', label: text.navHome },
    { to: '/create', label: text.navCreate },
    { to: '/profile', label: text.navProfile }
  ];

  return (
    <nav className="bottomnav_bar">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `bottomnav_link ${isActive ? 'bottomnav_on' : ''}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
