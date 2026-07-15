const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  )
}

export function CoinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <path
        d="M12 2 21 7v10l-9 5-9-5V7l9-5Z"
        fill="url(#coinGrad)"
        stroke="#C97A1A"
        strokeWidth="1"
      />
      <defs>
        <linearGradient id="coinGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FBD873" />
          <stop offset="1" stopColor="#E8871E" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function TrendingIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <path d="M6 17 11 12 14.5 15.5 19 9" />
      <path d="M13 9h6v6" />
    </svg>
  )
}

export function SlidersIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="4" />
      <path d="M8 8v3M8 14v2M12 8v2M12 13v3M16 8v5M16 16v0" />
    </svg>
  )
}

export function BackIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...props}>
      <path d="M15 6l-6 6 6 6" />
    </svg>
  )
}

export function MoreIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
      <circle cx="12" cy="5" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="12" cy="19" r="1.6" />
    </svg>
  )
}

export function ChevronDown(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export function PlusIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function MinusIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" {...base} {...props}>
      <path d="M5 12h14" />
    </svg>
  )
}

export function MicIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3" />
    </svg>
  )
}

export function SendIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M12 4 5 20l7-4 7 4-7-16Z" />
    </svg>
  )
}

export function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" {...props}>
      <path d="M7 5v14l12-7L7 5Z" />
    </svg>
  )
}

export function PauseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" {...props}>
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  )
}

export function SparkleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" {...props}>
      <path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6L12 2Z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
    </svg>
  )
}

export function ExploreIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" {...base} {...props}>
      <path d="M6 4h9a3 3 0 0 1 3 3v13H9a3 3 0 0 1-3-3V4Z" />
      <path d="M6 17h12" />
    </svg>
  )
}

export function SessionsIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" {...base} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="4" />
      <path d="M10 9.5v5l4-2.5-4-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function WellnessIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" {...base} {...props}>
      <path d="M4 12c0-4 3-8 8-9 0 6-2 9-8 9Z" />
      <path d="M4 12c3 0 8 1 8 8" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function ChevronRight(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  )
}

export function PeopleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M15.5 14.2c2.6.3 4.5 2.6 4.5 5.8" />
    </svg>
  )
}

export function LayersIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" {...base} {...props}>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  )
}

export function TargetIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <path d="M17.5 6.5 20 4" />
      <path d="M17 4h3v3" />
    </svg>
  )
}

export function BoltIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  )
}
