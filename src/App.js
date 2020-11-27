import { useState } from "react";
import "./App.css";
import { Todo, TodoList, FormCreateTodo } from "./components";
function App() {
  const [todos, setTodos] = useState([]);
  const [todosIds, setTodosIds] = useState(0);

  const createTodo = (title) => {
    const newTodo = { title, id: todosIds };
    setTodosIds(todosIds + 1);
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <p className="title">TO DO LIST</p>
      <FormCreateTodo createTodo={createTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
