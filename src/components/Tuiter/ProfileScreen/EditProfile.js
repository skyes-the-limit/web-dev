import React from 'react'

import './index.css'

const EditProfile = ({ formValues, setFormValues }) => {
  const { name, bio, location, website, dateOfBirth } = formValues
  const updateFormValue = (e) => {
    setFormValues({ ...formValues, ...{ [e.target.id]: e.target.value } })
  }

  return (
    <div
      id="wd-profile-edit"
    >
      <div className='profile-edit-field'>
        <label htmlFor="name">Name</label>
        <textarea
          id="name"
          value={name}
          onChange={updateFormValue}
          rows={1}
        />
      </div>

      <div className='profile-edit-field'>
        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          value={bio}
          onChange={updateFormValue}
          rows={3}
        />
      </div>

      <div className='profile-edit-field'>
        <label htmlFor="location">Location</label>
        <textarea
          id="location"
          value={location}
          onChange={updateFormValue}
          rows={1}
        />
      </div>

      <div className='profile-edit-field'>
        <label htmlFor="website">Website</label>
        <textarea
          id="website"
          value={website}
          onChange={updateFormValue}
          rows={1}
        />
      </div>

      <div className='profile-edit-field'>
        <label htmlFor="dateOfBirth">Birth date</label>
        <input
          id="dateOfBirth"
          type="date"
          value={dateOfBirth}
          onChange={updateFormValue}
        />
      </div>
    </div>
  )
}

export default EditProfile
