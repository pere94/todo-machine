import React from 'react';
import './style/App.css';
import img_grande from './img/1902.i039.011.P.m004.c30.cloud services isometric icons-04.webp';

import { TodoNewTask } from './TodoNewTask';
import { TodoInputTasks } from './TodoInputTasks';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateTodoButtonMovil } from './CreateTodoButtonMovil';
import  { TodoContext } from './TodoContext/TodoContext';
import { TodoProvider } from './TodoContext/TodoContext';
import { PopupNewTodo } from '../src/popupNewTodo/popupNewTodo';

import { TodoError } from './TodoError';
import { TodoLoading } from './TodoLoading';
import { TodoEmpty } from './TodoEmpty';


function App() {
  // const { error, loading, searchedTodos, TodoFinished, TodoDeleted, } = React.useContext(TodoContext);
  

  return (

    <TodoProvider> 
      <React.Fragment>
        {
          <section className="container_left">
            <TodoNewTask />
            <TodoInputTasks />
            <CreateTodoButton />
            <img className="img_grande" src={img_grande} alt="hola"/>
          </section>
        }

        {
          <section className="container_right">
            <TodoCounter />
            <TodoSearch />

            <TodoContext.Consumer>
              {/* {(value -> valores del contexto globales) => (componentes que usan las variables)} */}
              {({error, loading, searchedTodos, TodoFinished, TodoDeleted, visibilityPopup,}) => (
                <React.Fragment>
                <TodoList>
                  {error && <TodoError error={error} />}
                  {loading && <TodoLoading />}
                  {(!loading && !searchedTodos.length) && <TodoEmpty />}
                
                  {searchedTodos.map( todo => (
                    <TodoItem 
                      completed={todo.completed} 
                      key={todo.text} 
                      text={todo.text}
                      ischeked={() => TodoFinished(todo.text)}
                      isdeleted={() => TodoDeleted(todo.text)}
                    />
                  ))}
                </TodoList>

                <PopupNewTodo>
                {
                  <section className="container_PopupNewTodo"> {/*${!!isActive && "PopupHidden"}`*/}
                    <span onClick={visibilityPopup} className="closePopup">X</span>
                    <TodoNewTask />
                    <TodoInputTasks />
                    <CreateTodoButton />
                    <img className="img_grande" src={img_grande} alt="hola"/>
                  </section>
                }
                </PopupNewTodo>
                </React.Fragment>  
              )}

            </TodoContext.Consumer>
          </section>
        }

        <CreateTodoButtonMovil />

      </React.Fragment>
    </TodoProvider>

    
  );
}

export default App;
