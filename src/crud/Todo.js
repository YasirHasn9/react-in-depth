export const Todo = ({ todos, removeTodo }) => {
  // console.log("Todo", todos);
  //   console.log("removeTodo", removeTodo);
  return (
    <div>
      {todos.map((todo) => (
        <div className="todo-row">
          <div key={todo.id}>
            {todo.value}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};
