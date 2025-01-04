import React from 'react'
import '../styles/CalendarNav.scss'

interface CalendarNavProps {
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>
  selectedDate: Date
}

const CalendarNav: React.FC<CalendarNavProps> = ({ setSelectedDate, selectedDate }) => {
  return (
    <div className="calendar-nav-container">
      <h2 className="calendar-nav-title">
        {selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
      </h2>
      <div className="calendar-nav-buttons">
        <button
          onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)))}
          className="calendar-nav-button"
        >
          Previous
        </button>
        <button
          onClick={() => setSelectedDate(new Date())}
          className="calendar-nav-button"
        >
          Today
        </button>
        <button
          onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)))}
          className="calendar-nav-button"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default CalendarNav
