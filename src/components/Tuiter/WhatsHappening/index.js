import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./index.css"

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();

  const tuitClickHandler = () => {
    dispatch({
      type: 'create-tuit',
      tuit: whatsHappening
    });
  }

  return (
    <div id="whats-happening">
      <textarea
        value={whatsHappening}
        onChange={(event) => setWhatsHappening(event.target.value)}
        placeholder="What's happening?"
      >
      </textarea>
      <button className="btn btn-primary" onClick={tuitClickHandler}>
        Tuit
      </button>
    </div>
  );
}

export default WhatsHappening;
