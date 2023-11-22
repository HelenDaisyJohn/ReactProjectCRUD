import { useState } from "react"

const EditUserForm = (props) =>
{
    const[user,setUser]=useState(props.currentUser)
    const handleInputChange =(event) =>
    {
        const{name,value}=event.target
        setUser({...user,[name]:value})
    }
    return (
        <form onSubmit={
            event =>
            {
                event.preventDefault();
                if(!user.name|| !user.username) return;
                props.updateUser(user.id, user);
                
            }
    
        }>
            <label> Name </label>
            <input type="text" onChange={handleInputChange} name ="name" value={user.name}/>
            <label> User Name </label>
            <input type="text" onChange={handleInputChange} name ="username" value={user.username}/>
            <button>Update User</button>
            <button className="button muted-button" onClick={()=>
            {
                props.setEditing(true);
            }}>Cancel</button>
        </form>
        )
    
}

export default EditUserForm;