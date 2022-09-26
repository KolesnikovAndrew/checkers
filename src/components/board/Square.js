import React, { useState } from "react";
import Checker from "../checker/Checker";
import TurnToken from "../turnToken/TurnToken";
import styles from "./square.module.scss";
function Square({
  color,
  haveChecker = false,
  checkerColor,
  squareId,
  selectChecker,
  availableTurn = false,
}) {
  return (
    <div className={styles.square} style={{ backgroundColor: color }}>
      {haveChecker && (
        <Checker
          color={checkerColor}
          squareId={squareId}
          selectChecker={selectChecker}
        ></Checker>
      )}
      {availableTurn && <TurnToken></TurnToken>}
    </div>
  );
}

export default Square;
