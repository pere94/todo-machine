import React from 'react';
import ReactDOM from 'react-dom';
import './PopupNewTodo.css';

function PopupNewTodo({children}) {
    return ReactDOM.createPortal(
        children,
        document.getElementById('PopupNew'),
    );
}

export { PopupNewTodo };