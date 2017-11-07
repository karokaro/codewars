function mergeArrays(arr1, arr2) {
  var sortedArr = arr1.concat(arr2).sort(function(a,b) { return a - b; });
  var uniqueArr = [...new Set(sortedArr)];
  return uniqueArr;
}