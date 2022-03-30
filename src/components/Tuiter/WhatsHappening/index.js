import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createTuit } from "../actions/tuits-actions";

import "./index.css"

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();

  return (
    <div id="whats-happening">
      <textarea
        value={whatsHappening}
        onChange={(event) => setWhatsHappening(event.target.value)}
        placeholder="What's happening?"
      >
      </textarea>
      <button className="btn btn-primary" onClick={() => createTuit(dispatch, whatsHappening)}>
        Tuit
      </button>
    </div>
  );
}

export default WhatsHappening;
