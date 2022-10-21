import { Container } from "@mui/system";
import React, { useState } from "react";

import TodoForm from "./components/TodoForm";
import Todolist from "./components/Todolist";

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
      <Todolist todos={todos} />
    </Container>
  );
}

export default App;
