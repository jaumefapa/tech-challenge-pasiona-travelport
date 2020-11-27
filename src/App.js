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

  const deleteTodo = (idToDelete) => {
    const newTodos = todos.filter((todo) => todo.id !== idToDelete);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="title">TO DO LIST</header>
      <FormCreateTodo createTodo={createTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
