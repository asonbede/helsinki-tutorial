import React from "react";
import { useDispatch, useSelector } from "react-redux";
import  {removeBlogHandler } from "../reducers/blogReducer"
import  CommentForm from "./CommentForm"
import  Comments from "./Comments"
import {useRouteMatch,Link} from "react-router-dom"
const OneBlog = () => {
  console.log("one blog running")
  const dispatch = useDispatch();
 let match = useRouteMatch('/blogs/:id')
  const blogs = useSelector(state=>state.blogs)
const blog = blogs ? blogs.find(blog => blog.id.toString() === match.params.id): null 
 console.log({blog})
 const user = useSelector(state=>state.logInUser)
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  


  if (blog) {
      
  
   
    return (
      <div style={blogStyle}>
        <div>
   
    <p>   <Link to ="/"> Close View </Link></p>
      
          {blog.title} {blog.author}
         
          <p>Url:{blog.url}</p>
          <p>Likes:{blog.likes}</p>
          <p>Author:{blog.author}</p>
          {user.username === blog.user.username ? (
            <p>
              <button onClick={()=>dispatch(removeBlogHandler(blog.id))}>Delete</button>
            </p>
          ) : null}
        </div>
        <hr />
        <CommentForm blog={blog} />
        <hr />
        <Comments blog={blog} />
      </div>
    );
          }

          return(

            null
          )
  }

  

export default OneBlog

