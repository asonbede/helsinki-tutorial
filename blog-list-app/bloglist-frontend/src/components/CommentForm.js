import React from "react"
import {createComment} from "../reducers/blogReducer" 
import {useDispatch,useSelector} from "react-redux"

const CommentForm = ({blog})=>{
    const dispatch= useDispatch()
    console.log({dispatch})

    const handleSubmit=(event)=>{
        console.log("sending comment")
        console.log(  event.target.comment.value)
      
        event.preventDefault()
        dispatch(createComment(blog.id,{...blog,comments:[...blog.comments,event.target.comment.value]}))


        
      }
return(
    <div>
        <h2>Leave a Comment</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="comment" />
            <button>Add Comment</button>
       </form>
    </div>
)

}
export default CommentForm