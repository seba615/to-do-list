import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

const defaultTodos = [
  { text: 'Cut some onions', completed: true },
  { text: 'Drink a glass of water', completed: false },
  { text: 'Cry at night', completed: false }
];

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
