import { useState, useEffect } from "react";
import isFirst from "./isFirst";

function findTurns(selectedChecker, board) {
  var validMoves = [];
  let squareId = selectedChecker[0];
  const checkerColor = selectedChecker[1];
  const isFirstCol = isFirst(squareId);

  //which color
  checkerColor == "red" ? (squareId += 8) : (squareId -= 8);
  //is first col
  validMoves = validMoves.concat(
    isFirstCol ? squareId + 1 : [squareId - 1, squareId + 1]
  );

  //is last col

  //are there allies
  while (validMoves.length != 0 && checkerColor == board[validMoves[0] - 1]) {
    validMoves.shift();
  }

  return validMoves;
}

export default findTurns;
