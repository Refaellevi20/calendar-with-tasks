import React, { useState } from 'react';
import { format } from 'date-fns';

interface TaskEditorProps {
  date: Date | null;
  currentTask?: string;
  saveTask: (date: string, task: string) => void;
}

const TaskEditor: React.FC<TaskEditorProps> = ({ date, currentTask, saveTask }) => {
  const [task, setTask] = useState<string>(currentTask || '');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTask(event.target.value);
  };

  const handleSave = (): void => {
    if (date) {
      saveTask(format(date, 'yyyy-MM-dd'), task);
    }
  };

  return (
    <div className="task-editor">
      <h2>Edit Task for {date ? format(date, 'MMM dd, yyyy') : ''}</h2>
      <textarea value={task} onChange={handleChange}></textarea>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default TaskEditor;
