import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ChatScreen from './screens/ChatScreen'
import ProgressScreen from './screens/ProgressScreen'
import SideDrawer from './components/SideDrawer'
import Sidebar from './components/Sidebar'
import SettingsSheet from './components/SettingsSheet'
import { initialMessages, user } from './data/mockData'
import './App.css'

export default function App() {
  const [screen, setScreen] = useState('chat')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [coins, setCoins] = useState(user.coins)

  function newSession() {
    setMessages(initialMessages)
    setScreen('chat')
  }

  return (
    <div className="app-shell">
      <Sidebar onNewSession={newSession} />
      <div className="app-frame">
        <AnimatePresence mode="wait" initial={false}>
          {screen === 'chat' ? (
            <motion.div
              key="chat"
              className="app-frame-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.16 }}
            >
              <ChatScreen
                messages={messages}
                setMessages={setMessages}
                coins={coins}
                setCoins={setCoins}
                onMenu={() => setDrawerOpen(true)}
                onProgress={() => setScreen('progress')}
                onSettings={() => setSettingsOpen(true)}
              />
            </motion.div>
          ) : (
            <motion.div
              key="progress"
              className="app-frame-page"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.2 }}
            >
              <ProgressScreen onBack={() => setScreen('chat')} />
            </motion.div>
          )}
        </AnimatePresence>

        <SideDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} onNewSession={newSession} />
        <SettingsSheet open={settingsOpen} onClose={() => setSettingsOpen(false)} />
      </div>
    </div>
  )
}
