import React from 'react'
import '../styles/EventList.scss'

interface EventListProps {
  events: Event[]
  deleteEvent: (id: number) => void
}

const EventList: React.FC<EventListProps> = ({ events, deleteEvent }) => {
  return (
    <div className="event-list-container">
      <h3 className="event-list-title">Upcoming Events</h3>
      {events.length === 0 ? (
        <div className="event-list-no-events">
          No Event Found
        </div>
      ) : (
        <div className="event-list-items">
          {events
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            .map(event => (
              <div key={event.id} className="event-list-item">
                <div>
                  <div className="event-list-item-title">{event.title}</div>
                  <div className="event-list-item-time">{event.time}</div>
                  <div className="event-list-item-description">{event.description}</div>
                </div>
                <button
                  onClick={() => deleteEvent(event.id)}
                  className="event-list-item-delete-btn"
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default EventList
