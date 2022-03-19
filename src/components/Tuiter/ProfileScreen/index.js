import React, { useState } from 'react'
import EditProfile from './EditProfile'

import './index.css'
import ViewProfile from './ViewProfile'

const ProfileScreen = () => {
  let [editing, setEditing] = useState(false)

  return (
    <div
      id="wd-profile"
    >
      {editing ?
        <i className="fas fa-times"></i> :
        <i class="fas fa-arrow-left"></i>
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
