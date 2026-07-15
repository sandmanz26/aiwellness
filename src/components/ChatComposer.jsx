import { useState } from 'react'
import { MicIcon, PlusIcon, SendIcon } from './icons'
import './ChatComposer.css'

export default function ChatComposer({ onSend }) {
  const [value, setValue] = useState('')
  const [listening, setListening] = useState(false)

  function submit(e) {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    onSend(trimmed)
    setValue('')
  }

  return (
    <form className="composer" onSubmit={submit}>
      <button type="button" className="composer-icon" aria-label="Add attachment">
        <PlusIcon />
      </button>
      <input
        className="composer-input"
        placeholder="Type here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="button"
        className={`composer-icon ${listening ? 'composer-icon--active' : ''}`}
        aria-label="Voice input"
        onClick={() => setListening((v) => !v)}
      >
        <MicIcon />
      </button>
      <button type="submit" className="composer-send" aria-label="Send message" disabled={!value.trim()}>
        <SendIcon />
      </button>
    </form>
  )
}
