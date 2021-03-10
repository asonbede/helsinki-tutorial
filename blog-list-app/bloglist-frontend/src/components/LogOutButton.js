import React from "react";
import {useSelector} from "react-redux"
import { Redirect } from "react-router-dom";
const LogOutButton = ({handleLogout})=>{
    console.log("loggingouttt")
   const user= useSelector(state=>state.logInUser)
//    window.localStorage.clear()//removeItem("loggedNoteappUser");
handleLogout()
    return(
       <Redirect to="/login"/>
           
       
    )
}
export default LogOutButton