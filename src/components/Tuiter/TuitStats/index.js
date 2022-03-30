import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import cx from 'classnames'

import { updateTuit } from "../actions/tuits-actions";

// https://www.codegrepper.com/code-examples/javascript/javascript+convert+number+from+thousands+to+k+and+millions+to+m
const numFormatter = (num) => {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
  } else {
    return num;
  }
}

const TuitStats = ({ tuit }) => {
  const [stats, setStats] = useState(tuit.stats)
  const [liked, setLiked] = useState(tuit.liked)

  const dispatch = useDispatch();
  const likeTuit = () => {
    const newStats = { ...stats, likes: liked ? stats.likes - 1 : stats.likes + 1 }
    setStats(newStats)

    const newLiked = !liked
    setLiked(newLiked)

    const newTuit = {
      ...tuit,
      stats: newStats,
      liked: newLiked
    }
    updateTuit(dispatch, newTuit)
  }

  return (
    <div className="wd-tuit__interactions d-flex justify-content-between">
      <div>
        <i className="far fa-comment"></i>
        {numFormatter(stats.replies)}
      </div>
      <div>
        <i className="fas fa-redo"></i>
        {numFormatter(stats.retuits)}
      </div>
      <div onClick={() => likeTuit()}>
        <i className={cx("far fa-heart", liked ? 'wd-color-red' : '')}></i>
        {numFormatter(stats.likes)}
      </div>
      <div>
        <i className="far fa-share-square"></i>
      </div>
    </div >
  );
}

export default TuitStats;
