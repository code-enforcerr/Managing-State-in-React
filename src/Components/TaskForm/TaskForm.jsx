import { useState, useEffect } from 'react';

function TaskForm({ onSubmit, initialData }) {
    const [task, setTask] = useState(initialData || { name: '', description: '' });

    useEffect(() => {
        if (initialData) {
            setTask(initialData); 
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.name && task.description) {
            onSubmit(task);
            setTask({ name: '', description: '' });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                value={task.name} 
                onChange={handleChange} 
                placeholder="Task Name" 
                required 
            />
            <textarea 
                name="description" 
                value={task.description} 
                onChange={handleChange} 
                placeholder="Task Description" 
                required 
            />
            <button type="submit">
                {initialData ? 'Update Task' : 'Save Task'}
            </button>
        </form>
    );
}

export default TaskForm;
