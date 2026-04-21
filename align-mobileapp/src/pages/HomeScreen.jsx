import React, { useEffect, useState } from 'react';
import {
  Check,
  Lightbulb,
  Play,
  Sparkles,
  TrendingUp,
  Users
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MobileBottomNav from '../components/MobileBottomNav';
import './HomeScreen.css';

const homescreen_habits = [
  { id: 'habit_1', title: 'Morning routine', done: true },
  { id: 'habit_2', title: 'Study session', done: false },
  { id: 'habit_3', title: 'Exercise', done: false }
];

const homescreen_timeline = [
  { id: 'slot_1', time: '2:00 PM', title: 'University lecture', meta: '45 min • Study', tone: 'mint' },
  { id: 'slot_2', time: '3:00 PM', title: 'Study session with group', meta: '30 min • Social', tone: 'lav' },
  { id: 'slot_3', time: '4:00 PM', title: 'Break & stretch', meta: '15 min • Health', tone: 'mint' }
];

const homescreen_balance = [
  { id: 'bal_1', title: 'Work', time: '5.5 hrs', width: 'homescreen_fill_75', tone: 'lav' },
  { id: 'bal_2', title: 'Well-being', time: '1.5 hrs', width: 'homescreen_fill_30', tone: 'mint' },
  { id: 'bal_3', title: 'Family & Social', time: '1 hr', width: 'homescreen_fill_20', tone: 'mint' }
];

const HomeScreen = () => {
  const navigate = useNavigate();
  const [current_time, setCurrentTime] = useState('');
  const [current_date, setCurrentDate] = useState('');
  const [active_insight, setActiveInsight] = useState(0);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })
      );
      setCurrentDate(
        now.toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'short',
          day: 'numeric'
        })
      );
    };

    updateClock();
    const timer_id = window.setInterval(updateClock, 60000);
    return () => window.clearInterval(timer_id);
  }, []);

  useEffect(() => {
    const rotate_id = window.setInterval(() => {
      setActiveInsight((prev_state) => (prev_state === 0 ? 1 : 0));
    }, 5000);

    return () => window.clearInterval(rotate_id);
  }, []);

  const homescreen_insights = [
    'You have 4 tasks after 6pm. Let me help lighten your evening?',
    'You showed up 3 times this week and your momentum is building.'
  ];

  return (
    <section className="homescreen_wrap">
      <div className="homescreen_scroll">
        <header className="homescreen_head">
          <div className="homescreen_headcopy">
            <h1 className="homescreen_title">Good afternoon</h1>
            <p className="homescreen_sub">{current_date}, {current_time}</p>
          </div>
          <button
            type="button"
            className="homescreen_buddypill"
            onClick={() => navigate('/habits')}
          >
            <span className="homescreen_buddydot" />
            Sarah active
          </button>
        </header>

        <section className="homescreen_statsgrid">
          <article className="homescreen_statcard">
            <p className="homescreen_statlabel">Tasks</p>
            <p className="homescreen_statnum">4</p>
            <p className="homescreen_statmeta">of 7</p>
          </article>
          <article className="homescreen_statcard homescreen_statcard_lav">
            <p className="homescreen_statlabel homescreen_statlabel_lav">Focus</p>
            <p className="homescreen_statnum">2.5</p>
            <p className="homescreen_statmeta homescreen_statmeta_lav">hours</p>
          </article>
          <article className="homescreen_statcard">
            <p className="homescreen_statlabel">Balance</p>
            <div className="homescreen_balancetag">Balanced</div>
          </article>
        </section>

        <section className="homescreen_seenbox">
          <Check className="homescreen_seenicon" />
          <p className="homescreen_seentext">You showed up 3 times this week</p>
        </section>

        <section className="homescreen_taskcard">
          <div className="homescreen_tasktop">
            <div>
              <div className="homescreen_taskmeta">
                <p className="homescreen_tasklabel">Current Task</p>
                <span className="homescreen_taskbadge">Daily Quest</span>
              </div>
              <h2 className="homescreen_tasktitle">Review project proposal</h2>
            </div>
            <span className="homescreen_prioritytag">High</span>
          </div>

          <div className="homescreen_taskinfo">
            <div className="homescreen_dotline">
              <span className="homescreen_dot homescreen_dot_mint" />
              <p>45 min</p>
            </div>
            <div className="homescreen_dotline">
              <span className="homescreen_dot homescreen_dot_lav" />
              <p>Work</p>
            </div>
          </div>

          <div className="homescreen_progressbox">
            <div className="homescreen_progresshead">
              <p>Progress</p>
              <p>35%</p>
            </div>
            <div className="homescreen_progbar">
              <span className="homescreen_progfill homescreen_fill_35" />
            </div>
          </div>

          <button type="button" className="homescreen_focusbtn">
            <Play className="homescreen_focusicon" />
            Start Focus
          </button>
        </section>

        <section className="homescreen_suggestcard">
          <div className="homescreen_suggesthead">
            <div className="homescreen_suggesticonbox">
              <Sparkles className="homescreen_suggesticon" />
            </div>
            <p className="homescreen_suggestlabel">AI Suggestion</p>
          </div>
          <p className="homescreen_suggesttext">{homescreen_insights[active_insight]}</p>
          <button type="button" className="homescreen_suggestmainbtn" onClick={() => navigate('/planner')}>
            Help me adjust
          </button>
          <div className="homescreen_suggestgrid">
            <button type="button" className="homescreen_suggestsmallbtn">Move tasks</button>
            <button type="button" className="homescreen_suggestsmallbtn">Lighten schedule</button>
          </div>
          <button type="button" className="homescreen_suggestghostbtn">Not now</button>
        </section>

        <section className="homescreen_buddycard">
          <div className="homescreen_buddyavatar">
            <Users className="homescreen_buddyavataricon" />
            <span className="homescreen_buddyring" />
          </div>
          <div>
            <p className="homescreen_buddytitle">Your buddy is active now</p>
            <p className="homescreen_buddytext">Sarah is working on her goals too</p>
          </div>
        </section>

        <section className="homescreen_consistcard">
          <div className="homescreen_consisticonbox">
            <TrendingUp className="homescreen_consisticon" />
          </div>
          <div>
            <p className="homescreen_consisttitle">You're building consistency with your morning routine</p>
            <p className="homescreen_consisttext">Every step counts</p>
          </div>
        </section>

        <section className="homescreen_balancewrap">
          <h3 className="homescreen_sectiontitle">Today's Balance</h3>
          <article className="homescreen_balancecard">
            {homescreen_balance.map((item) => (
              <div key={item.id} className="homescreen_balancerow">
                <div className="homescreen_balancetop">
                  <p className={`homescreen_balancelabel homescreen_balancelabel_${item.tone}`}>{item.title}</p>
                  <p className={`homescreen_balancetime homescreen_balancetime_${item.tone}`}>{item.time}</p>
                </div>
                <div className="homescreen_progbar">
                  <span className={`homescreen_progfill ${item.width} homescreen_progfill_${item.tone}`} />
                </div>
              </div>
            ))}
            <div className="homescreen_balancenote">
              <Lightbulb className="homescreen_balancenoteicon" />
              <p>Consider adding more well-being time to restore balance</p>
            </div>
          </article>
        </section>

        <section className="homescreen_habitswrap">
          <div className="homescreen_sectionhead">
            <h3 className="homescreen_sectiontitle">Today's Habits</h3>
            <button type="button" className="homescreen_viewbtn" onClick={() => navigate('/habits')}>
              View all
            </button>
          </div>
          <div className="homescreen_habitrow">
            {homescreen_habits.map((item) => (
              <button
                type="button"
                key={item.id}
                className={`homescreen_habitcard ${item.done ? 'homescreen_habitcard_on' : ''}`}
              >
                <div className="homescreen_habitcheckrow">
                  <span className={`homescreen_habitcheck ${item.done ? 'homescreen_habitcheck_on' : ''}`}>
                    {item.done ? <Check className="homescreen_habitcheckicon" /> : null}
                  </span>
                </div>
                <p className="homescreen_habittitle">{item.title}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="homescreen_timelinewrap">
          <h3 className="homescreen_sectiontitle">Today's Timeline</h3>
          <div className="homescreen_timelinelist">
            {homescreen_timeline.map((item) => (
              <article key={item.id} className="homescreen_timelineitem">
                <div className="homescreen_timetime">
                  <p className={`homescreen_timetext homescreen_timetext_${item.tone}`}>{item.time}</p>
                </div>
                <div className={`homescreen_timecard homescreen_timecard_${item.tone}`}>
                  <p className="homescreen_timecardtitle">{item.title}</p>
                  <p className={`homescreen_timecardmeta homescreen_timecardmeta_${item.tone}`}>{item.meta}</p>
                </div>
              </article>
            ))}
          </div>
          <button
            type="button"
            className="homescreen_timelinecta"
            onClick={() => navigate('/planner')}
          >
            Open full planner
          </button>
        </section>

        <section className="homescreen_lowgrid">
          <article className="homescreen_energycard">
            <p className="homescreen_energylabel">Energy Level</p>
            <div className="homescreen_energybars">
              <span className="homescreen_energybar homescreen_energybar_on homescreen_energybar_a" />
              <span className="homescreen_energybar homescreen_energybar_on homescreen_energybar_b" />
              <span className="homescreen_energybar homescreen_energybar_on homescreen_energybar_c" />
              <span className="homescreen_energybar" />
              <span className="homescreen_energybar" />
            </div>
            <p className="homescreen_energytext">Moderate</p>
          </article>

          <button type="button" className="homescreen_accountcard" onClick={() => navigate('/habits')}>
            <Users className="homescreen_accounticon" />
            <p className="homescreen_accounttitle">Accountability</p>
            <p className="homescreen_accounttext">Partner online</p>
          </button>
        </section>

        <section className="homescreen_progresscard">
          <div className="homescreen_progressiconbox">
            <Sparkles className="homescreen_progressicon" />
          </div>
          <div>
            <p className="homescreen_progresstitle">You're making progress today</p>
            <p className="homescreen_progresstext">4 tasks completed • 2.5 hours of focused work</p>
          </div>
        </section>
      </div>

      <MobileBottomNav currentScreen="home" />
    </section>
  );
};

export default HomeScreen;
