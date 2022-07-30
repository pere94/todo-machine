import React from 'react';
import './style/TodoCounter.css';

function TodoCounter() {
    return (
        <React.Fragment>
            <h2 className='counterTasks_title'>Your Task</h2>
            <h3 className='counterTasks_counter'>Completed 3 to 5</h3>
        </React.Fragment>
    );
}

export { TodoCounter };