// --------------------------------------------------------------------------------
// ***************************** Naive Sorts **************************************
// --------------------------------------------------------------------------------

//naive sorts - good for small datasets

//bubbleSort
//iterates through an array, swaps with the element in front if necessary
//time complexity: O(n^2)
//space complexity: O(1)

//insertionSort
//builds a sorted array as it goes
//time complexity: O(n^2)
//space complexity: O(1)

//selectionSort
//finds the smallest element, swaps it into the appropriate position
//repeat
//time complexity: O(n^2)
//space complexity: O(1)

function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function bubbleSort(arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = i+1; j < arr.length; j++) {
      if (arr[j]<arr[i]) {
        swap(arr, i, j)
      }
    }
  }
  return arr
}
// console.log(bubbleSort([2,4,1,5,9,3]))
// console.log(bubbleSort([0,-1,0,2]))


function insertionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];

    for (var j = i - 1; j > -1 && arr[j] > val; j--) {
      arr[j+1] = arr[j];
    }

    arr[j+1] = val;
  }

  return arr;
}
console.log(insertionSort([2,4,1,5,9,3]))
console.log(insertionSort([0,-1,0,2]))

function selectionSort(arr) {
  for(var i = 0; i < arr.length; i++) {
    var minIndex = i
    for(var j = i+1; j<arr.length; j++) {
      if(arr[j]<arr[minIndex]){
        minIndex = j
      }
    }
    swap(arr, i, minIndex)
  }
  return arr
}
// console.log(selectionSort([2,4,1,5,9,3]))
// console.log(selectionSort([0,-1,0,2]))
