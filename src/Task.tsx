import { format } from 'date-fns'
import React from 'react'

interface TaskProps {
  day: Date
  task?: string
  toggleTaskDone: (date: string) => void
  isDone: boolean
}

const Task: React.FC<TaskProps> = ({ day, task, toggleTaskDone, isDone }) => {
  return (
    <div className={`task ${isDone ? 'done' : ''}`}>
      <p>{task ? task : 'No task'}</p>
      <button onClick={() => toggleTaskDone(format(day, 'yyyy-MM-dd'))}>
        {!isDone ? 'Mark as Not Done' : 'Mark as Done'}
      </button>
    </div>
  )
}

export default Task
