import React from 'react'
import { useSelector } from "react-redux";

import PostItem from "./PostItem.js";

const PostList = () => {
  const posts = useSelector(state => state.tuits);

  return (
    <div className="wd-post-list">
      {posts.map(post => {
        return <PostItem post={post} key={post._id}/>
      })}
    </div>
  );
}

export default PostList;
