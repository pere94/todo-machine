import React from 'react';
import './style/CreateTodoButton.css';

function CreateTodoButton( {newTodoValue, TodoAdd} ) {


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