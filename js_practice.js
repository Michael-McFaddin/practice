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

let pile = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(ar) {
  let socks = {};
  let pairCount = 0;
  ar.forEach(sock => {
    if (socks[sock]) {
      socks[sock] += 1;
    } else {
      socks[sock] = 1;
    }
  });
  for (let prop in socks) {
    if (socks[prop] >= 2) {
      pairCount += Math.floor(socks[prop] / 2);
    }
  }
  return pairCount;
}
console.log(sockMerchant(pile));
