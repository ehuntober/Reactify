// TaskList.js

import React, {useState} from 'react';
import Task from './components/Task';
import './TaskList.css'

const TaskList = () =>{

    const [tasks, setTasks] = useState([])

    const handleDelete = (taskId) =>{
        setTasks(tasks.filter((task) => task.id !== taskId))
    };

    return(
        <div className='task-list'>
            {tasks.length === 0 ?(
                <p>No tasks available, Add a task to get started !</p>
            ) : (
                tasks.map((task) =>{
                    <Task key={task.id} task={task} onDelete={handleDelete} />
                })
            )}
        </div>
    )
}

export default TaskList;