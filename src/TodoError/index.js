import React from 'react';

function TodoError({ error }) {
    return(
        <p>Desesperate hubo un error: {error}</p>
    );
}

export { TodoError };