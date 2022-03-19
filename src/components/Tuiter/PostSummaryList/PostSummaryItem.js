import React from 'react'

const defaultPost = {
  topic: "Web Development",
  userName: "ReactJS",
  time: "2h",
  title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
  image: "https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png"
}

const PostSummaryItem = ({ post: { image, time, title, topic, userName } = defaultPost }) => {
  return (
    <div className="wd-post-summary__post">
      <div className="me-1">
        <p className="wd-post__annotations">
          <span>{topic}</span>
        </p>
        <p className="wd-post__annotations">
          <span className="wd-post__author">{userName}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{time}</span>
        </p>
        <p className="wd-post__title">{title}</p>
      </div>
      <img
        src={image}
        className="wd-post-summary__image"
        alt=""
      />
    </div>
  );
}

export default PostSummaryItem;
