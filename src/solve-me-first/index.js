const { invalidInputErrorMessage } = require("./constants");

function solveMeFirst(a, b) {
  if (
    a < 0 ||
    b < 0 ||
    !Number.isInteger(a) ||
    !Number.isInteger(b) ||
    typeof a !== "number" ||
    typeof b !== "number") {
    throw new Error(invalidInputErrorMessage);
  }
  return a + b;
}

module.exports = solveMeFirst;
