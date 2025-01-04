import React from 'react'
import '../styles/EventForm.scss'

interface EventFormProps {
  newEvent: NewEvent
  setNewEvent: React.Dispatch<React.SetStateAction<NewEvent>>
  addEvent: () => void
  setShowEventForm: React.Dispatch<React.SetStateAction<boolean>>
}

const EventForm: React.FC<EventFormProps> = ({ newEvent, setNewEvent, addEvent, setShowEventForm }) => {
  return (
    <div className="event-form-overlay">
      <div className="event-form-container">
        <h3 className="event-form-title">New Event</h3>
        <div className="event-form-fields">
          <div className="event-form-field">
            <label className="event-form-label">Title</label>
            <input
              type="text"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              className="event-form-input"
              placeholder="Event title"
            />
          </div>
          <div className="event-form-field">
            <label className="event-form-label">Time</label>
            <input
              type="time"
              value={newEvent.time}
              onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
              className="event-form-input"
            />
          </div>
          <div className="event-form-field">
            <label className="event-form-label">Description</label>
            <textarea
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              className="event-form-textarea"
              rows={3}
              placeholder="Event description"
            />
          </div>
          <div className="event-form-buttons">
            <button
              onClick={() => setShowEventForm(false)}
              className="event-form-cancel-btn"
            >
              Cancel
            </button>
            <button
              onClick={addEvent}
              className="event-form-add-btn"
            >
              Add Event
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventForm
