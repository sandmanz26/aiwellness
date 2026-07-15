import './MessageBubble.css'

function renderText(text) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
  )
}

export default function MessageBubble({ role, text }) {
  const lines = text.split('\n\n')

  if (role === 'user') {
    return (
      <div className="msg-row msg-row--user">
        <div className="bubble bubble--user">{renderText(text)}</div>
      </div>
    )
  }

  return (
    <div className="msg-row msg-row--ai">
      <div className="msg-ai">
        {lines.map((line, i) => (
          <p key={i}>{renderText(line)}</p>
        ))}
      </div>
    </div>
  )
}
