import React from "react";
import { AppUI } from "./AppUI";

const defaultTodos = [
  { text: 'Cut some onions', completed: true },
  { text: 'Drink a glass of water', completed: false },
  { text: 'Cry at night', completed: false }
];

function App() {

  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);
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
    setTodos(newTodos);
  };

  const deleteTodo = (todoKey) => {
    const todoIndex = todos.findIndex(todo => todo.text === todoKey);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
