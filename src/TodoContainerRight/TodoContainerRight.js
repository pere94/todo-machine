import React from 'react';
import './TodoContainerRight.css'

function TodoContainerRight(props){
    return (
        <section className="container_right">
          {props.children}
        </section>
    );
}

export { TodoContainerRight };

