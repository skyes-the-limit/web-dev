import React from 'react'

import PostSummaryItem from "./PostSummaryItem.js";
import posts from './posts.json'

const PostSummaryList = () => {
  return (
    <div id="wd-explore-post-list">
      {posts.map(post => {
        return <PostSummaryItem post={post} />
      })}
    </div>
  );
}

export default PostSummaryList;
