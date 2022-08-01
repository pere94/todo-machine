import React from 'react';
import './TodoLoading.css';

function TodoLoading() {
    return(
        <React.Fragment>
            <div className="Loading_todoChecktasksContainer">
                <div className="Loading_todoChecktasks"></div>
                <div className="Loading_todoChecktasksLabel"></div>
                <div className="Loading_todoChecktasksClose"></div>
            </div>
            
            <div className="Loading_todoChecktasksContainer">
                <div className="Loading_todoChecktasks"></div>
                <div className="Loading_todoChecktasksLabel"></div>
                <div className="Loading_todoChecktasksClose"></div>
            </div>
            
            <div className="Loading_todoChecktasksContainer">
                <div className="Loading_todoChecktasks"></div>
                <div className="Loading_todoChecktasksLabel"></div>
                <div className="Loading_todoChecktasksClose"></div>
            </div>

        </React.Fragment>
        
    );
}

export { TodoLoading };