import React from "react";
import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos})
{
    return (
        <h2 className="TodoCounter">{completedTodos} of {totalTodos} TODOs has been completed</h2>
    );
}

export { TodoCounter };