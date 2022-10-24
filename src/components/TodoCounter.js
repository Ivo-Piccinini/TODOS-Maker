import React from "react";
import { TodoContext } from "../TodoContext";
import '../styles/TodoCounter.css';

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
        <h2 className="TodoCounter">You has been completed { completedTodos } of { totalTodos } TODOs</h2>
    );
}

export { TodoCounter };