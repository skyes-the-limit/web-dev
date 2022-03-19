import React from 'react'
import { useSelector } from "react-redux";

import './index.css'

const ViewProfile = () => {
  const profile = useSelector(state => state.profile);
  const { firstName, lastName, handle, bio, website, location, dateOfBirth, dateJoined, followingCount, followersCount } = profile

  return (
    <div
      id="wd-profile"
      className='py-2'
    >
      <h6 className='profile-name'>{firstName} {lastName}</h6>
      <div className='profile-handle'>@{handle}</div>
      <div className='profile-bio'>{bio}</div>

      <div className='profile-demographics'>
        <span>
          <i class="fas fa-map-marker-alt"></i>
          {location}
        </span>
        <span>
          <i class="fas fa-birthday-cake"></i>
          Born {dateOfBirth}
        </span>
        <span>
          <i class="fas fa-calendar-alt"></i>
          Joined {dateJoined}
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
