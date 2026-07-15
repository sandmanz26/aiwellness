import { useState } from 'react'
import { motion } from 'framer-motion'
import { BackIcon, LayersIcon, MoreIcon, PeopleIcon } from '../components/icons'
import ChaptersTab from '../components/ChaptersTab'
import SocialImpactTab from '../components/SocialImpactTab'
import './ProgressScreen.css'

export default function ProgressScreen({ onBack }) {
  const [tab, setTab] = useState('chapters')

  return (
    <div className="progress-screen">
      <header className="progress-header">
        <button type="button" className="icon-btn" onClick={onBack} aria-label="Back">
          <BackIcon />
        </button>
        <h1>Progress</h1>
        <button type="button" className="icon-btn" aria-label="More options">
          <MoreIcon />
        </button>
      </header>

      <div className="progress-tabs">
        <button
          type="button"
          className={`progress-tab ${tab === 'chapters' ? 'is-active' : ''}`}
          onClick={() => setTab('chapters')}
        >
          <LayersIcon /> Chapters
        </button>
        <button
          type="button"
          className={`progress-tab ${tab === 'social' ? 'is-active' : ''}`}
          onClick={() => setTab('social')}
        >
          <PeopleIcon /> Social impact
        </button>
      </div>

      <motion.div
        key={tab}
        className="progress-body"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22 }}
      >
        {tab === 'chapters' ? <ChaptersTab /> : <SocialImpactTab />}
      </motion.div>
    </div>
  )
}
