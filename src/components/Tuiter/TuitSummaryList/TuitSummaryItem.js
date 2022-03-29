import React from 'react'

const defaultTuit = {
  topic: "Web Development",
  userName: "ReactJS",
  time: "2h",
  title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
  image: "https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png"
}

const TuitSummaryItem = ({ tuit: { image, time, title, topic, userName } = defaultTuit }) => {
  return (
    <div className="wd-tuit-summary__tuit">
      <div className="me-1">
        <p className="wd-tuit__annotations">
          <span>{topic}</span>
        </p>
        <p className="wd-tuit__annotations">
          <span className="wd-tuit__author">{userName}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{time}</span>
        </p>
        <p className="wd-tuit__title">{title}</p>
      </div>
      <img
        src={image}
        className="wd-tuit-summary__image"
        alt=""
      />
    </div>
  );
}

export default TuitSummaryItem;
