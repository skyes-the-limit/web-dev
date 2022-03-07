import React from 'react'

import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js"
import PostList from "../PostList/index.js";

import './index.css'

const HomeScreen = () => {
  return (
    <div className="row">
      <div
        id="tuiter-nav"
        className="col-2 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2"
      >
        <NavigationSidebar active='home' />
      </div>
      <div
        id="wd-home-body"
        className="col-10 col-sm-9 col-md-10 col-lg-6 col-xl-6 col-xxl-7"
      >
        <PostList />
      </div>
      <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-3">
        <PostSummaryList />
      </div>
    </div>
  )
}

export default HomeScreen