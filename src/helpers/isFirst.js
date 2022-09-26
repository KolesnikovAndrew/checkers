import React from "react";

function isFirst(checkerId) {
  checkerId -= 1;
  if (checkerId === 0) return true;
  if (Number.isInteger(checkerId / 8)) {
    return true;
  }
  return false;
}

export default isFirst;
