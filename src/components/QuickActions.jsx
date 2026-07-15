import { SparkleIcon } from './icons'
import './QuickActions.css'

export default function QuickActions({ actions, onSelect }) {
  return (
    <div className="quick-actions">
      {actions.map((a) => (
        <button key={a.id} type="button" className="quick-chip" onClick={() => onSelect(a)}>
          <SparkleIcon />
          {a.label}
          {a.count ? ` (${a.count})` : ''}
        </button>
      ))}
    </div>
  )
}
