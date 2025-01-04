import React, { useState, useEffect } from 'react'
import Header from './cmps/Header.tsx'
import CalendarNav from './cmps/CalendarNav.tsx'
import CalendarGrid from './cmps/CalendarGrid.tsx'
import EventForm from './cmps/EventForm.tsx'
import EventList from './cmps/EventList.tsx'
import './styles/CalendarApp.scss'
import Weather from './utils/weather.tsx'

const CalendarApp: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [events, setEvents] = useState<Event[]>(() => {
    // Load events from localStorage on component mount
    const storedEvents = localStorage.getItem('events')
    return storedEvents ? JSON.parse(storedEvents) : []
  })
  const [showEventForm, setShowEventForm] = useState<boolean>(false)
  const [newEvent, setNewEvent] = useState<NewEvent>({ title: '', time: '', description: '' })

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events))
  }, [events])

  const toggleDarkMode = () => setIsDark(!isDark)

  const addEvent = () => {
    const newEventWithId = { ...newEvent, id: Date.now(), date: selectedDate.toISOString() }
    setEvents([...events, newEventWithId])
    setNewEvent({ title: '', time: '', description: '' }) 
    setShowEventForm(false)
  }

  const deleteEvent = (id: number) => {
    const updatedEvents = events.filter(event => event.id !== id)
    setEvents(updatedEvents)
  }

  return (
    <div className={`calendar-app ${isDark ? 'dark' : 'light'}`}>
      <div className="calendar-container">
        <Header isDark={isDark} toggleDarkMode={toggleDarkMode} setShowEventForm={setShowEventForm} />
        <CalendarNav selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        <div className="calendar-main">
          <div className="calendar-grid-container">
            <CalendarGrid
              selectedDate={selectedDate}
              events={events}
              setSelectedDate={setSelectedDate}
              setShowEventForm={setShowEventForm}
            />
          </div>
          <div className="event-list-container">
            <EventList events={events} deleteEvent={deleteEvent} />
          </div>
        </div>
      </div>
      {showEventForm && (
        <EventForm
          newEvent={newEvent}
          setNewEvent={setNewEvent}
          addEvent={addEvent}
          setShowEventForm={setShowEventForm}
        />
      )}
{/* <Weather  /> */}
    </div>
  )
}

export default CalendarApp
