import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllTuits } from "../actions/tuits-actions";

import TuitItem from "./TuitItem.js";

const TuitList = () => {
  const tuits = useSelector(state => state.tuits);
  const dispatch = useDispatch();
  
  useEffect(() => findAllTuits(dispatch), [dispatch]);

  return (
    <div className="wd-tuit-list">
      {tuits.map(tuit => {
        return <TuitItem tuit={tuit} key={tuit._id} />
      })}
    </div>
  );
}

export default TuitList;
