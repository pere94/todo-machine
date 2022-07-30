import React from 'react';
import './style/TodoList.css';

function TodoList(props) {
    return (
        <div className="TodoList_container">
            <ul className="TodoList_list">
                {props.children}
            </ul>
        </div>
    );
}

export { TodoList };