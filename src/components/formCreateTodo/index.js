import { useState } from "react";
import "./index.css";

const FormCreateTodo = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    title && createTodo(title);
    setTitle("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="new-todo">To do:</label>
      <input
        id="new-todo"
        type="text"
        value={title}
        placeholder="Type your to do"
        onChange={handleChange}
      ></input>
      <button className="form-button" type="submit" value="submit">
        Submit
      </button>
    </form>
  );
};

export default FormCreateTodo;
