import WhoToFollowListItem from "./WhoToFollowListItem";
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
  const who = useSelector((state) => state);

  return (
    <div
      id="tuiter-follow-recommendations"
      className="d-none d-lg-block col-lg-4 col-xl-4 col-xxl-3"
    >
      <div className="card">
        <h5>Who to follow</h5>
        {who.map(item => {
          return <WhoToFollowListItem who={item} key={item.handle} />;
        })}
      </div>
    </div>
  );
}

export default WhoToFollowList;
