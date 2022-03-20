import React from 'react'

import PostList from "../PostList/index.js";
import WhatsHappening from '../WhatsHappening/index.js';

import './index.css'

const HomeScreen = () => {
  return (
    <div
      id="wd-home-body"
    >
      <WhatsHappening />
      <PostList />
    </div>
  )
}

export default HomeScreen