import React from 'react';
import './style/TodoItem.css';

function TodoItem(props) {

    return (
        <li className="todoChecktasksContainer">
            <input 
                className='todoChecktasks' 
                type="checkbox" 
                checked={props.completed}
                onChange={props.ischeked}
            />
            <p className={`todoChecktasksLabel ${props.completed && 'check_active'}`}>{props.text}</p>
            <span 
                className="todoChecktasksClose"
                onClick={props.isdeleted}
            >X</span>
        </li>
    );
}

export { TodoItem };