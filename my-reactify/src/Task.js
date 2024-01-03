// Task.js
import React from 'react';
import './Task.css';

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <div className="task-info">
        <span className="task-title">{task.title}</span>
        <span className="task-category">Category: {task.category}</span>
        {task.deadline && (
          <span className="task-deadline">Deadline: {task.deadline}</span>
        )}
      </div>
      <button onClick={() => onDelete(task.id)} className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default Task;
