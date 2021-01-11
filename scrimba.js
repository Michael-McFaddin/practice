// Day 1
//input: ["abc", "ded"]
//expected output: ["*****", "*abc*", "*ded*", "*****"]
// let arr = ["abc", "ded"];

// function addBorder(array) {
//   let newArr = array.map(item => `*${item}*`);
//   newArr.unshift("*****");
//   newArr.push("*****");
//   return newArr;
// }

// Anwer
// function addBorder(array) {
//   const wall = '*'.repeat(array[0].length + 2);

//   array.unshift(wall);
//   array.push(wall);

//   for (let i = 1; i < array.length - 1; i++) {
//     array[i] = '*'.concat(array[i], '*');
//   }

//   return array;
// }
// console.log(addBorder(arr));
//________________________________________________________________
// Day 2
// Take the two digits of the number below and find the sum of their combined values
// let numb = 52;

// function addTwoDigits(num) {
//   let values = num.toString().split('');
//   let sum = values.reduce((acc, current) => acc + (parseInt(current)), 0);
//   return sum;
//   // return [...words];
// }
// console.log(addTwoDigits(numb));

// Day 3
// Find the first duplicate number and return the index value of that second duplicate value. 
//If there is no duplicate return -1.
// input: [2, 1, 3, 5, 3, 3]
// output: 3 (index)
// input: [2, 4, 3, 5, 1]

// let arr = [2, 1, 3, 5, 3, 3];
// let arr2 = [2, 4, 3, 5, 1];

// function firstDuplicate(nums) {
//   let obj = {};
//   let answer = -1;
//   for (let i = 0; i < nums.length; i++) {
//     !obj[nums[i]] ? obj[nums[i]] = 1 : answer = nums[i];
//   }
//   return answer;
// }

// function firstDuplicate(nums) {
//   let obj = {};
//   let answer = -1;
//   for (let i = 0; i < nums.length; i++) {
//     if (!obj[nums[i]]) {
//       obj[nums[i]] = 1;
//     }
//     if (obj[nums[i]]) answer = nums[i];
//   }
//   return answer;
// }

// Answer
// function firstDuplicate(nums) {
//   const firstDup = {};
//   // iterate nums
//   for (let num of nums) {
//     // check for a duplicated value
//     if (firstDup.hasOwnProperty(num)) {
//       // return duplicated nums
//       return num;
//     }
  
//     firstDup[num] = null;
//   }
  
//   // dont find a duplicate return -1
//   return -1;
// }
// console.log(firstDuplicate(arr2));
//_______________________________________________________________

// Day 3
// Sum all the prime number up to and including the provided number
// input: 10
// output: 17
//https://medium.com/@hugh.winchester/sum-all-primes-3e31589fdf6c

// const val = 10;
// sum of primes for 977 = 72179
// function sumAllPrimes(num) {
//   //get all the number up to num excluding 1 but including num
//   let values = [];
//   for (let i = 2; i <= num; i++) {
//     values.push(i);
//   }
//   let sum = 0;
//   //loop through those numbers and run a check to see if they are prime
//   for (let i = 0; i < values.length; i++) {
  
//     let isPrime = true;
//     for (let j = 2; j < values[i]; j++) {
//       if (values[i] % j === 0) {
//         isPrime = false;
//       }
//     }
//   //if the number is prime added to a sum accumulator
//     if (isPrime) sum += values[i];
//   }
//   return sum;
 
// }
// console.log(sumAllPrimes(val));

//Scrimba answer
// function sumAllPrimes(num) {
//   let primesTotal = 0;
  
//   for (let i = 2; i < num; i++) {
//     console.log(`outer, i = ${i}`);
//     for (let j = 2; j <= i; j++) {
//       console.log(`inner, j = ${j}`);
//       if (i === j) {
//         console.log(`${i} is prime`);
//         primesTotal += i;
//       }
        
//       if (i % j === 0) {
//         break;
//       }
//     }
//   }
  
//   return primesTotal;
// }
// console.log(sumAllPrimes(val));

//___________________________________________________
// Day 4
const num = 248622;
const num2 = 642386;

function evenDigitsOnly(number) {
  let numArr = (number.toString()).split('');
  let isEven = false;
  for (let i = 0; i < numArr.length; i++) {
    if (parseInt(numArr[i]) % 2 !== 0) {
      isEven = false;
      break;
    } else {
      isEven = true;
    }
  }
  return isEven;
}

console.log(evenDigitsOnly(num2));