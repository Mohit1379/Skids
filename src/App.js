import { useState } from "react";
import UserCreate from "./components/UserCreate";
import UserList from "./components/UserList";

function App() {

  const [users , setUsers] = useState([]);


  const createUser = (userDetail) => {
    const newUser = { ...userDetail, id: generateRandomId() };
    setUsers([...users, newUser]);
    console.log(users)
  };

  const generateRandomId = () => {
    // Generate a random ID using any preferred method
    const randomId = Math.round(Math.random() * 9999);
    return randomId;
  };

  //Deleting a user by id
  const deleteUserById = (id) => {
    const updatedUsers = users.filter((user)=>{
        return user.id !== id;
    });

    setUsers(updatedUsers);
  }

  //updating a user by id 
  const editUserById = (id, newDetails) => {
    console.log(newDetails);
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, ...newDetails }; 
      }
      return user; // Return the original user object for other users
    });
    setUsers(updatedUsers);
  };

  return (
    <div>
        <UserCreate onCreate={createUser}/>
        <UserList users={users} onDelete={deleteUserById} onEdit={editUserById}/>
    </div>
  );
}

export default App;
