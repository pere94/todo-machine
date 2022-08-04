import React from 'react';
import './style/TodoList.css';

function TodoList(props) {
    return (
        <div className="TodoList_container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            {(!props.loading && !props.searchedTodos.length && !!props.totalTodos) && props.onEmptySearchedTodos(props.searchText)}

            {props.searchedTodos.map( todo => props.render(todo))}
            
            <ul className="TodoList_list">
                {props.children}
            </ul>
        </div>
    );
}

export { TodoList };