import { useState } from "react";

export const FormInReact = () => {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) =>
    //   using the ... called the spread operator
    // [e.target.name] called the computed property
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name">Username:</label>
      <input name="username" id="name" type="text" onChange={handleChange} />
      <br />
      <label htmlFo="password">password</label>
      <input
        name="password"
        id="password"
        type="text"
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};
