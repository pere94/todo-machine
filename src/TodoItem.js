import React from 'react';
import './style/TodoItem.css';
import { FaWindowClose } from "react-icons/fa";

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
            {/* <span 
                className="todoChecktasksClose"
                onClick={props.isdeleted}
            >X</span> */}
            <span 
                onClick={props.isdeleted}
            > <FaWindowClose className="todoChecktasksClose"/> </span>
            
        </li>

    );
}

export { TodoItem };