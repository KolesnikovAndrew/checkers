import React from "react";

function useIsLast(checkerId) {
  checkerId -= 1;
  if (checkerId === 8) return true;
  if (Number.isInteger(checkerId / 8)) {
    return true;
  }
  return false;
}

export default useIsLast;
