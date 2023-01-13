import React from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";

function TodoCounter()
{
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter">{completedTodos} of {totalTodos} TODOs has been completed</h2>
    );
}

export { TodoCounter };