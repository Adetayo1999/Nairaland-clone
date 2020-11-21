import React from 'react';
import Paginate from './Paginate';
import Linked from './Link';
import "./Posts.css";

function Posts({loading , posts , postPerPage , totalPosts , paginateMe}) {
    return (
      <div className="body-posts">
        <div className="body-title">
          <Linked path="latest">Latest News</Linked> /
          <Linked path="twitter">Twitter</Linked> /
          <Linked path="facebook">Facebook</Linked> /
          <Linked path="advertise">How to Advertise</Linked>
        </div>
        <div className="posts">
          {posts.map((post, num) => (
            <div key={num} className="post">
              <span className="post-span">{">>"}</span>
              <Linked path="">{post.post}</Linked><span className="post-span">{"<<"}</span>
            </div>
          ))}
        </div>
        <div className="post-bottom">
          <Paginate totalPosts={totalPosts} postPerPage={postPerPage} paginateMe={paginateMe}/> / <span className="mods"></span> <Linked path="mods" >Mail Supermods
          </Linked>
        </div>
      </div>
    );
}

export default Posts
