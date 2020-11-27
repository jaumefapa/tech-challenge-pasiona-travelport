import "./index.css";

const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <div className="content-todo">
        <div>{todo.title}</div>
      </div>
      <div className="delete-todo">
        <span className="material-icons">delete</span>
      </div>
    </div>
  );
};

export default Todo;
