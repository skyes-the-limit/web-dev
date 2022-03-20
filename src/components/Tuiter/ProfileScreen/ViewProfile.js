import React from 'react'
import { useSelector } from "react-redux";

import './index.css'

const ViewProfile = () => {
  const profile = useSelector(state => state.profile);
  const { name, handle, bio, /*website, */location, dateOfBirth, dateJoined, followingCount, followersCount } = profile
  // TODO: How should website be displayed?

  const dateFormatOptions = { month: "long", day: "numeric", year: "numeric" };
  const dobDate = new Date(dateOfBirth)
  const dobDateStr = new Intl.DateTimeFormat("en-US", dateFormatOptions).format(dobDate);
  const joinedDate = new Date(dateJoined)
  const joinedDateStr = new Intl.DateTimeFormat("en-US", dateFormatOptions).format(joinedDate);

  return (
    <div
      id="wd-profile"
      className='py-2'
    >
      <h6 className='profile-name'>{name}</h6>
      <div className='profile-handle'>@{handle}</div>
      <div className='profile-bio'>{bio}</div>

      <div className='profile-demographics'>
        <span>
          <i className="fas fa-map-marker-alt"></i>
          {location}
        </span>
        <span>
          <i className="fas fa-birthday-cake"></i>
          Born {dobDateStr}
        </span>
        <span>
          <i className="fas fa-calendar-alt"></i>
          Joined {joinedDateStr}
        </span>
      </div>

      <div className='profile-stats'>
        <span><b>{followingCount}</b> Following</span>
        <span><b>{followersCount}</b> Followers</span>
      </div>
    </div>
  )
}

export default ViewProfile
