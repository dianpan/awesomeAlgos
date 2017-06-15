function moveZeros(array){
  var i = 0
  var j = array.length-1
  while(true) {
    while(array[i] != 0 && i != j) {
      i++
    }
    while(array[j] == 0 && i != j) {
      j--
    }
    if(i == j){
      break
    }
    swap(array, i, j)
  }
  return array
}

function swap(array, a, b){
  var temp;
  temp = array[b]
  array[b] = array[a]
  array[a] = temp
}


console.log(moveZeros([1, 2, 0, 3, 4, 0, 5, 6, 0]))
// ==> [1, 2, 6, 3, 4, 5, 0, 0, 0]
//runtime O(n)
//memory O(1)
