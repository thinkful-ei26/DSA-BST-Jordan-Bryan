//89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5

//input: 50 //output: '14 searches performed'
//base case: if (num = linearSearch(num){
//   return;
// })

//call linearSearch recursively for each number until it reaches num

const testArray = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72,
  56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69,
  64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1,
  6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

const sortedArray = testArray.sort((a, b) => a - b)

// const input1 = [1, 2, 3, 4, 5, 6]
// function linearSearch(input, value) {
//   for (let i = 0; i < input.length; i++) {
//     if (value == input[i]) {
//       return console.log(`The item was found and took ${i + 1} attempts`)
//     }
//   }
//   console.log(`The item is not in the dataset and took ${input.length} searches to look`)
// }

// linearSearch(input1, 5)

const binarySearched = (value, input) => {
  let low = 0;
  let high = input.length - 1;
  let middle;
  let count = 0
  while (low <= high) {
    middle = low + (high - low) / 2;
    if ((middle % 1) > 0) {
      middle = Math.ceil(middle)
    }
    if (value < input[middle]) {
      high = middle - 1
      count++
    }
    else if (value > input[middle]) {
      low = middle + 1
      count++
    }
    else {
      count++
      return middle
    }
  }
  return null
}
// console.log(binarySearched(46, sortedArray))
// console.log(sortedArray.length)
// console.log(sortedArray[52])

// const binarySearch = (value, arr, low = 0, end = arr.length - 1) => {

//   let middle = Math.floor((low + end) / 2);

//   // let bst = new BinarySearchTree(arr[middle])

//   bst.left = binarySearch(value, arr, start, middle - 1);
//   bst.right = binarySearch(value, arr, middle + 1, end);

//   return arr[bst];
// }

// console.log(binarySearch(46, sortedArray))

//dewey: [000, 010, 020, 030, 040, 050, 060, 070, 080, 090, 100]
//make an array of objects
let deweyArr = [
  { 000: 'book1' },
  { 010: 'book2' },
  { 020: 'book3' },
]

// binarySearched() => index 4
// deweyArr[4] => {Integer: 'book'}
// deweyArr[4][Integer] => Answer we want

function deweySearch(key, input) {
  let index = binarySearched(key, input)
  return input[index][key]
}
console.log(deweySearch(010, deweyArr))
//990 => 1000 => 1010 => 102
