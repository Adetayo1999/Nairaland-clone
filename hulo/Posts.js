import React from 'react'
import "./App.css";
function Posts({loading , posts}) {
if(loading){
    return ( 
    <div className ="app">
    <div className ="loading">
     <div className ="load">
     </div>
     <div className ="load">
     </div>
  </div>
    </div>
    )
}
    return (
        <ul className ="list-group listing mb-5">
            {
                posts.map((post , num) => 
            <li className ="list-group-item" key={num}>Email: <b>{post.email}</b></li>
                )
            }
        </ul>
    )
}

export default Posts
