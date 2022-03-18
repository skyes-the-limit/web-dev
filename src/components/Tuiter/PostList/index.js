import React from 'react'

import PostItem from "./PostItem.js";
import { useSelector } from "react-redux";

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
