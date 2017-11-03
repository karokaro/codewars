function positiveSum(arr) {
  return arr.filter(function(x) {
    return x >= 0
  }).reduce(function(a, b) {
    return a + b
  }, 0)
};

// function positiveSum (arr) {
//   return arr.filter(x => x>=0).reduce((a, b) => a + b, 0);
// }