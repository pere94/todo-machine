import React from 'react';
import './style/CreateTodoButton.css';
import { TodoContext } from './TodoContext/TodoContext';

function CreateTodoButton() {

    const { newTodoValue, TodoAdd} = React.useContext(TodoContext);

    return (
        <button 
            onClick={() => TodoAdd(newTodoValue)}
            type='submit' 
            className='createTasks' 
            id='createTasks'
        >Create Task</button>
    );
}

export { CreateTodoButton };