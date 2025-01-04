import React from 'react'
import '../styles/CalendarGrid.scss'
import Weather from '../utils/weather.tsx'

interface Event {
  date: string
  time: string
  title: string
}

interface CalendarGridProps {
  selectedDate: Date
  events: Event[]
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>
  setShowEventForm: React.Dispatch<React.SetStateAction<boolean>>
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
  selectedDate,
  events,
  setSelectedDate,
  setShowEventForm,
}) => {
  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate()

  const firstDayOfMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  ).getDay()

  const today = new Date()

  return (
    <div>
      <div className="calendar-grid-header">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="calendar-header-item">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-grid-body">
        {Array(firstDayOfMonth)
          .fill(null)
          .map((_, i) => (
            <div key={`empty-${i}`} className="calendar-grid-empty-cell"></div>
          ))}
        {Array(daysInMonth)
          .fill(null)
          .map((_, i) => {
            const day = i + 1
            const currentDate = new Date(
              selectedDate.getFullYear(),
              selectedDate.getMonth(),
              day
            )
            const dayEvents = events.filter((event) => {
              const eventDate = new Date(event.date)
              return eventDate.toDateString() === currentDate.toDateString()
            })

            const isToday = currentDate.toDateString() === today.toDateString()


            return (
              <div
                key={day}
                className="calendar-grid-day"
                onClick={() => {
                  setSelectedDate(currentDate)
                  setShowEventForm(true)
                }}
              >
                <div className="calendar-grid-day-number">{day}</div>
                {dayEvents.map((event, idx) => (
                  <div key={idx} className="calendar-grid-event">
                    {event.time} - {event.title}
                  </div>
                ))}
                {isToday && <Weather date={currentDate} />}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default CalendarGrid
