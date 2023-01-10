import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar agua', completed: false },
  { text: 'Llorar con la humedad', completed: false }
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => {
          return <TodoItem key={todo.text} text={todo.text} />
        })}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
