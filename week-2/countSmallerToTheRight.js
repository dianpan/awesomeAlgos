// You have array of integers nums and you need to return a new counts array. In the new counts array, counts[i] is the number of smaller elements to the right of nums[i].
//
// Example
//
// For nums = [3, 8, 4, 1], the output should be
// countSmallerToTheRight(nums) = [1, 2, 1, 0].
//
// To the right of 3: there is 1 smaller element (1).
// To the right of 8: there are 2 smaller elements (4 and 1).
// To the right of 4: there is 1 smaller element (1).
// To the right of 1: there are 0 smaller elements.
// The resulting array is [1, 2, 1, 0].

// https://codefights.com/interview/bF6Tr6FdRiJSB5qqB/

function countSmallerToTheRight(nums) {
    var result = [];

    for(var i = 0; i < nums.length; i++) {
        var counter = 0;

        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]){
                counter ++
            }
        }
        result.push(counter);
    }
    return result;
}

console.log(countSmallerToTheRight([3, 8, 4, 1]))
console.log(countSmallerToTheRight([-1, -1]))
console.log(countSmallerToTheRight([-1, 0]))
console.log(countSmallerToTheRight([0, 2, 1]))
