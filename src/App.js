import { useState } from "react";
import AddUserForm from "./Forms/AddUserForm";
import EditUserForm from "./Forms/EditUserForm";
import UserTable from "./Tables/UserTable";

function App() {

const addUser = (user) =>
{
  user.id=users.length+1;
  setUsers([...users, user]);
}


const deleteUser =(id) =>
 {
setUsers(users.filter((user) => user.id !== id));
 }
  const [users,setUsers]=useState('');
 const[editing,setEditing]=useState(false);


const initialFormState ={id:null, name:'', username:'' }
const[currentUser, setCurrentUser]= useState(initialFormState);

 const editRow =(user) =>
 {
     setEditing(true);
     setCurrentUser({id:user.id, name:user.name, username:user.username});
 }

 const updateUser =(id, updatedUser) =>
 {
  setEditing(false);
  setUsers(users.map((user) => (user.id=== id ? updatedUser:user)));


 }

   return (
    <div className="container">
      <h1>
        CRUD Operation
      </h1>
      <div className="flex-row">
  
      <div className="flex-large"> 

      {editing? (<div>
        <h2>Edit User</h2>
        <EditUserForm 
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
        />
        </div> )
      : (
        <div>
          <h2>
        Add Users </h2>
        <AddUserForm addUser={addUser}/>

        </div>
      )
}
      
      <div className="flex-large">
        <h2>
          View Users </h2>
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
          
        
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default App;
