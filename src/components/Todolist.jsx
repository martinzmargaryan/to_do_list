import Todo from "./Todo";

const Todolist = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} />
      ))}
    </div>
  );
};

export default Todolist;
