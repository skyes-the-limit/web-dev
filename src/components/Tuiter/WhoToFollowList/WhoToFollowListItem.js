import React from 'react'

const WhoToFollowListItem = ({ who: { avatarIcon, userName, handle } }) => {

  return (
    <div className="tuiter-follow-recommendation-item">
      <div className="profile-summary">
        <img src={avatarIcon} alt={`${userName}'s avatar`} />
        <div>
          <p><b>{userName}</b></p>
          <p>@{handle}</p>
        </div>
      </div>
      <button className="btn">Follow</button>
    </div>
  );
}

export default WhoToFollowListItem;
