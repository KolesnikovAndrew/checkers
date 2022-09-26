import React from "react";

import styles from "./App.module.scss";
import Board from "./components/board/Board";

function App() {
  return (
    <div className={styles.App}>
      <Board />
    </div>
  );
}

export default App;
