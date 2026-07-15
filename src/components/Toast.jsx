import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './Toast.css'

export default function Toast({ message, onDone }) {
  useEffect(() => {
    if (!message) return
    const t = setTimeout(onDone, 2200)
    return () => clearTimeout(t)
  }, [message, onDone])

  return (
    <div className="toast-layer">
      <AnimatePresence>
        {message && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
