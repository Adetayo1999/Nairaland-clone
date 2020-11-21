import React , {useState , useEffect} from 'react'
import Header from './Header'
import {BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Widgets from "./Widgets";
import Posts from "./Posts";
import Axios from 'axios';
import Footer from './Footer';
function App() {
    const [user , setUser] = useState(null);
   const [loading, setLoading] = useState(false);
   const [posts, setPosts] = useState([]);
   const [postPerPage] = useState(120);
   const [currentPage, setCurrentPage] = useState(1);
   useEffect(() => {
      const Posts = async () => {
         setLoading(true);
         const res = await Axios("http://localhost/Posts.json");
            setPosts(res.data);
         setLoading(false);
      }
      Posts();
   }, [])
  const indexOfLastPage = postPerPage * currentPage;
   const indexOfFirstPage = indexOfLastPage - postPerPage;
   const currentPost = posts.slice(indexOfFirstPage, indexOfLastPage);
   const paginateMe = num => setCurrentPage(num);
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/">
              <Header user={user} />
              <Dashboard />
              <Widgets />
              <Posts
                posts={currentPost}
                loading={loading}
                postPerPage={postPerPage}
                      totalPosts={posts.length}
                      paginateMe = {paginateMe}
              />
                   <Widgets />
                   <Footer />
            </Route>
          </Switch>
        </Router>

        {
          //  news block
        }
        {
          // widgets
        }
        {
          //  members available
        }
        {
          //  footer
        }
      </div>
    );
}

export default App
