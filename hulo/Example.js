import Axios from "axios";
import React , {useState , useEffect } from "react";
import './App.css';

function App() {
  const [Posts , setPosts] = useState([]);
  // const [currentPage , setCurrentPage] = useState(0);
  // const [postPerPage , setPostPerPage] = useState(10);
  const [Loading , setLoading] = useState(false)
   useEffect(() => {
           setLoading(true)
    Axios("http://localhost/usersList.json")
    .then(result => setPosts(result.data))
       setLoading(false)
   
   }, [])
  
   console.log(Posts , Loading)
  return (
    <div className="app">
        { Loading ? 
          <div className ="loading">
          <div className ="load">
          </div>
          <div className ="load">
          </div>
       </div>

       :

       <ul className ="list-group">
          {
            Posts.map((post , num) => 
          <li className ="list-group-item" key ={num}>{post.firstName} {post.lastName}</li>
              )
          }
          </ul>

     }
            
    </div>
  );
}

export default App;
