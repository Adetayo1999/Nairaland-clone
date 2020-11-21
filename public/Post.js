import React from 'react'
import "./App.css"
export const Post = ({posts , loading}) => {

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
        <ul className ="list-group mb-4 listing">
            {
                posts.map((post , num) => 
            <li className ="list-group-item" key ={num}>Email: <b>{post.email}</b></li>
                )
            }
        </ul>
    )
}
