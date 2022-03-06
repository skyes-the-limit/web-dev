import React from 'react'

const defaultPost = {
  topic: "Web Development",
  userName: "ReactJS",
  time: "2h",
  title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
  image: "https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png"
}

const PostSummaryItem = ({ image, time, title, topic, userName } = defaultPost) => {
  return (
    <div class="wd-post-summary__post">
      <div>
        <p class="wd-post__annotations">
          <span>{topic}</span>
        </p>
        <p class="wd-post__annotations">
          <span class="wd-post__author">{userName}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{time}</span>
        </p>
        <p class="wd-post__title">{title}</p>
      </div>
      <img
        src={image}
        class="wd-post-summary__image"
        alt=""
      />
    </div>
  );
}

export default PostSummaryItem;
