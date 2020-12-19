// A given array has one pair of duplicate values. Return the duplicate value.

// Input: [5, 2, 9, 7, 2, 6]
// Output: 2

//set a variable to hold the duplicate value

//start with and index position for a nested loop
//index1 = 0

//start looping again but with the next index, as long as we don't start with index = 0
//inner loop will start with index2 = 1

//compare the item at index1 to index2
//if they are the same, we will set that variable to equal the current value

// let input = [5, 2, 9, 7, 9, 6];

// function findDuplicate(arr) {
//   let result;
//   let index1 = 0; //1
//   while (index1 < arr.length) { //
//     let index2 = 1; 
//     while (index2 < arr.length) { //index2 = 1
//       if (index1 !== index2 && arr[index1] === arr[index2]) {
//         result = arr[index1]; //
//       }
//       index2++;
//     }
//     index1++;
//   }
//   return result;
// }

// console.log(findDuplicate(input));


//refactor
//looping through the array
//set an index = 0 to start at the beginning
//set and empty object(hash)

//if the item already has a key in the object, return, if not(else)
//take the value and add it to the object with a value of zero
//keep going through the array
//if we come across the same key, return that key



let input = [5, 2, 9, 7, 9, 6];

function findDuplicate(arr) {
  let index = 0; // 4
  let duplicateObj = {}; // {5: 0, 2: 0, 9: 0, 7: 0,}
  while (index < arr.length) {
    if (arr[index] in duplicateObj) { // look at diff ways to check
      return arr[index];
    } else {
      duplicateObj[arr[index]] = 0;
    }
    index++;
  }
}

console.log(findDuplicate(input));

// let hsh = {6: 2, 4: 0, 7: 1};
// console.log(hsh[7]);


