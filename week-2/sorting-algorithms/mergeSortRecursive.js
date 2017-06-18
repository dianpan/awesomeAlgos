function merge(left, right) {
  var result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  //make sure remaining arrays are empty
  return result
    .concat(left.splice(0, left.length))
    .concat(right.splice(0, right.length));
}

function mergeSortRecursive(arr) {
  if (arr.length < 2) { return arr; }

  var mid = Math.floor(arr.length / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid);

  // send left and right to the mergeSortRecursive to broke it down into pieces then merge those
  return merge(
    mergeSortRecursive(left),
    mergeSortRecursive(right)
  );
}

console.log(mergeSortRecursive([3,9,6,2,5,8,7,1,4]))
