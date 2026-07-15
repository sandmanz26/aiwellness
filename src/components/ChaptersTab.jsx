import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, PauseIcon, PlayIcon, TargetIcon, TrendingIcon } from './icons'
import { versions } from '../data/mockData'
import './ChaptersTab.css'

export default function ChaptersTab() {
  const [openId, setOpenId] = useState('v1')
  const [playingId, setPlayingId] = useState(null)

  return (
    <div className="chapters-tab">
      <div className="objective-card">
        <span className="objective-icon">
          <TargetIcon />
        </span>
        <div>
          <p className="objective-label">Objective</p>
          <p className="objective-value">Improve my sleep.</p>
        </div>
      </div>

      <div className="versions-card">
        <p className="versions-title">Versions</p>
        {versions.map((v, i) => {
          const isOpen = openId === v.id
          const isPlaying = playingId === v.id
          return (
            <div key={v.id} className={`version-row ${i === versions.length - 1 ? 'no-border' : ''}`}>
              <button type="button" className="version-header" onClick={() => setOpenId(isOpen ? null : v.id)}>
                <span
                  className="version-art"
                  style={{ background: v.gradient }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setPlayingId(isPlaying ? null : v.id)
                  }}
                >
                  {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </span>
                <span className="version-meta">
                  <span className="version-title">{v.title}</span>
                  <span className="version-sub">
                    {v.author} · {v.duration}
                  </span>
                </span>
                <span className="version-delta">
                  <TrendingIcon width={12} height={12} /> {v.delta}%
                </span>
                <motion.span className="version-chevron" animate={{ rotate: isOpen ? 180 : 0 }}>
                  <ChevronDown />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="version-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.24 }}
                  >
                    <p className="version-subtitle">{v.subtitle}</p>
                    <p className="version-description">{v.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
