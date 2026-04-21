import React from 'react';
import { AlertTriangle, Plus, Wand2 } from 'lucide-react';
import MobileBottomNav from '../components/MobileBottomNav';
import './Planner.css';

const planner_items = [
  {
    id: 'planner_1',
    time: '8:00',
    title: 'Morning routine',
    duration: '45 min',
    tagA: 'Health',
    tagB: 'Habit',
    tone: 'mint'
  },
  {
    id: 'planner_2',
    time: '9:00',
    title: 'University assignment',
    duration: '2 hr',
    tagA: 'Study',
    tagB: 'Sarah co-working',
    detailA: 'Research paper outline',
    detailB: 'Draft introduction',
    tone: 'lav'
  },
  {
    id: 'planner_3',
    time: '11:00',
    title: 'Short break',
    duration: '15 min',
    tagA: 'Break',
    tone: 'soft'
  },
  {
    id: 'planner_4',
    time: '12:00',
    title: 'Study group session',
    duration: '30 min',
    tagA: 'Social',
    tone: 'lav'
  },
  {
    id: 'planner_5',
    time: '2:00',
    title: 'Lunch break',
    duration: '1 hr',
    tagA: 'Well-being',
    tone: 'mint'
  },
  {
    id: 'planner_6',
    time: '6:00',
    title: 'Family gathering',
    duration: '1.5 hr',
    tagA: 'Family • Important',
    warn: 'Scheduled during low energy time',
    tone: 'warn'
  }
];

const Planner = () => {
  return (
    <section className="plannerpg_wrap">
      <div className="plannerpg_scroll">
        <header className="plannerpg_head">
          <div>
            <h1 className="plannerpg_title">Planner</h1>
            <p className="plannerpg_sub">Thursday, Apr 16</p>
          </div>
          <button type="button" className="plannerpg_chipbtn">
            <Wand2 className="plannerpg_chipicon" />
            Simplify
          </button>
        </header>

        <section className="plannerpg_warncard">
          <div className="plannerpg_warnhead">
            <AlertTriangle className="plannerpg_warnicon" />
            <div>
              <p className="plannerpg_warntitle">Schedule feels heavy</p>
              <p className="plannerpg_warntext">You have 8 hours planned today. Let me help lighten this?</p>
            </div>
          </div>
          <button type="button" className="plannerpg_warnbtn">Let me fix this for you</button>
        </section>

        <section className="plannerpg_timeline">
          <span className="plannerpg_axis" />
          {planner_items.map((item) => (
            <article key={item.id} className="plannerpg_row">
              <div className="plannerpg_timebox">
                <p className={`plannerpg_timetext plannerpg_timetext_${item.tone}`}>{item.time}</p>
              </div>
              <div className={`plannerpg_card plannerpg_card_${item.tone}`}>
                <span className={`plannerpg_dot plannerpg_dot_${item.tone}`} />
                <div className="plannerpg_cardtop">
                  <h3 className="plannerpg_cardtitle">{item.title}</h3>
                  <p className={`plannerpg_cardtime plannerpg_cardtime_${item.tone}`}>{item.duration}</p>
                </div>
                <div className="plannerpg_tagrow">
                  <span className={`plannerpg_tag plannerpg_tag_${item.tone}`}>{item.tagA}</span>
                  {item.tagB ? <span className="plannerpg_tag plannerpg_tag_sub">{item.tagB}</span> : null}
                </div>
                {item.detailA ? (
                  <div className="plannerpg_detailbox">
                    <p>{item.detailA}</p>
                    <p>{item.detailB}</p>
                  </div>
                ) : null}
                {item.warn ? <p className="plannerpg_warnline">{item.warn}</p> : null}
              </div>
            </article>
          ))}

          <button type="button" className="plannerpg_addbtn">
            <Plus className="plannerpg_addicon" />
            Add time block
          </button>
        </section>
      </div>

      <MobileBottomNav currentScreen="planner" />
    </section>
  );
};

export default Planner;
