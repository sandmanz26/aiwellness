import { useEffect, useRef, useState } from 'react'
import ChatHeader from '../components/ChatHeader'
import MessageBubble from '../components/MessageBubble'
import TypingIndicator from '../components/TypingIndicator'
import RecommendationDeck from '../components/RecommendationDeck'
import QuickActions from '../components/QuickActions'
import ChatComposer from '../components/ChatComposer'
import Toast from '../components/Toast'
import { aiReplies, quickActions, recommendationDeck } from '../data/mockData'
import './ChatScreen.css'

let msgId = 100

export default function ChatScreen({ messages, setMessages, coins, setCoins, onMenu, onProgress, onSettings }) {
  const [deckCards, setDeckCards] = useState(recommendationDeck)
  const [deckExpanded, setDeckExpanded] = useState(false)
  const [typing, setTyping] = useState(false)
  const [toast, setToast] = useState(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing, deckExpanded, deckCards.length])

  function pushUserMessage(text) {
    setMessages((prev) => [...prev, { id: `u${msgId++}`, role: 'user', text }])
    setTyping(true)
    const reply = aiReplies[Math.floor(Math.random() * aiReplies.length)]
    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [...prev, { id: `a${msgId++}`, role: 'ai', text: reply }])
    }, 1100)
  }

  function handleQuickAction(action) {
    if (action.id === 'qa1') {
      if (!deckExpanded) {
        setDeckExpanded(true)
        return
      }
      applyChanges()
      return
    }
    pushUserMessage(action.label)
  }

  function applyChanges() {
    if (deckCards.length === 0) return
    const earned = deckCards.length * 5
    setCoins((c) => c + earned)
    setDeckCards([])
    setDeckExpanded(false)
    setToast(`Applied ${deckCards.length} change${deckCards.length > 1 ? 's' : ''} · +${earned} coins`)
  }

  function removeCard(id) {
    setDeckCards((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <div className="chat-screen">
      <ChatHeader coins={coins} onMenu={onMenu} onProgress={onProgress} onSettings={onSettings} />
      <div className="chat-scroll" ref={scrollRef}>
        {messages.map((m) =>
          m.deck ? (
            <div key={m.id}>
              <MessageBubble role={m.role} text={m.text} />
              <RecommendationDeck
                cards={deckCards}
                expanded={deckExpanded}
                onToggle={() => setDeckExpanded((v) => !v)}
                onRemove={removeCard}
                onApply={applyChanges}
              />
            </div>
          ) : (
            <MessageBubble key={m.id} role={m.role} text={m.text} />
          )
        )}
        {typing && <TypingIndicator />}
        <div className="chat-scroll-spacer" />
      </div>
      <div className="chat-footer">
        <QuickActions actions={quickActions} onSelect={handleQuickAction} />
        <div className="chat-composer-wrap">
          <ChatComposer onSend={pushUserMessage} />
        </div>
      </div>
      <Toast message={toast} onDone={() => setToast(null)} />
    </div>
  )
}
