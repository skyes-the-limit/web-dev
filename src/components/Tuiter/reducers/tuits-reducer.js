const tuitsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FIND_ALL_TUITS':
      return action.tuits;
    case 'like-tuit':
      return state.map(tuit => {
        if (tuit._id === action.tuit._id) {
          if (tuit.liked === true) {
            tuit.liked = false;
            tuit.stats.likes--;
          } else {
            tuit.liked = true;
            tuit.stats.likes++;
          }
          return tuit;
        } else {
          return tuit;
        }
      });
    case 'delete-tuit':
      return state.filter(tuit => tuit._id !== action.tuit._id);
    case 'create-tuit':
      const newTuit = {
        tuit: action.tuit,
        _id: (new Date()).getTime() + '',
        postedBy: {
          username: "ReactJS"
        },
        stats: {
          retuits: 111,
          likes: 222,
          replies: 333
        }
      }
      return [newTuit, ...state,];
    default:
      return state
  }
}

export default tuitsReducer;