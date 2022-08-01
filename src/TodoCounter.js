import React from 'react';
import './style/TodoCounter.css';
import { TodoContext } from './TodoContext/TodoContext';

function TodoCounter() {

    const {completedTodos, totalTodos} = React.useContext(TodoContext);


    return (
        <React.Fragment>
            <h2 className='counterTasks_title'>Your Task</h2>
            <h3 className='counterTasks_counter'>Completed {completedTodos} to {totalTodos}</h3>
        </React.Fragment>
    );
}

export { TodoCounter };