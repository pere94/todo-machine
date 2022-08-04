import React from 'react';
import './TodoContainerLeft.css';
import img_grande from '../img/1902.i039.011.P.m004.c30.cloud services isometric icons-04.webp';

function TodoContainerLeft(props) {
    return (
        <section className="container_left">
            {props.children}
            <img className="img_grande" src={img_grande} alt="hola"/>
        </section>
    );
}

export { TodoContainerLeft }; 