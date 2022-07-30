import React from 'react';
import './style/TodoInputTasks.css'

function TodoInputTasks() {
    return (
        <React.Fragment>
            <label className="labelTask">Task Name</label>
            <input id='createTask_input' className='createTask_input' type="text" placeholder='Type your task here' />
        </React.Fragment>
    );
}

export { TodoInputTasks };
