import React from 'react';
import { AlertCircle, Heart, TrendingUp } from 'lucide-react';
import MobileBottomNav from '../components/MobileBottomNav';
import './ProfileScreen.css';

const time_rows = [
  { id: 'time_1', label: 'Study', value: '5.5h (40%)', width: 'profilescreen_fill_40', tone: 'lav' },
  { id: 'time_2', label: 'Well-being', value: '3h (22%)', width: 'profilescreen_fill_22', tone: 'mint' },
  { id: 'time_3', label: 'Social', value: '2.5h (18%)', width: 'profilescreen_fill_18', tone: 'mint' },
  { id: 'time_4', label: 'Health', value: '2h (15%)', width: 'profilescreen_fill_15', tone: 'mint' },
  { id: 'time_5', label: 'Other', value: '0.75h (5%)', width: 'profilescreen_fill_5', tone: 'soft' }
];

const ai_cards = [
  {
    id: 'ai_1',
    tone: 'mint',
    title: 'Your focus improves after breaks',
    text: 'Sessions following 15+ min breaks show 35% better completion rates'
  },
  {
    id: 'ai_2',
    tone: 'warn',
    title: 'You are overloading evenings',
    text: '65% of tasks after 6pm remain incomplete. Consider morning scheduling.'
  },
  {
    id: 'ai_3',
    tone: 'lav',
    title: 'Thursday is your most productive day',
    text: 'Schedule important work on Thursdays for best results'
  }
];

const ProfileScreen = () => {
  return (
    <section className="profilescreen_wrap">
      <div className="profilescreen_scroll">
        <header className="profilescreen_head">
          <h1 className="profilescreen_title">Personal Progress</h1>
          <p className="profilescreen_sub">This week's insights</p>
        </header>

        <section className="profilescreen_showupcard">
          <div className="profilescreen_showuphead">
            <div className="profilescreen_showupiconbox">
              <Heart className="profilescreen_showupicon" />
            </div>
            <div>
              <p className="profilescreen_showuptitle">You showed up 5 times this week</p>
              <p className="profilescreen_showuptext">You made progress, even on busy days</p>
            </div>
          </div>
          <div className="profilescreen_dayrow">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((item, index) => (
              <span
                key={item + index}
                className={`profilescreen_daychip ${index < 5 ? 'profilescreen_daychip_on' : ''}`}
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="profilescreen_card">
          <p className="profilescreen_cardtitle">Where Your Time Goes</p>
          <p className="profilescreen_cardtext">Most of your time this week went to study tasks (40%)</p>
          <div className="profilescreen_microbars">
            <div className="profilescreen_microline">
              <span>Study</span>
              <span>3h</span>
            </div>
            <div className="profilescreen_microline">
              <span>Health</span>
              <span>1h</span>
            </div>
            <div className="profilescreen_microline">
              <span>Work</span>
              <span>0.8h</span>
            </div>
          </div>
        </section>

        <section className="profilescreen_section">
          <h2 className="profilescreen_sectiontitle">Patterns & Insights</h2>
          <div className="profilescreen_notebox">
            <TrendingUp className="profilescreen_noteicon" />
            <p>You showed up 3 times this week</p>
          </div>
          <div className="profilescreen_notebox">
            <Heart className="profilescreen_noteicon" />
            <p>Great job on completing your morning routine</p>
          </div>
        </section>

        <section className="profilescreen_section">
          <h2 className="profilescreen_sectiontitle">Time Distribution</h2>
          <article className="profilescreen_distributioncard">
            {time_rows.map((item) => (
              <div key={item.id} className="profilescreen_distributionrow">
                <div className="profilescreen_distributiontop">
                  <p className={`profilescreen_distributionlabel profilescreen_distributionlabel_${item.tone}`}>{item.label}</p>
                  <p className={`profilescreen_distributionvalue profilescreen_distributionvalue_${item.tone}`}>{item.value}</p>
                </div>
                <div className="profilescreen_progbar">
                  <span className={`profilescreen_progfill ${item.width} profilescreen_progfill_${item.tone}`} />
                </div>
              </div>
            ))}
            <p className="profilescreen_distributionnote">You spend most time on study and academic work</p>
          </article>
        </section>

        <section className="profilescreen_section">
          <h2 className="profilescreen_sectiontitle">Weekly Trend</h2>
          <article className="profilescreen_trendcard">
            <div className="profilescreen_barrow">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((item, index) => (
                <div key={item + index} className="profilescreen_barcol">
                  <span className={`profilescreen_bar profilescreen_bar_${index + 1}`} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="profilescreen_trendfoot">
              <div>
                <p className="profilescreen_trendlabel">Focus hrs</p>
                <p className="profilescreen_trendvalue">28.5h</p>
              </div>
              <div>
                <p className="profilescreen_trendlabel">Avg balance</p>
                <p className="profilescreen_trendvalue profilescreen_trendvalue_mint">70%</p>
              </div>
            </div>
          </article>
        </section>

        <section className="profilescreen_section">
          <h2 className="profilescreen_sectiontitle">AI Insights</h2>
          <div className="profilescreen_aigrid">
            {ai_cards.map((item) => (
              <article key={item.id} className={`profilescreen_aicard profilescreen_aicard_${item.tone}`}>
                <div className={`profilescreen_aiiconbox profilescreen_aiiconbox_${item.tone}`}>
                  <AlertCircle className={`profilescreen_aiicon profilescreen_aiicon_${item.tone}`} />
                </div>
                <div>
                  <p className="profilescreen_aititle">{item.title}</p>
                  <p className={`profilescreen_aitext profilescreen_aitext_${item.tone}`}>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="profilescreen_summary">
          <p className="profilescreen_summarytitle">This week's summary</p>
          <p className="profilescreen_summarytext">
            You completed 18 of 22 tasks, maintained 3 habits, and spent 28.5 hours in focused work. Your balance score is improving.
          </p>
        </section>
      </div>

      <MobileBottomNav currentScreen="profile" />
    </section>
  );
};

export default ProfileScreen;
