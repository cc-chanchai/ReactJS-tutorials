import React from 'react'

const Post2 = (props) => {
    return (
        <div>
            <h2>Post2 id: {props.id} </h2>
            <p>Comment : </p>
            <p> {props.children} </p>
        </div>
    )
}
export default Post2