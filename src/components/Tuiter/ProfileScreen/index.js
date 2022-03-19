import React, { useState } from 'react'
import { useSelector } from "react-redux";

import EditProfile from './EditProfile'
import ViewProfile from './ViewProfile'

import './index.css'

const ProfileScreen = () => {
  let [editing, setEditing] = useState(false)
  const profile = useSelector(state => state.profile);
  console.log(profile)

  return (
    <div
      id="wd-profile"
    >
      {editing ?
        <i className="fas fa-times"></i> :
        <i className="fas fa-arrow-left"></i>
      }
      <h2>{editing ? "Edit profile" : "USERNAME"}</h2>
      {editing &&
        <button onClick={() => setEditing(false)}>
          Save
        </button>
      }
      <p>Banner image</p>
      <p>Profile image potentially with overlay</p>
      {!editing &&
        <button onClick={() => setEditing(true)}>
          Edit profile
        </button>
      }
      {editing ? <EditProfile /> : <ViewProfile />}
    </div>
  )
}

export default ProfileScreen
