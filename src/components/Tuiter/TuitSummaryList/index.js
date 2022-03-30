import React from 'react'

import TuitSummaryItem from "./TuitSummaryItem.js";
import tuits from './posts.json'

const TuitSummaryList = () => {
  return (
    <div id="wd-explore-tuit-list">
      {tuits.map(tuit => {
        return <TuitSummaryItem tuit={tuit} />
      })}
    </div>
  );
}

export default TuitSummaryList;
