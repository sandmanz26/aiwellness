import { motion, AnimatePresence } from 'framer-motion'
import DrawerNav from './DrawerNav'
import './SideDrawer.css'

export default function SideDrawer({ open, onClose, onNewSession }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="drawer-scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="drawer"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 340, damping: 34 }}
          >
            <DrawerNav
              onNewSession={() => {
                onNewSession()
                onClose()
              }}
            />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
