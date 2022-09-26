import React, { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import Square from "./Square";
import styles from "./Board.module.scss";
import findTurns from "../../helpers/findTurns";
function Board() {
  const [selectedChecker, selectChecker] = useState([1, "black"]);

  //Draw board
  const board = [];
  let redRow = [];
  let blackRow = [];

  for (let i = 0; i < 8; i++) {
    i % 2 == 0 ? redRow.push("red") : redRow.push("black");
  }
  for (let i = 0; i < 8; i++) {
    i % 2 != 0 ? blackRow.push("red") : blackRow.push("black");
  }
  for (let i = 0; i < 8; i++) {
    i % 2 == 0 ? board.push(redRow) : board.push(blackRow);
  }

  //Draw checkers

  var checkerBoard = [];
  {
    board.map((rows, row) => {
      if (row < 3) {
        rows.map((squareColor, squareId) => {
          if (squareColor == "red") {
            checkerBoard.push("none");
          } else {
            checkerBoard.push("red");
          }
        });
      }
      if (row >= 3 && row < 5) {
        return rows.map(() => {
          checkerBoard.push("none");
        });
      }
      if (row >= 5) {
        return rows.map((squareColor, squareId) => {
          if (squareColor == "red") {
            checkerBoard.push("none");
          } else {
            checkerBoard.push("black");
          }
        });
      }
    });
  }

  let turns =
    checkerBoard.length != 0 ? findTurns(selectedChecker, checkerBoard) : [];

  return (
    <>
      <div className={styles.board}>
        {/* Map through all board, draw squares and checkers */}
        {board.map((rows, row) => {
          if (row < 3) {
            return rows.map((squareColor, squareId) => {
              let square = squareId + 1 + row * 8;
              if (squareColor == "red") {
                checkerBoard.push("none");
                return (
                  <Square
                    color={squareColor}
                    squareId={square}
                    selectChecker={selectChecker}
                    availableTurn={turns.includes(square) ? true : false}
                  ></Square>
                );
              } else {
                checkerBoard.push("red");
                return (
                  <Square
                    color={squareColor}
                    haveChecker={true}
                    checkerColor="red"
                    squareId={square}
                    selectChecker={selectChecker}
                    availableTurn={turns.includes(square) ? true : false}
                  ></Square>
                );
              }
            });
          }
          if (row >= 3 && row < 5) {
            return rows.map((squareColor, squareId) => {
              let square = squareId + 1 + row * 8;

              checkerBoard.push("none");
              return (
                <Square
                  color={squareColor}
                  squareId={square}
                  selectChecker={selectChecker}
                  availableTurn={turns.includes(square) ? true : false}
                ></Square>
              );
            });
          }
          if (row >= 5) {
            return rows.map((squareColor, squareId) => {
              let square = squareId + 1 + row * 8;

              if (squareColor == "red") {
                checkerBoard.push("none");
                return (
                  <Square
                    color={squareColor}
                    squareId={square}
                    selectChecker={selectChecker}
                    availableTurn={turns.includes(square) ? true : false}
                  ></Square>
                );
              } else {
                checkerBoard.push("black");
                return (
                  <Square
                    color={squareColor}
                    haveChecker={true}
                    checkerColor="black"
                    squareId={square}
                    selectChecker={selectChecker}
                    availableTurn={turns.includes(square) ? true : false}
                  ></Square>
                );
              }
            });
          }
        })}
      </div>
    </>
  );
}

export default Board;
