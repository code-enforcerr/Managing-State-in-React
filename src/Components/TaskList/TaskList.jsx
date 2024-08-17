import { useState, useEffect } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import TaskForm from '../TaskForm/TaskForm';
import { v4 as uuidv4 } from 'uuid';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null); 

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: uuidv4(), completed: false }]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = (updatedTask) => {
        setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
        setEditingTask(null); 
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const startEditing = (task) => {
        setEditingTask(task); 
    };

    return (
        <div>
           
            <TaskForm onSubmit={editingTask ? editTask : addTask} initialData={editingTask} />
            <div className="task-list">
                {tasks.map(task => (
                    <TaskItem 
                        key={task.id} 
                        task={task} 
                        onEdit={startEditing} 
                        onDelete={deleteTask} 
                        onToggleComplete={toggleComplete} 
                    />
                ))}
            </div>
        </div>
    );
}

export default TaskList;
