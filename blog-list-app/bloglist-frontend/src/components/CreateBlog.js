import React, { useState ,useRef} from "react";
import {useDispatch} from "react-redux"
import {createBlog } from "../reducers/blogReducer"
const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const noteFormRef = useRef();
 const dispatch= useDispatch()
 
  const handleCreateBlog = (event) => {
    //noteFormRef.current.togglevisibility();
    event.preventDefault();
    const newBlogObject = {
      title: title,
      url: url,
      author: author,
    };
   
   dispatch(  createBlog(newBlogObject));
    setTitle("");
    setAuthor("");
    setUrl("");
   
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <form onSubmit={handleCreateBlog}>
      <div>
        title
        <input value={title} onChange={handleTitleChange} />
      </div>
      <div>
        author
        <input type="text" value={author} onChange={handleAuthorChange} />
      </div>
      <div>
        url
        <input type="text" value={url} onChange={handleUrlChange} />
      </div>
      <button type="submit">create</button>
    </form>
  );
};
export default CreateBlog;
