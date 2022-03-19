import React, { useState } from 'react'
import { useSelector } from "react-redux";

import EditProfile from './EditProfile'
import ViewProfile from './ViewProfile'

import './index.css'

const ProfileScreen = () => {
  let [editing, setEditing] = useState(false)
  const profile = useSelector(state => state.profile);
  const { firstName, lastName, profilePicture, bannerPicture, tweetCount } = profile

  return (
    <div
      id="wd-profile"
      className='d-flex flex-column'
    >
      <div className='profile-header-container'>
        <div className='d-flex align-items-center'>
          <div className='me-4'>
            {editing ?
              <i className="fas fa-times"></i> :
              <i className="fas fa-arrow-left 2x"></i>
            }
          </div>

          {editing ?
            <h5 className='profile-header'>Edit profile</h5> :
            <span>
              <h5 className='profile-header'>{firstName} {lastName}</h5>
              <p className='profile-tweetCount'>{tweetCount} Tweets</p>
            </span>
          }
        </div>

        {editing &&
          <button
            onClick={() => setEditing(false)}
            className='btn btn-light'
          >
            Save
          </button>
        }
      </div>

      <img className='profile-bannerPicture' src={bannerPicture} alt={`${firstName}'s banner`} />

      <div className='d-flex justify-content-between px-2'>
        <img className='profile-profilePicture' src={profilePicture} alt={`${firstName}'s profile`} />
        {!editing &&
          <button
            onClick={() => setEditing(true)}
            className='btn btn-secondary'
          >
            Edit profile
          </button>
        }
      </div>

      <div className='px-2'>
        {editing ? <EditProfile /> : <ViewProfile />}
      </div>
    </div>
  )
}

export default ProfileScreen
