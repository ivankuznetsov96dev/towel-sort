
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const newArray = matrix;
  if (!newArray) return [];
  for (i = 1; i < newArray.length; i++) {
    if (i % 2) {
      newArray[i].reverse();
    }
  }
  // return [...newArray];
  return newArray.flat();
}
