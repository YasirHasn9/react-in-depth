import { useState } from "react";
import "./app.css";
import { Todo } from "./Todo";
import { FormTodo } from "./Form.todo";
export const TodoList = (props) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const removeTodo = (todoId) => {
    console.log(todoId);
    let newToDoes = todos.filter((todo) => todo.id !== todoId);
    console.log("newToDoes", newToDoes);
    setTodos(newToDoes);
  };

  return (
    <>
      <FormTodo addTodo={addTodo} />
      <Todo removeTodo={removeTodo} todos={todos} />
    </>
  );
};
