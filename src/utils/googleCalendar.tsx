// src/utils/googleCalendar.ts

import { gapi } from 'gapi-script'


// Define a type for Google Calendar event structure
export interface CalendarEvent {
  title: string
  start: string
  end: string
  description?: string
}

// Initialize the Google API Client
export const initGoogleClient = () => {
  gapi.load('client:auth2', async () => {
    try {
      await gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })
      console.log('Google API Client initialized')
    } catch (error) {
      console.error('Error initializing Google API Client', error)
    }
  })
}

// Sign in with Google
export const signIn = async () => {
  try {
    const authInstance = gapi.auth2.getAuthInstance()
    await authInstance.signIn()
    console.log('Successfully signed in')
  } catch (error) {
    console.error('Error signing in', error)
  }
}

// Fetch Google Calendar Events
export const fetchEvents = async (): Promise<CalendarEvent[]> => {
  try {
    const response = await gapi.client.calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      maxResults: 10, // You can change this number as needed
      singleEvents: true,
      orderBy: 'startTime',
    })

    const events = response.result.items
    return events.map((event: any): CalendarEvent => ({
      title: event.summary,
      start: event.start.dateTime || event.start.date,
      end: event.end.dateTime || event.end.date,
      description: event.description || '',
    }))
  } catch (error) {
    console.error('Error fetching events', error)
    return []
  }
}
