import React, { Component } from 'react'

const Post = (props) => {
    return (
        <div>
            {console.log(props)}
            <p>student name : {props.studentName}</p>
            <p>score : {props.score}</p>
        </div>
    )
}

// class Post extends Component{
//     render() {
//         return (
//             <div>
//                 {console.log(this.props)}
//                 <p>student name : {this.props.studentName}</p>
//                 <p>score : {this.props.score}</p>
//             </div>
//         )
//     }
// }
export default Post