// Find duplicate items
// const a = [3, 4, 1, 4, 6, 3, 5, 7, 6, 4];

// function countDuplicate(arr) {
//   let counts = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (counts[arr[i]]) {
//       counts[arr[i]] += 1;
//     } else {
//       counts[arr[i]] = 1;
//     }
//   }
//   for (let prop in counts) {
//     if (counts[prop] >= 2) {
//       console.log(prop + " counted: " + counts[prop] + " times."); 
//     }
//   }
//   return counts;
// }

// console.log(countDuplicate(a));

// If the numbers represent sock colors, go through the array and figure out how many pairs of socks there are.
// input: [10, 20, 20, 10, 10, 30, 50, 10, 20]
// output: 3 (pairs of socks)

// let pile = [10, 20, 20, 10, 10, 30, 50, 10, 20];

// function sockMerchant(ar) {
//   let socks = {};
//   let pairCount = 0;
//   ar.forEach(sock => {
//     if (socks[sock]) {
//       socks[sock] += 1;
//     } else {
//       socks[sock] = 1;
//     }
//   });
//   for (let prop in socks) {
//     if (socks[prop] >= 2) {
//       pairCount += Math.floor(socks[prop] / 2);
//     }
//   }
//   return pairCount;
// }
// console.log(sockMerchant(pile));


// const items2 = ['pencil', 'book','pencil'];

// function findDuplicateInArray(array) {
//   const count = {};
//   const result = [];

//   array.forEach(item => {
//     if (count[item]) {
//       count[item] += 1;
//       return;
//     }
//     count[item] = 1;
//   });

//   for (let prop in count) { 
//     if (count[prop] >= 2) {
//       result.push(prop);
//     }
//   }

//   console.log(count);
//   return result;

// }

// findDuplicateInArray(items2);
// {pencil: 2, book: 1}
//[pencil
//_______________________________________________________
// https://www.google.com/search?q=hackerrank+repeated+string+javascript&oq=hackerrank&aqs=chrome.0.69i59l3j69i57j69i60l3j69i65.7509j0j7&sourceid=chrome&ie=UTF-8#kpvalbx=_jgb2X8GPN4qo5NoP6-aYmAs13
// s = substring, n = length of final string made up of substring
// s = 'aba'      n = 10
// figure out how many times 'a' occurs in a string length of n
// function repeatedString(s, n) {
//   let numberOfAs = 0;

//   // find out how many 'a's you can get out of the original substring
//   let occurenceOfA = [...s].filter(letter => letter === 'a').length;

//   // divide n by length of substring to find out how many times you can multiple
//   // occurencesOfA by
//   numberOfAs = Math.floor(n / s.length) * occurenceOfA;
 
//   // rem will get the rmainder
//   let rem = n % s.length;

//   for (let i = 0; i < rem; i++) {
//     if (s[i] === 'a') numberOfAs++;
//   }
//   return numberOfAs;
// }
  
// console.log(repeatedString('aba', 10));
//_______________________________________________________________
//https://medium.com/@clarkjohnson_85334/yet-another-hackerrank-problem-2d-array-hourglass-in-javascript-162614dff390
// let grid = [
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 0, 2, 4, 4, 0],
//   [0, 0, 0, 2, 0, 0],
//   [0, 0, 1, 2, 4, 0]
// ];

// grid[0][0], grid[0][1], grid [0][2]
//             grid[1][1]
// grid[2][0], grid[2][1], grid[2][2]

// function hourglassSum(arr) {
//   let max = -63;
//   for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 4; j++) {
//       let sum = 0;
//       sum = (arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]);
//       max = max < sum ? sum : max;
//     }
//   }
//   return max;
// }
// console.log(hourglassSum(grid));

//__________________________________________________________________

