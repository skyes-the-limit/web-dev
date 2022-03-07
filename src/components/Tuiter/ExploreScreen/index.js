import React from 'react'

import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

import './index.css'

const ExploreScreen = () => {
  return (
    <div class="row mt-2">
      <div
        id="tuiter-nav"
        class="col-2 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2"
      >
        <NavigationSidebar active={'explore'} />
      </div>
      <div
        id="wd-explore-body"
        class="col-10 col-sm-9 col-md-10 col-lg-6 col-xl-6 col-xxl-7"
      >
        <ExploreComponent />
      </div>
      <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-3">
        <WhoToFollowList />
      </div>
    </div>
  )
}

export default ExploreScreen