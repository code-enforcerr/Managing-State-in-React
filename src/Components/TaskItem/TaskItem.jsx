function TaskItem({ task, onEdit, onDelete, onToggleComplete }) {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <button onClick={() => onToggleComplete(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => onEdit(task)}>Edit</button> 
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
}

export default TaskItem;
