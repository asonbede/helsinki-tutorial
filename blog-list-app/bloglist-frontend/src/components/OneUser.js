import React from "react"
import {useDispatch,useSelector} from "react-redux"
import{   removeUserHandler} from "../reducers/allUsersReducer"

import {useRouteMatch,Link} from "react-router-dom"

  console.log("one blog running")
 

const OneUser = ()=>{
 //const singleUser= useSelector(state=>state.singleUser)
 const dispatch = useDispatch();
 const match = useRouteMatch('/users/:id')
 const allUsers  = useSelector(state=>state.allUsers )  //singleUser
 const user = useSelector(state=>state.logInUser)
 
  const singleUser = allUsers ? allUsers.find(user => user.id.toString() === match.params.id): null
    console.log({singleUser})

 //const dispatch= useDispatch()
 console.log({singleUser})
 if (singleUser) {
     return(
         <>
         <Link to="/users">Close View </Link>
         <p>{singleUser.name}</p>
         <p> added Blogs</p>
         <ul>
             {singleUser.blogs.map(blog=><li key={blog.id}>{blog.title}</li>)}
         </ul>
  {user.username === singleUser.username ? (
            <p>
              <button onClick={()=>dispatch(removeUserHandler(singleUser.id) )}>Delete User</button>
            </p>
          ) : null}

         </>
     )
 }

 return(
     null
 )

}

export default OneUser