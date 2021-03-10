import React, { useState ,useRef} from "react";
import {useDispatch} from "react-redux"
import {createUser } from "../reducers/allUsersReducer"
import {useHistory } from "react-router-dom"
const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const noteFormRef = useRef();
 const dispatch= useDispatch()
 const history = useHistory()
 
  const handleCreateUser = (event) => {
    //noteFormRef.current.togglevisibility();
    event.preventDefault();
    const newUserObject = {
      username ,
      name,
      password,
    };
   
   dispatch(  createUser(newUserObject ));
    setUsername("");
    setName("");
    setPassword("");
    history.push('/users')
   
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={handleCreateUser}>
      <div>
        username
        <input value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        name
        <input type="text" value={name} onChange={ handleNameChange} />
      </div>
      <div>
        password
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit">create</button>
    </form>
  );
};
export default CreateUser;
