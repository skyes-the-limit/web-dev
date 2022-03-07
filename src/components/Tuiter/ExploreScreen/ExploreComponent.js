import React from 'react'

import PostSummaryList from "../PostSummaryList/index.js";

const ExploreSearch = () => {
  return (
    <div id="wd-explore-search">
      <div className="input-group">
        <span className="input-group-text">
          <i className="fa fa-search wd-color-light-grey"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search Tuiter"
        />
      </div>
      <a href="explore-settings.html">
        <i className="fa fa-cog fa-lg wd-color-white"></i>
      </a>
    </div>
  )
}

const ExploreNavigation = () => {
  return (
    <nav id="wd-explore-tabs" className="mt-2">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="#for-you">For you</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#trending">Trending</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#news">News</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#sports">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#entertainment">Entertainment</a>
        </li>
      </ul>
    </nav>
  )
}

const ExploreComponent = () => {
  return (
    <>
      <ExploreSearch />
      <ExploreNavigation />
      <div id="wd-explore-feed">
        <div id="wd-explore-featured">
          <h4>SpaceX's Starship</h4>
        </div>
        <PostSummaryList />
      </div>
    </>
  );
}

export default ExploreComponent;
