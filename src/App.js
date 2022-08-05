import React from 'react';

import { TodoNewTask } from './TodoNewTask';
import { TodoInputTasks } from './TodoInputTasks';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateTodoButtonMovil } from './CreateTodoButtonMovil';
import  { useTodos } from './TodoContext/useTodos';
import { PopupNewTodo } from '../src/popupNewTodo/popupNewTodo';
import { TodoError } from './TodoError';
import { TodoLoading } from './TodoLoading';
import { TodoEmpty } from './TodoEmpty';
import { TodoContainerLeft } from './TodoContainerLeft/TodoContainerLeft';
import { TodoContainerRight } from './TodoContainerRight/TodoContainerRight';
import { PopupNewTodoContainer } from './PopupNewTodoContainer/PopupNewTodoContainer';


function App() {
  // const { error, loading, searchedTodos, TodoFinished, TodoDeleted, } = React.useContext(TodoContext);
  {/* {(value -> valores del contexto globales) => (componentes que usan las variables)} */}

  const {
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
    TodoAdd,
    onChangeTextarea,
    newTodoValue,
} = useTodos();

  return (
    <React.Fragment>
      <TodoContainerLeft>
        <TodoNewTask />
        <TodoInputTasks
          newTodoValue = {newTodoValue} 
          onChangeTextarea = {onChangeTextarea}
          loading = {loading}
        />
        <CreateTodoButton 
          newTodoValue = {newTodoValue} 
          TodoAdd = {TodoAdd}
        />
      </TodoContainerLeft>

      <TodoContainerRight>
        <TodoCounter 
          completedTodos = {completedTodos}
          totalTodos = {totalTodos}
        />

        <TodoSearch 
          searchValue = {searchValue}
          setSearchValue = {setSearchValue} 
          completedTodos = {completedTodos} 
          totalTodos = {totalTodos}
        />
            
        <TodoList
          totalTodos = {totalTodos}
          searchText = {searchValue}
          error = {error}
          loading = {loading}
          searchedTodos = {searchedTodos}
          onError = {() => <TodoError />}
          onLoading = {() => <TodoLoading />}
          onEmptyTodos = {() => <TodoEmpty />}
          onEmptySearchedTodos = {text => <p>Oh! There are no Tasks matching the "{text}" search.</p>}
          render = {todo => (
            <TodoItem 
              completed={todo.completed} 
              key={todo.text} 
              text={todo.text}
              ischeked={() => TodoFinished(todo.text)}
              isdeleted={() => TodoDeleted(todo.text)}
            />)}
        />
      </TodoContainerRight>
      
      <PopupNewTodo>
        <PopupNewTodoContainer
          visibilityPopup= {visibilityPopup}
        >
          <TodoNewTask />
          <TodoInputTasks 
            newTodoValue = {newTodoValue} 
            onChangeTextarea = {onChangeTextarea}
          />
          <CreateTodoButton 
            newTodoValue = {newTodoValue} 
            TodoAdd = {TodoAdd}
          />
        </PopupNewTodoContainer>
        
      </PopupNewTodo> 

      <CreateTodoButtonMovil 
        visibilityPopup = {visibilityPopup}
      />

    </React.Fragment>
    
  );
}

export default App;











