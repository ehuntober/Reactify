// TaskList.js
import React, { useState } from 'react';
import Task from './Task';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState('General');
  const [newTaskDeadline, setNewTaskDeadline] = useState('');

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObject = {
        id: Date.now(),
        title: newTask,
        category: newTaskCategory,
        deadline: newTaskDeadline || null,
      };

      setTasks([...tasks, newTaskObject]);
      setNewTask('');
      setNewTaskCategory('General');
      setNewTaskDeadline('');

      toast.success('Task added successfully!');
    }
  };

  const handleEditTask = (taskId, newTitle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      )
    );

    toast.info('Task updated successfully!');
  };

  return (
    <div className="task-list">
      <div className="add-task">
        <input
          type="text"
          placeholder="Enter task title"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <select
          value={newTaskCategory}
          onChange={(e) => setNewTaskCategory(e.target.value)}
        >
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
        <input
          type="date"
          value={newTaskDeadline}
          onChange={(e) => setNewTaskDeadline(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      {tasks.length === 0 ? (
        <p>No tasks available. Add a task to get started!</p>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onEdit={handleEditTask}
          />
        ))
      )}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default TaskList;
