import { React, useState } from 'react';
import './TaskManager.css';

function TaskManager() {

    const Task = {
        id: 0,
        title: "",
        completed: false
    }

    const [tasks, setTasks] = useState([])

    const addTask = (task) => {
        setTasks([...tasks, task])
    }

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task)
        );
    };

    return (
        <div className='container'>
            <h1>TaskManager</h1>
            <div className='task-manager'>
                <div className='task-manager-top'>
                    <input
                        type="text"
                        id='task-item'
                        className='task-item'
                    />
                    <button onClick={() => addTask(
                        {
                            id: tasks.length + 1,
                            title: document.getElementById('task-item').value,
                            completed: false
                        }
                    )} className='btn'>Add Task</button>
                </div>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTaskCompletion(task.id)} />
                            {task.title}
                            <span className={task.completed ? 'completed' : 'not-completed'}>
                                {task.completed ? 'Completed' : 'Not Completed'}
                            </span>
                            <button onClick={() => removeTask(task.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TaskManager