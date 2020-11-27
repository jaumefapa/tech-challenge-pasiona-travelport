import "./index.css";
import { Todo } from "../index";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
