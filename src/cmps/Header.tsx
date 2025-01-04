import React from 'react'
import '../styles/Header.scss'

interface HeaderProps {
  isDark: boolean
  toggleDarkMode: () => void
  setShowEventForm: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleDarkMode, setShowEventForm }) => {
  return (
    <div className={`header-container ${isDark ? 'dark' : 'light'}`}>
      <h1 className="header-title">Calendar</h1>
      <div className="header-actions">
        <button
          onClick={toggleDarkMode}
          className="dark-mode-toggle"
          aria-label="Toggle dark mode"
        >
          {isDark ? '🌙' : '☀️'}
        </button>
        <button
          onClick={() => setShowEventForm(true)}
          className="new-event-button"
        >
          New Event
        </button>
      </div>
    </div>
  )
}

export default Header
