import "./index.css";
import { Todo } from "../index";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
};

export default TodoList;
