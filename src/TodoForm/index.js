import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    };
    const onValueChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Add your new TODO</label>
            <textarea
                placeholder="New Todo"
                value={newTodoValue}
                onChange={onValueChange}
            />
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" type="button" onClick={onCancel}>Cancel</button>
                <button className="TodoForm-button TodoForm-button--add" typeof="submit">Add</button>
            </div>

        </form>
    )
}

export { TodoForm }