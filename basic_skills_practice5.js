// 1. Use a nested loop to convert an array of number pairs into a single flattened array.
//    For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].
// let numArr = [[1, 3], [8, 9], [2, 16]];
// let flatArr = [];
// let i = 0;
// while (i < numArr.length) {
//   let j = 0;
//   while (j < numArr[i].length) {
//     flatArr.push(numArr[i][j]);
//     j++;
//   }
//   i++;
// }
// console.log(flatArr);

// for (let i = 0; i < numArr.length; i++) {
//   let innerArr = numArr[i];
//   for (let j = 0; j < innerArr.length; j++) {
//     flatArr.push(innerArr[j]);
//   }
// }
// console.log(flatArr);

// numArr.forEach((miniArr) => {
//   miniArr.forEach((num) => {
//     flatArr.push(num);
//   });
// });
// console.log(flatArr);

// let newFlatArr = numArr.reduce((a, b) => {
//   return a.concat(b);
// },);
// console.log(newFlatArr);

// let newFlatArr = numArr.flat();

// 2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
//    For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].
// let letters1 = ["a", "b", "c"];
// let letters2 = ["d", "e", "f", "g"];
// let combinedLetters = [];
// let i = 0;
// while (i < letters1.length) {
//   let j = 0;
//   while (j < letters2.length) {
//     combinedLetters.push(`${letters1[i]}${letters2[j]}`);
//     j++;
//   }
//   i++;
// }

// for (let i = 0; i < letters1.length; i++) {
//   for (let j = 0; j < letters2.length; j++) {
//     combinedLetters.push(`${letters1[i]}${letters2[j]}`);
//   }
// }

// letters1.forEach(firstLetter => {
//   letters2.forEach(secondLetter => {
//     combinedLetters.push(`${firstLetter}${secondLetter}`);
//   });
// });
// console.log(combinedLetters);

// 3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
//    For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].
// let arr = ["a", "b", "c", "d"];
// let combinations = [];
// let i = 0;
// while (i < arr.length) {
//   let j = 0;
//   while (j < arr.length) {
//     if ( arr[i] !== arr[j]) {
//       combinations.push(`${arr[i]}${arr[j]}`);
//     }
//     j++;
//   }
//   i++;
// }

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     arr[i] !== arr[j] ? combinations.push(`${arr[i]}${arr[j]}`) : null;
//   }
// }

// for (let letter1 of arr) {
//   for (let letter2 of arr) {
//     letter1 !== letter2 ? combinations.push(`${letter1}${letter2}`) : null;
//   }
// }

// arr.forEach(letter1 => {
//   arr.forEach(letter2 => {
//     letter1 !== letter2 ? combinations.push(`${letter1}${letter2}`) : null;
//   });
// });
// console.log(combinations);

// 4. Use a nested loop to find the largest product of any two different numbers within a given array.
//    For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.
let numArr = [5, -2, 1, -9, -7, 2, 6];
let maxNum = numArr[0];
// let i = 0;
// while (i < numArr.length) {
//   let j = 0;
//   while (j < numArr.length) {
//     if (numArr[i] !== numArr[j] && numArr[i] * numArr[j] > maxNum) {
//       maxNum = numArr[i] * numArr[j];
//     }
//     j++;
//   }
//   i++;
// }

// for (let i = 0; i < numArr.length; i++) {
//   for (let j = 0; j < numArr.length; j++) {
//     numArr[i] !== numArr[j] && numArr[i] * numArr[j] > maxNum ? 
//       maxNum = numArr[i] * numArr[j] : null;
//   }
// }

// for (let num1 of numArr) {
//   for (let num2 of numArr) {
//     if (num1 !== num2 && num1 * num2 > maxNum) {
//       maxNum = num1 * num2;
//     }
//   }
// }

// numArr.forEach(num1 => {
//   numArr.forEach(num2 => {
//     if (num1 !== num2 && num1 * num2 > maxNum) {
//       maxNum = num1 * num2;
//     }
//   });
// });
// console.log(maxNum);

// 5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
//    For example, [[1, 3], [8, 9], [2, 16]] becomes 39.
// let numArrays = [[1, 3], [8, 9], [2, 16]];
// let sum = 0;
// let i = 0;
// while (i < numArrays.length) {
//   let j = 0;
//   while (j < numArrays[i].length) {
//     sum += numArrays[i][j];
//     j++;
//   }
//   i++;
// }

// for (let i = 0; i < numArrays.length; i++) {
//   // let current = numArrays[i];
//   for (let j = 0; j < numArrays[i].length; j++) {
//     sum += numArrays[i][j];
//   }
// }

// for (let current of numArrays) {
//   for (let value of current) {
//     sum += value;
//   }
// }
// console.log(sum);

// 6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
//    For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].
// let nums1 = [1, 2];
// let nums2 = [6, 7, 8];
// let sums = [];
// let i = 0;
// while (i < nums1.length) {
//   let j = 0;
//   while (j < nums2.length) {
//     sums.push(nums1[i] + nums2[j]);
//     j++;
//   }
//   i++;
// }

// for (let i = 0; i < nums1.length; i++) {
//   for (let j = 0; j < nums2.length; j++) {
//     sums.push(nums1[i] + nums2[j]);
//   }
// }

// for (let num1 of nums1) {
//   for (let num2 of nums2) {
//     sums.push(num1 + num2);
//   }
// }
// console.log(sums);

// 7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
//    For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].


// 8. Use a nested loop to find the largest sum of any two different numbers within an array.
//    For example, [1, 8, 3, 10] becomes 18.

// 9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
//    For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

//10. Use a nested loop to convert an array of string arrays into a single string.
//    For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".




//SOLUTIONS: https://gist.github.com/peterxjang/af8985dc4fb07ea14b4bd6ba41cb08f8