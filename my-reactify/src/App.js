// TaskList.js
import React, { useState } from 'react';
import Task from './Task';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObject = {
        id: Date.now(),
        title: newTask,
        category: 'General', // Default category
      };

      setTasks([...tasks, newTaskObject]);
      setNewTask('');
    }
  };

  return (
    <div className="task-list">
      <h1>Reactify - Task Manager</h1>
      <div className="add-task">
        <input
          type="text"
          placeholder="Enter task title"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      {tasks.length === 0 ? (
        <p>No tasks available. Add a task to get started!</p>
      ) : (
        tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
};

export default TaskList;
