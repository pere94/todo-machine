import React from 'react';
import './style/CreateTodoButtonMovil.css';
// import { TodoContext } from './TodoContext/useTodos';

function CreateTodoButtonMovil({visibilityPopup}) {
    // const {visibilityPopup} = React.useContext(TodoContext);
    
    return (
        <button onClick={visibilityPopup} className='createTasksMovil' id='createTasksMovil'>+</button>
    );
}

export { CreateTodoButtonMovil };