import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";

const WhoToFollowList = () => {
  return (
    <div
      id="tuiter-follow-recommendations"
      className="d-none d-lg-block col-lg-4 col-xl-4 col-xxl-3"
    >
      <div className="card">
        <h5>Who to follow</h5>
        {
          who.map(item => {
            return <WhoToFollowListItem who={item} key={item.handle} />;
          })
        }
        <a href="#">Show more</a>
      </div>
    </div>
  );
}

export default WhoToFollowList;
