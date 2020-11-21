import Axios from 'axios';
import React, {useState , useEffect} from 'react';
import Pag from './Pag';
import Posts from './Posts';


function App() {
    const [posts , setPosts] = useState([]);
    const [loading , setLoading] = useState(false);
    const [currentPage , setCurrentPage] = useState(1);
    const [postPerPage , setPostPerPage] = useState(7);

    useEffect(() => {
     const Hello = async () => {
           setLoading(true);
         const res = await Axios.get("http://localhost/usersList.json");
         setPosts(res.data);
         setLoading(false);

     }

     Hello();


    } ,[])
    const indexOfLastPage = postPerPage * currentPage;
    const indexOfFirstPage = indexOfLastPage - postPerPage;
    const currentPost = posts.slice(indexOfFirstPage , indexOfLastPage);
    const paginate = number => setCurrentPage(number);
    return (
        <div className="container">
            <h1 className ="text-primary my-3 text-center">My Space</h1>
            <Posts posts={currentPost} loading={loading}/>
            <Pag totalPosts={posts.length}  postPerpage={postPerPage} paginate ={paginate}/>
        </div>
    )
}

export default App
