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

// O(nlogn)
function mergeSortIterative(arr) {
  if (arr.length < 2) { return arr; }

  var work = [];
  for (var i = 0; i < arr.length; i++) {
    work.push([arr[i]]);
  }

  while (work.length > 1) {
    var left = work.shift();
    var right = work.shift();
    work.push(merge(left, right));
  }

  return work[0];
}


console.log(mergeSortIterative([3,9,6,2,5,8,7,1,4]))
