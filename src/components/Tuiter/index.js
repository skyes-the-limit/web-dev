import { Outlet } from "react-router-dom";

import NavigationSidebar from "./NavigationSidebar";
// import WhoToFollowList from "./WhoToFollowList";

import "./tuiter.css";

const Tuiter = () => {
  return (
    <div className="row mt-2">
      <div
        id="tuiter-nav"
        className="col-2 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2"
      >
        <NavigationSidebar />
      </div>

      <div
        id="tuiter-body"
        className="col-10 col-sm-9 col-md-10 col-lg-6 col-xl-6 col-xxl-7"
      >
        <Outlet />
      </div>

      <div
        id="tuiter-who-to-follow"
        className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-3"
      >
        <h1>Who to Follow</h1>
        {/* <WhoToFollowList /> */}
      </div>
    </div>
  );
};

export default Tuiter;
