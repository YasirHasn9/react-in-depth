import { useState } from "react";
import { Form } from "./userFrom";
import { User } from "./user";
export const Users = () => {
  const [users, setUsers] = useState([]);

  const addNewUser = (user) => {
    let newUsers = [user, ...users];
    setUsers(newUsers);
  };
  return (
    <div>
      <div>
        <Form addNewUser={addNewUser} />
      </div>
      {users.length < 1 ? (
        <p>There is no users</p>
      ) : (
        users.map((user) => {
          return <User key={user.name} user={user} />;
        })
      )}
    </div>
  );
};
