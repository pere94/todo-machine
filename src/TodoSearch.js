import React from 'react';
import './style/TodoSearch.css';
import { TodoContext } from './TodoContext/TodoContext';

function TodoSearch() {

    const {searchValue, setSearchValue, completedTodos, totalTodos} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div 
         className='label_searchTask'
         style={{background: `linear-gradient(100deg, rgba(0,212,255,1) ${Math.round(completedTodos/totalTodos*100)}%, rgba(29,51,75,1) ${Math.round(completedTodos/totalTodos*100+10)}%`}}
         >
            <input 
                type='text' 
                className='input_searchTask' 
                placeholder='Search your Task' 
                value={searchValue}
                onChange={onSearchValueChange}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 icon_searchTask" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>           
        </div>
    );
}

export { TodoSearch };