import { Container } from "@mui/system";
import React, { useState } from "react";

import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Play",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Play tetris",
      isCompleted: true,
    },
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Math.random(),
      title: text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <Container maxWidth="sm">
      <TodoForm addTodo={addTodo} />
    </Container>
  );
}

export default App;
