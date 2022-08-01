import React from 'react';
import './style/CreateTodoButtonMovil.css';
import { TodoContext } from './TodoContext/TodoContext';

function CreateTodoButtonMovil() {
    const {visibilityPopup} = React.useContext(TodoContext);
    
    return (
        <button onClick={visibilityPopup} className='createTasksMovil' id='createTasksMovil'>+</button>
    );
}

export { CreateTodoButtonMovil };