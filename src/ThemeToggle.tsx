import React from 'react'
import './styles/ThemeToggle.scss'

interface ThemeToggleProps {
  isDarkMode: boolean
  toggleTheme: () => void
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className="theme-toggle-btn">
      Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export default ThemeToggle
