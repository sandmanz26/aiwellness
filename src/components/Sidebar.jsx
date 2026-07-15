import DrawerNav from './DrawerNav'
import './Sidebar.css'

export default function Sidebar({ onNewSession }) {
  return (
    <aside className="sidebar">
      <DrawerNav onNewSession={onNewSession} />
    </aside>
  )
}
