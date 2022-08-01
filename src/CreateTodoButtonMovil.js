import React from 'react';
import './style/CreateTodoButtonMovil.css';
import { TodoContext } from './TodoContext/TodoContext';
import { FaWindowClose } from "react-icons/fa";

function CreateTodoButtonMovil() {
    const {visibilityPopup} = React.useContext(TodoContext);
    
    return (
        <button onClick={visibilityPopup} className='createTasksMovil' id='createTasksMovil'>+</button>
    );
}

export { CreateTodoButtonMovil };