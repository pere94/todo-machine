import React from 'react';
import './App.css';
import img_grande from './img/1902.i039.011.P.m004.c30.cloud services isometric icons-04.webp';

import { TodoNewTask } from './TodoNewTask';
import { TodoInputTasks } from './TodoInputTasks';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';

const todos=[
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false},
  {text:'Llorar con la lloa', completed:false},
  {text:'Lloar con la llorona', completed:false},
  {text:'Llorar con a llorona', completed:false},
  {text:'Lloracon la llorona', completed:false},
  {text:'Llorar n la llorona', completed:false},
  {text:'loar con la llorona', completed:false},
];

function App() {
  return (
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
          <TodoList>
            {todos.map( todo => (
              <TodoItem completed={todo.completed} key={todo.text} text={todo.text}/>
            ))}
          </TodoList>
        </section>
      }
    </React.Fragment>
  );
}

export default App;
