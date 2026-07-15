import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CloseIcon } from './icons'
import './SettingsSheet.css'

const DEFAULT_TOGGLES = [
  { id: 'ambient', label: 'Background sound', desc: 'Layer ambient audio under sessions', on: true },
  { id: 'voice', label: 'Voice guidance', desc: 'Narrated cues during meditations', on: true },
  { id: 'reminders', label: 'Sleep reminders', desc: 'Nudge before your usual bedtime', on: false },
]

export default function SettingsSheet({ open, onClose }) {
  const [toggles, setToggles] = useState(DEFAULT_TOGGLES)

  function toggle(id) {
    setToggles((prev) => prev.map((t) => (t.id === id ? { ...t, on: !t.on } : t)))
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="sheet-scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="sheet"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 380, damping: 36 }}
          >
            <div className="sheet-handle" />
            <div className="sheet-head">
              <h2>Session settings</h2>
              <button type="button" className="icon-btn" onClick={onClose} aria-label="Close">
                <CloseIcon />
              </button>
            </div>
            <div className="sheet-list">
              {toggles.map((t) => (
                <div key={t.id} className="sheet-row">
                  <div>
                    <p className="sheet-row-label">{t.label}</p>
                    <p className="sheet-row-desc">{t.desc}</p>
                  </div>
                  <button
                    type="button"
                    className={`switch ${t.on ? 'switch--on' : ''}`}
                    onClick={() => toggle(t.id)}
                    aria-pressed={t.on}
                  >
                    <motion.span layout className="switch-knob" transition={{ type: 'spring', stiffness: 500, damping: 34 }} />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
