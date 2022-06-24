import { useState } from "react";
import AddUser from "./Users/AddUser";
import UserList from "./Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => [
      ...prevUsersList,
      { name: userName, age: userAge, id: Math.random().toString() },
    ]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
