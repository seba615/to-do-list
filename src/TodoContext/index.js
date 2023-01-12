import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];
    if (!searchValue.length > 0) {
        searchedTodos = todos;
    }
    else {
        const searchText = searchValue.toLowerCase();
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            return todoText.includes(searchText);
        })
    }

    const completeTodo = (todoKey) => {
        const todoIndex = todos.findIndex(todo => todo.text === todoKey);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (todoKey) => {
        const todoIndex = todos.findIndex(todo => todo.text === todoKey);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };