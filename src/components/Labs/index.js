import React from "react";
import { Link } from "react-router-dom";

// import Styles from "./Styles";
// import Classes from "./Classes";
// import ConditionalOutput from "./ConditionalOutput";
// import TodoList from "./Todo/TodoList";
import ReduxExamples from "./redux-examples";

const Labs = () => {
  return (
    <div>
      <h1>Labs</h1>
      <Link to="/labs">
        Labs
      </Link> |
      <Link to="/tuiter/home">
        Tuiter
      </Link>

      {/* <Styles />
      <Classes />
      <ConditionalOutput />
      <TodoList /> */}
      <ReduxExamples />
    </div>
  )
};

export default Labs;
