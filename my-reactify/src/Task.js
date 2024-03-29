// Task.js
import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import './Task.css';

const Task = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleSaveEdit = () => {
    onEdit(task.id, editedTitle);
    setIsEditing(false);
  };

  return (
    <div className="task">
      <div className="task-info">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <button className="edit-button" onClick={handleSaveEdit}>
              Save +
            </button>
          </>
        ) : (
          <>
            <span className="task-title">{task.title}</span>
            <span className="task-category">Category: {task.category}</span>
            {task.deadline && (
              <span className="task-deadline">Deadline: {task.deadline}</span>
            )}
          </>
        )}
      </div>
      <div className="task-actions">
        {isEditing ? null : (
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            <FaEdit />
          </button>
        )}
        <button
          className="delete-button"
          onClick={() => onDelete(task.id)}
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default Task;
