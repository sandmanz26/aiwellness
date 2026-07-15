import { CoinIcon, MenuIcon, SlidersIcon, TrendingIcon } from './icons'
import './ChatHeader.css'

export default function ChatHeader({ coins, onMenu, onProgress, onSettings }) {
  return (
    <header className="chat-header">
      <button type="button" className="icon-btn" onClick={onMenu} aria-label="Open menu">
        <MenuIcon />
      </button>
      <div className="header-actions">
        <div className="coin-pill">
          <CoinIcon />
          <span>{coins.toLocaleString()}</span>
        </div>
        <button type="button" className="icon-btn round" onClick={onProgress} aria-label="View progress">
          <TrendingIcon />
        </button>
        <button type="button" className="icon-btn round" onClick={onSettings} aria-label="Session settings">
          <SlidersIcon />
        </button>
      </div>
    </header>
  )
}
