// create a new state for the new user
// create form and interactive controls for the user
// submit new user

import { useState } from "react";

export const Form = (props) => {
  const [newUser, setNewUser] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewUser(newUser);
    setNewUser({
      name: "",
      age: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={newUser.name}
          onChange={handleChange}
        />
        <input
          name="age"
          type="number"
          value={newUser.age}
          onChange={handleChange}
        />
        <button>Add new user</button>
      </form>
    </div>
  );
};
