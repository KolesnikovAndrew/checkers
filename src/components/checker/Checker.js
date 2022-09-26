import React, { useState } from "react";
import styles from "./Checker.module.scss";
function Checker({ color, squareId, selectChecker }) {
  const handleCheckerSelect = () => {
    selectChecker([squareId, color]);
  };

  return (
    <div
      onClick={handleCheckerSelect}
      className={styles.checker}
      style={{ backgroundColor: color }}
    >
      {squareId}
    </div>
  );
}

export default Checker;
