// // import React, { useState } from 'react'
// // import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday } from 'date-fns'
// // import Task from './Task.tsx'
// // import TaskEditor from './TaskEditor.tsx'
// // import ThemeToggle from './ThemeToggle.tsx'
// // import './styles/App.scss'

// // type TaskMap = { [key: string]: { task: string; isDone: boolean } }

// // const App: React.FC = () => {
// //   const [tasks, setTasks] = useState<TaskMap>({})
// //   const [editingDate, setEditingDate] = useState<Date | null>(null)
// //   const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false)
// //   const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

// //   const today = new Date()
// //   const currentMonth = format(today, 'yyyy-MM')

// //   const startOfCurrentMonth = startOfMonth(today)
// //   const endOfCurrentMonth = endOfMonth(today)
// //   const daysInMonth = eachDayOfInterval({ start: startOfCurrentMonth, end: endOfCurrentMonth })

// //   const openEditor = (date: Date): void => {
// //     setEditingDate(date)
// //     setIsEditorOpen(true)
// //   }

// //   const saveTask = (date: string, task: string): void => {
// //     setTasks((prevTasks) => ({
// //       ...prevTasks,
// //       [date]: { task, isDone: prevTasks[date]?.isDone || false },
// //     }))
// //     setIsEditorOpen(false)
// //   }

// //   const toggleTaskDone = (date: string): void => {
// //     setTasks((prevTasks) => ({
// //       ...prevTasks,
// //       [date]: {
// //         ...prevTasks[date],
// //         isDone: !prevTasks[date]?.isDone, 
// //       },
// //     }))
// //   }

// //   const toggleTheme = () => {
// //     setIsDarkMode(!isDarkMode)
// //   }

// //   return (
// //     <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
// //       <h1>Task Calendar</h1>
// //       <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

// //       <div className="calendar">
// //         {daysInMonth.map((day) => (
// //           <div
// //             key={day.toString()}
// //             className={`day ${isToday(day) ? 'today' : ''}`}
// //             onClick={() => openEditor(day)}
// //           >
// //             <div className="day-number">{format(day, 'd')}</div>
// //             <Task
// //               day={day}
// //               task={tasks[format(day, 'yyyy-MM-dd')]?.task}
// //               toggleTaskDone={toggleTaskDone}
// //               isDone={tasks[format(day, 'yyyy-MM-dd')]?.isDone || false}
// //             />
// //           </div>
// //         ))}
// //       </div>

// //       {isEditorOpen && (
// //         <TaskEditor
// //           date={editingDate}
// //           currentTask={tasks[format(editingDate!, 'yyyy-MM-dd')]?.task}
// //           saveTask={saveTask}
// //         />
// //       )}
// //     </div>
// //   )
// // }

// // export default App

// import React, { useEffect, useState } from 'react';
// import Calendar from './cmps/Calendar.tsx';
// import EventForm from './cmps/EventForm.tsx';
// import Weather from './cmps/Weather.tsx';
// import { Event } from './interface/interface';
// import { initGoogleClient, fetchEvents } from './utils/googleCalendar.tsx';
// import { localStoreService } from './utils/localStoreService.ts';

// // Local Storage Utility Functions

// const App: React.FC = () => {
//   const [events, setEvents] = useState<Event[]>([]);

//   // Load events from local storage when the component mounts
//   useEffect(() => {
//     initGoogleClient();

//     // Load events from localStorage or fetch from Google Calendar
//     const storedEvents = localStoreService.loadFromStorage<Event[]>('events');
//     if (storedEvents) {
//       setEvents(storedEvents);
//     } else {
//       const loadEvents = async () => {
//         const calendarEvents = await fetchEvents();
//         setEvents(calendarEvents);
//       };
//       loadEvents();
//     }
//   }, []);

//   // Handle adding new event
//   const handleAddEvent = (event: Event) => {
//     const updatedEvents = [...events, event];
//     setEvents(updatedEvents);
//     localStoreService.saveToStorage('events', updatedEvents);  
    
//   };

//   return (
//     <div className="App">
//       <h1>BusyCal</h1>
//       <Calendar events={events} onAddEvent={handleAddEvent} />
//       {/* <EventForm onAddEvent={handleAddEvent} /> */}
//       <Weather />
//     </div>
//   );
// };

// export default App;
