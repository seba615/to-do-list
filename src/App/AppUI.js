import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";

function AppUI() {

    const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext)
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <p>Error</p>}
                {loading && <p>Loading</p>}
                {(!loading && !searchedTodos.length) && <p>Create a TODO</p>}
                {searchedTodos.map(todo => {
                    return <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                })}
            </TodoList>

            {!!openModal &&
                <Modal>
                    <p>{searchedTodos[0]?.text}</p>
                </Modal>
            }
            <CreateTodoButton
                setOpenModal = {setOpenModal}
             />
        </React.Fragment>
    );
}
export { AppUI };