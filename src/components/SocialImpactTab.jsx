import { ChevronRight, CoinIcon } from './icons'
import { communityActivity, lineageTree, socialStats } from '../data/mockData'
import './SocialImpactTab.css'

export default function SocialImpactTab() {
  return (
    <div className="social-tab">
      <div className="stats-grid">
        <div className="stat-card stat-card--earnings">
          <span className="stat-icon">
            <CoinIcon width={26} height={26} />
          </span>
          <p className="stat-value">{socialStats.earnings.toLocaleString()}</p>
          <p className="stat-label">Earnings</p>
        </div>
        <div className="stat-card-stack">
          <div className="stat-card stat-card--sm">
            <p className="stat-value stat-value--sm">{socialStats.timesPlayed.toLocaleString()}</p>
            <p className="stat-label">Times played</p>
          </div>
          <div className="stat-card stat-card--sm">
            <p className="stat-value stat-value--sm">{socialStats.recreated}</p>
            <p className="stat-label">Recreated</p>
          </div>
        </div>
      </div>

      <div className="panel-card">
        <div className="panel-head">
          <p className="panel-title">Community</p>
        </div>
        <div className="activity-list">
          {communityActivity.map((c) => (
            <div key={c.id} className="activity-row">
              <div className="activity-text">
                <span className="activity-name">{c.name}</span> {c.action}
                <div className="activity-when">{c.when}</div>
              </div>
              <span className="activity-points">
                <CoinIcon width={12} height={12} /> +{c.points}
              </span>
            </div>
          ))}
        </div>
        <button type="button" className="see-all">
          See all
        </button>
      </div>

      <div className="panel-card">
        <div className="panel-head">
          <p className="panel-title">Lineage tree</p>
        </div>
        <div className="lineage-list">
          {lineageTree.map((l) => (
            <button key={l.id} type="button" className="lineage-row">
              <span className="lineage-avatar">{l.creator[0]}</span>
              <span className="lineage-meta">
                <span className="lineage-title">{l.title}</span>
                <span className="lineage-sub">
                  Created by {l.creator}, {l.date}
                </span>
              </span>
              <ChevronRight />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
