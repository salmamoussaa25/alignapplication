import React from 'react';
import { Brain, Home, Target, TrendingUp, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './MobileBottomNav.css';

const navItems = [
  { id: 'home', label: 'Home', icon: Home, path: '/home' },
  { id: 'planner', label: 'Plan', icon: Brain, path: '/planner' },
  { id: 'focus', label: 'Focus', icon: Target, path: '/focus' },
  { id: 'habits', label: 'Habits', icon: Users, path: '/habits' },
  { id: 'profile', label: 'Profile', icon: TrendingUp, path: '/profile' }
];

const MobileBottomNav = ({ currentScreen }) => {
  const navigate = useNavigate();

  return (
    <nav className="mobilenav_wrap">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentScreen === item.id;

        return (
          <button
            type="button"
            key={item.id}
            className={`mobilenav_btn ${isActive ? 'mobilenav_btn_on' : ''}`}
            onClick={() => navigate(item.path)}
          >
            <Icon className="mobilenav_icon" />
            <span className="mobilenav_text">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default MobileBottomNav;
