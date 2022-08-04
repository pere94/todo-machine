import React from 'react';
import './PopupNewTodoContainer.css';
import img_grande from '../img/1902.i039.011.P.m004.c30.cloud services isometric icons-04.webp';

function PopupNewTodoContainer(props) {
    return (
        <section className="container_PopupNewTodo"> {/*${!!isActive && "PopupHidden"}`*/}
          <span onClick={props.visibilityPopup} className="closePopup">X</span>
          {props.children}
          <img className="img_grande" src={img_grande} alt="hola"/>
        </section>
    );
}

export { PopupNewTodoContainer }; 