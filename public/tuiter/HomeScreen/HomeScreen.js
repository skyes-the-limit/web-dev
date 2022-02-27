/* eslint-disable no-undef */

import NavigationSidebar from "../NavigationSidebar/NavigationSideBar.js";
import PostSummaryList from "../PostSummaryList/index.js"
import PostList from "./PostList.js";

(function ($) {
  $('#wd-home').append(`
      <div class="row">
        <div
          id="tuiter-nav"
          class="col-2 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2"
        >
          ${NavigationSidebar("Home")}
        </div>
        <div
          id="wd-home-body"
          class="col-10 col-sm-9 col-md-10 col-lg-6 col-xl-6 col-xxl-7"
        >
          ${PostList()}
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-3">
          ${PostSummaryList()}
        </div>
      </div>
    `);
})($);
