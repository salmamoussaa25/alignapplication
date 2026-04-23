import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatsGrid from '../components/StatsGrid';
import SeenBanner from '../components/SeenBanner';
import UrgencyBanner from '../components/UrgencyBanner';
import CurrentTaskCard from '../components/CurrentTaskCard';
import TimelineSection from '../components/TimelineSection';
import AISuggestionCard from '../components/AISuggestionCard';
import ConsistencyBanner from '../components/ConsistencyBanner';
import BalanceSection from '../components/BalanceSection';
import HabitsSection from '../components/HabitsSection';
import EnergyAccountabilityRow from '../components/EnergyAccountabilityRow';
import ProgressFooterCard from '../components/ProgressFooterCard';
import MobileBottomNav from '../components/MobileBottomNav';
import OverwhelmOverlay from '../components/OverwhelmOverlay';
import './HomeScreen.css';

/* ─── static data ─────────────────────────────────────── */
const homescreen_habits = [
  { id: 'habit_1', title: 'Morning routine', done: true },
  { id: 'habit_2', title: 'Study session',   done: false },
  { id: 'habit_3', title: 'Exercise',         done: false },
];

const homescreen_timeline = [
  { id: 'slot_1', time: '2:00 PM', title: 'University lecture',      meta: '45 min • Study',  tone: 'mint' },
  { id: 'slot_2', time: '3:00 PM', title: 'Study session with group', meta: '30 min • Social', tone: 'lav'  },
  { id: 'slot_3', time: '4:00 PM', title: 'Break & stretch',          meta: '15 min • Health', tone: 'mint' },
];

const homescreen_balance = [
  { id: 'bal_1', title: 'Work',            time: '5.5 hrs', widthPercent: '75%', tone: 'lav'  },
  { id: 'bal_2', title: 'Well-being',      time: '1.5 hrs', widthPercent: '30%', tone: 'mint' },
  { id: 'bal_3', title: 'Family & Social', time: '1 hr',    widthPercent: '20%', tone: 'mint' },
];

const homescreen_current_task = {
  title:    'Review project proposal',
  badge:    'Daily Quest',
  priority: 'High',
  duration: '45 min',
  category: 'Work',
  progress: 35,
};

const homescreen_insights = [
  'You have 4 tasks after 6pm. Let me help lighten your evening?',
  'You showed up 3 times this week and your momentum is building.',
];
/* ───────────────────────────────────────────────────────── */

const HomeScreen = () => {
  const navigate = useNavigate();
  const [current_time, set_current_time] = useState('');
  const [current_date, set_current_date] = useState('');
  const [active_insight, set_active_insight] = useState(0);
  const [is_overwhelm_open, set_is_overwhelm_open] = useState(false);

  /* clock */
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      set_current_time(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));
      set_current_date(now.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }));
    };
    tick();
    const timer_id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(timer_id);
  }, []);

  /* rotate AI insight */
  useEffect(() => {
    const rotate_id = window.setInterval(() => {
      set_active_insight((prev) => (prev === 0 ? 1 : 0));
    }, 5_000);
    return () => window.clearInterval(rotate_id);
  }, []);

  const handle_navigate = (screen) => {
    const routes = { home: '/', plan: '/planner', focus: '/focus', habits: '/habits', profile: '/profile' };
    navigate(routes[screen] ?? '/');
  };

  return (
    <section className="homescreen_wrap">
      <div className="homescreen_scroll">

        {/* ── Header ── */}
        <header className="homescreen_head">
          <div className="homescreen_headcopy">
            <h1 className="homescreen_title">Good afternoon</h1>
            <p className="homescreen_sub">{current_date} • {current_time}</p>
          </div>
          <button
            type="button"
            className="homescreen_buddypill"
            onClick={() => navigate('/habits')}
          >
            <span className="homescreen_buddydot" />
            <span className="homescreen_buddyinitial">S</span>
            Active
          </button>
        </header>

        {/* ── Stats ── */}
        <StatsGrid
          tasks={4}
          tasksTotal={7}
          focus={2.5}
          balanceLabel="Balanced"
        />

        {/* ── Seen banner ── */}
        <SeenBanner text="You showed up 3 times this week" />

        {/* ── Urgency banner ── */}
        <UrgencyBanner onActivate={() => set_is_overwhelm_open(true)} />

        {/* ── Current task ── */}
        <CurrentTaskCard
          task={homescreen_current_task}
          onStartFocus={() => navigate('/focus')}
        />

        {/* ── Timeline ── */}
        <TimelineSection
          items={homescreen_timeline}
          onOpenPlanner={() => navigate('/planner')}
        />

        {/* ── AI Suggestion ── */}
        <AISuggestionCard
          insight={homescreen_insights[active_insight]}
          onAdjust={() => navigate('/planner')}
          onMoveTasks={() => {}}
          onLighten={() => {}}
          onDismiss={() => {}}
        />

        {/* ── Consistency ── */}
        <ConsistencyBanner
          title="You're building consistency with your morning routine"
          subtitle="Every step counts"
        />

        {/* ── Balance ── */}
        <BalanceSection
          items={homescreen_balance}
          tip="Consider adding more well-being time to restore balance"
        />

        {/* ── Habits ── */}
        <HabitsSection
          habits={homescreen_habits}
          onViewAll={() => navigate('/habits')}
        />

        {/* ── Energy + Accountability ── */}
        <EnergyAccountabilityRow
          energyLevel={3}
          energyLabel="Moderate"
          onAccountabilityClick={() => navigate('/habits')}
        />

        {/* ── Progress footer ── */}
        <ProgressFooterCard
          title="You're making progress today"
          text="4 tasks completed • 2.5 hours of focused work"
        />

        {/* bottom padding so content clears the nav */}
        <div className="homescreen_navspacer" />
      </div>

      <MobileBottomNav currentScreen="home" onNavigate={handle_navigate} />

      {/* ── Overwhelm Overlay ── */}
      <OverwhelmOverlay 
        isOpen={is_overwhelm_open} 
        onClose={() => set_is_overwhelm_open(false)} 
      />
    </section>
  );
};

export default HomeScreen;