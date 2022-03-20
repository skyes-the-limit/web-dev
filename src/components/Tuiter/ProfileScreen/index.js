import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'

import EditProfile from './EditProfile'
import ViewProfile from './ViewProfile'

import './index.css'

const ProfileScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [editing, setEditing] = useState(false)
  const profile = useSelector(state => state.profile);
  const { name, bannerPicture, profilePicture, bio, website, location, dateOfBirth, tweetCount } = profile

  const [formValues, setFormValues] = useState({
    name: name,
    bio: bio,
    location: location,
    website: website,
    dateOfBirth: dateOfBirth
  })

  const submitForm = (values) => {
    console.log(values)

    dispatch({
      type: 'update-profile',
      profileData: values
    });
  }

  return (
    <div
      id="wd-profile"
      className='d-flex flex-column'
    >
      <div className='profile-header-container'>
        <div className='d-flex align-items-center'>
          <div className='me-4'>
            {editing ?
              <i
                className="fas fa-times"
                onClick={() => {
                  setEditing(false)
                }}
              ></i> :
              <i
                className="fas fa-arrow-left 2x"
                onClick={() => navigate(-1)}
              ></i>
            }
          </div>

          {editing ?
            <h5 className='profile-header'>Edit profile</h5> :
            <span>
              <h5 className='profile-header'>{name}</h5>
              <p className='profile-tweetCount'>{tweetCount} Tweets</p>
            </span>
          }
        </div>

        {editing &&
          <button
            onClick={() => {
              submitForm(formValues)
              setEditing(false)
            }}
            className='btn btn-light'
          >
            Save
          </button>
        }
      </div>

      <img className='profile-bannerPicture' src={bannerPicture} alt={`${name}'s banner`} />

      <div className='d-flex justify-content-between px-2'>
        <img className='profile-profilePicture' src={profilePicture} alt={`${name}'s profile`} />
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
        {editing ? <EditProfile formValues={formValues} setFormValues={setFormValues} /> : <ViewProfile />}
      </div>
    </div>
  )
}

export default ProfileScreen
