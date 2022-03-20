import profileData from "../data/profile.json";

const tuitsReducer = (state = profileData, action) => {
  switch (action.type) {
    case 'update-profile':
      console.log(state)
      return { ...state, ...action.profileData }
    default:
      return profileData
  }
}

export default tuitsReducer;