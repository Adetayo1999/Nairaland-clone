import Axios from "axios";
import React, { useState, useEffect } from "react";
import Pag from "./Pag";
import { Post } from "./Post";

const App = () => {
  const [Posts, setPosts] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(7);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await Axios.get("http://localhost/usersList.json");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = Posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = number => setCurrentPage(number);

  return (
    <div className="container">
      <h1 className="text-primary text-center my-3">My Blog</h1>
      <Post posts={currentPost} loading={Loading} />
      <Pag
        postPerPage={postPerPage}
        totalPosts={Posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
