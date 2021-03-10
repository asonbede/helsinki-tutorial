import React from "react"
//window.location.reload()
const Comments=({blog})=>{
    return(
        <div>
        {
            blog.comments.length?blog.comments.map((comment,i)=><li key={`${i}-comment`}> {comment}</li>):
            <ul><li>No Comment Yet, Leave One</li></ul>
        }

        </div>
    )

}
export default Comments