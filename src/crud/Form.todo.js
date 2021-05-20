import { useState } from "react";

export const FormTodo = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo({
      id: Math.floor(Math.random() * 1000),
      value: input,
    });
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        placeholder="Type your todo"
        className="todo-input"
        onChange={handleChange}
        value={input}
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
};
