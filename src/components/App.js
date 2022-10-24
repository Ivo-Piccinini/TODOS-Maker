import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUi } from "./AppUi";

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Llorar por la cebolla', completed: true },
//   { text: 'lalala', completed: false },
// ];

function App() {

  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;