import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: todos, 
        saveItems: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
    
      const [searchValue,setSearchValue] = React.useState('');
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if (searchValue.length >= 1) {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      } else {
        searchedTodos = todos;
      }
    
      const TodoFinished = (text) => {
        const indexTodo = todos.findIndex(todo => todo.text == text);  
        const newTodos = [...todos];
        newTodos[indexTodo].completed = true;
        saveTodos(newTodos);
      };

      const TodoAdd = (text) => {
        // const indexTodo = todos.findIndex(todo => todo.text == text);  
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false,
        });
        saveTodos(newTodos);
        setnewTodoValue('');
        visibilityPopup();
      };
    
      const TodoDeleted = (text) => {
        const indexTodo = todos.findIndex(todo => todo.text == text);
        const newTodos = [...todos];
        newTodos.splice(indexTodo, 1);
        saveTodos(newTodos);
      };

      const [visibPopup, setvisibPopup] = React.useState(true);

      function visibilityPopup() {
        const popup = document.getElementById('PopupNew');
        if (visibPopup) {
          popup.style.visibility = 'visible';
          setvisibPopup(!visibPopup);
        } else {
          popup.style.visibility = 'hidden';
          setvisibPopup(!visibPopup);
        }  
      }

      const [newTodoValue, setnewTodoValue] = React.useState('');

      function onChangeTextarea(event) {
          setnewTodoValue(event.target.value);
      }

    return (
    <TodoContext.Provider value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        TodoFinished,
        TodoDeleted,
        visibilityPopup,
        visibPopup,
        setvisibPopup,
        TodoAdd,
        onChangeTextarea,
        newTodoValue,

    }}>
      {props.children}
    </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };