import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return (`
  <div id="wd-explore-search">
    <div class="input-group">
      <span class="input-group-text">
        <i class="fa fa-search wd-color-light-grey"></i>
      </span>
      <input
        type="text"
        class="form-control"
        placeholder="Search Tuiter"
      />
    </div>
    <a href="explore-settings.html">
      <i class="fa fa-cog fa-lg wd-color-white"></i>
    </a>
  </div>

  <nav id="wd-explore-tabs" class="mt-2">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#for-you">For you</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#trending">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#news">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#sports">Sports</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#entertainment">Entertainment</a>
      </li>
    </ul>
  </nav>

  <div id="wd-explore-feed">
    <div id="wd-explore-featured">
      <h4>SpaceX's Starship</h4>
    </div>

    ${PostSummaryList()}
  </div>
  `);
}

export default ExploreComponent;
