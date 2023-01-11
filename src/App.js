import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";

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
if(!searchValue.length  > 0){
  searchedTodos = todos;
}
else {
  const searchText = searchValue.toLowerCase();
  searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    return todoText.includes(searchText);    
  })
}
  return (
    <React.Fragment>
      <TodoCounter 
      total = {totalTodos}
      completed = {completedTodos} />
      <TodoSearch
        searchValue = {searchValue} 
        setSearchValue = {setSearchValue}
        />

      <TodoList>
        {searchedTodos.map(todo => {
          return <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        })}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
