import "./index.css";

const Todo = ({ todo, deleteTodo }) => {
  return (
    <div className="todo">
      <div className="content-todo">
        <div>{todo.title}</div>
      </div>
      <div className="delete-todo">
        <span className="material-icons" onClick={() => deleteTodo(todo.id)}>
          delete
        </span>
      </div>
    </div>
  );
};

export default Todo;
