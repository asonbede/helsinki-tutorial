import React from "react"
import { useSelector,useDispatch} from "react-redux"
import {getAllUsers,hideAllUsers} from "../reducers/allUsersReducer"
import {Link} from "react-router-dom"

  console.log("users")
const AllUsers = ()=>{
   const allUsers  = useSelector(state=>state.allUsers )
   console.log({allUsers})
   const blogStyle = {
   paddingTop: 10,
   paddingLeft: 2,
   border: "solid",
   borderWidth: 1,
   marginBottom: 5,
 };
if(allUsers){  return (
   <div style={blogStyle}>

<ul>
     {allUsers.map(user =>
       <li key={user.id}>
         <Link to={`/users/${user.id}`}>{user.name} </Link>
       </li>
     )}
   </ul>



   </div>
 ) }
 return null
};



   



export default AllUsers