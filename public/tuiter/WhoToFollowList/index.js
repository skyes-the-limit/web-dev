import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
  return (`
    <div
      id="tuiter-follow-recommendations"
      class="d-none d-lg-block col-lg-4 col-xl-4 col-xxl-3"
    >
      <div class="card">
        <h5>Who to follow</h5>
        ${who.map(item => {
            return (WhoToFollowListItem(item));
          }).join('')
        }
        <a href="#">Show more</a>
      </div>
    </div>
  `);
}

export default WhoToFollowList;
