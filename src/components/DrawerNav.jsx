import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExploreIcon, SessionsIcon, WellnessIcon, PauseIcon, PlayIcon, PlusIcon } from './icons'
import { drawerNav, latestSessions, user } from '../data/mockData'

const NAV_ICON = {
  explore: ExploreIcon,
  sessions: SessionsIcon,
  wellness: WellnessIcon,
  profile: null,
}

export default function DrawerNav({ onNewSession }) {
  const [active, setActive] = useState('sessions')
  const [playingId, setPlayingId] = useState(null)

  return (
    <>
      <div className="drawer-brand">
        <span className="drawer-logo">a</span>
        aurelia
      </div>

      <nav className="drawer-nav">
        {drawerNav.map((item) => {
          const Icon = NAV_ICON[item.icon]
          return (
            <button
              key={item.id}
              type="button"
              className={`drawer-nav-item ${active === item.id ? 'is-active' : ''}`}
              onClick={() => setActive(item.id)}
            >
              {active === item.id && <span className="drawer-nav-dot" />}
              {Icon ? <Icon /> : <span className="drawer-avatar">{user.avatar}</span>}
              {item.label}
            </button>
          )
        })}
      </nav>

      <div className="drawer-latest">
        <p className="drawer-section-title">Latest</p>
        <div className="drawer-latest-list">
          {latestSessions.map((s) => {
            const isPlaying = playingId === s.id
            return (
              <button
                key={s.id}
                type="button"
                className="drawer-session"
                onClick={() => setPlayingId(isPlaying ? null : s.id)}
              >
                <span className="drawer-session-art" style={{ background: s.gradient }}>
                  {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </span>
                <span className="drawer-session-meta">
                  <span className="drawer-session-title">{s.title}</span>
                  <span className="drawer-session-author">{s.author}</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <button type="button" className="drawer-new" onClick={onNewSession}>
        <PlusIcon /> New session
      </button>

      <Link to="/brand-guideline" className="drawer-guideline-link">
        Brand guideline
      </Link>
    </>
  )
}
