import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"

const Blogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(({ blogs }) => {
    return blogs;
    });
  //console.log("kkkkjj", notes);
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

 if(blogs){  return (
    <div style={blogStyle}>

<ul>
      {blogs.map(blog =>
        <li key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>{blog.title} {blog.author}</Link>
        </li>
      )}
    </ul>



    </div>
  ) }
  return null
};



export default Blogs;
