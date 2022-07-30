import React from 'react';
import './style/TodoItem.css';

function TodoItem(props) {
    return (
        <li className="todoChecktasksContainer">
            <input className='todoChecktasks' type="checkbox" />
            <p className={`todoChecktasksLabel ${props.completed && }`}>{props.text}</p>
            <span className="todoChecktasksClose">X</span>
        </li>
    );
}

export { TodoItem };