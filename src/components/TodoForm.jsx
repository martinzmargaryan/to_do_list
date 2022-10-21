import React, { useState } from "react";
import { FormControl, TextField, Button } from "@mui/material";

const TodoForm = (props) => {
  const [text, setText] = useState("");

  const hanleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={hanleSubmit}>
      <FormControl fullWidth={true}>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          label="sssss"
          required={true}
          style={{ marginTop: 15 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: 5, marginBottom: 25 }}
        >
          Add
        </Button>
      </FormControl>
    </form>
  );
};

export default TodoForm;
