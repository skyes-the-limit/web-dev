import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as service from '../services/tuits-service';

import TuitItem from "./TuitItem.js";

const TuitList = () => {
  const tuits = useSelector(state => state.tuits);
  const dispatch = useDispatch();

  const findAllTuits = async () => {
    const tuits = await service.findAllTuits();
    dispatch({
      type: 'FIND_ALL_TUITS',
      tuits: tuits
    });
  }
  useEffect(findAllTuits, [dispatch]);

  return (
    <div className="wd-tuit-list">
      {tuits.map(tuit => {
        return <TuitItem tuit={tuit} key={tuit._id} />
      })}
    </div>
  );
}

export default TuitList;
