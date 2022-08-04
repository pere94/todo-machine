import React from 'react';
import './style/TodoInputTasks.css'
// import { TodoContext } from './TodoContext/useTodos';

function TodoInputTasks( { newTodoValue, onChangeTextarea, loading } ) {

    // const { newTodoValue, onChangeTextarea } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <form className='formTodoAdd'>
                <label className="labelTask">Task Name</label>
                <textarea 
                    value={newTodoValue}
                    onChange={onChangeTextarea}
                    id='createTask_input' 
                    className='createTask_input' 
                    type="text" 
                    placeholder='Type your task here' 
                    disabled={loading}
                />
            </form>
            
        </React.Fragment>
    );
}

export { TodoInputTasks };
