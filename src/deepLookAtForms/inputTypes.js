import { useState } from "react";
export const InputTypes = () => {
  const [formInput, setFormInputs] = useState({
    username: "",
    userAge: "",
    state: "",
    isGoing: false,
  });
  const handleChange = (e) => {
    setFormInputs({ ...formInput, [e.target.name]: e.target.value });
  };
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        name="username"
        value={formInput.username}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        name="userAge"
        value={formInput.userAge}
        onChange={handleChange}
      />
      <br />
      {/* <label htmlFor="state">State</label> */}
      {/* <input
        id="state"
        type="text"
        name="state"
        value={formInput.state}
        onChange={handleChange}
      /> */}
      <br />
      <label htmlFor="isGoing"></label>
      <input
        id="isGoing"
        type="checkbox"
        name="isGoing"
        value={formInput.isGoing}
      />
      <br />
      <label>
        State:
        <select value={formInput.state} name="state" onChange={handleChange}>
          <option value="">--select a state--</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
        </select>
      </label>
    </form>
  );
};
