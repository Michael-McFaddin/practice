// reduce tutorial https://www.javascripttutorial.net/javascript-array-reduce/

//  1. Start with an array of numbers and compute the sum of all the numbers.
//     For example, [5, 10, 8, 3] becomes 26.
// let nums = [5, 10, 8, 3];
// let total = 0;
// let i = 0;
// while (i < nums.length) {
//   total += nums[i];
//   i++;
// }
// console.log(total);

// let newTotal = 0;
// nums.forEach(num => newTotal += num);
// console.log(newTotal);

// const reduceTotal = nums.reduce((accumulator, num) => accumulator + num);
// console.log(`reduceTotal = ${reduceTotal}`);
// console.log(reduceTotal);

//  2. Start with an array of strings and combine them all into a single string.
//     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".
// let words = ["volleyball", "basketball", "badminton"];
// let str = '';
// let i = 0;


//  3. Start with an array of objects and compute the sum of the prices (from the :price key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.
// let items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
// let sum = 0;
// let i = 0;

// const totalPrice = items.reduce((acc, item) => { return acc + item.price; }, 0);
// console.log(totalPrice);

//  4. Start with an array of numbers and compute the the minumum number.
//     For example, [5, 10, 8, 3, 9] becomes 3.
// let nums = [5, 10, 8, 3, 9];
// let minimum = nums[0];
// let i = 0;

// let newMin = Math.min(...nums);
// console.log(newMin);

// let newMin2 = nums.reduce((min, num) => num < min ? num : min, nums[0]);
// let max = nums .reduce((max, num) => num > max ? num : max, nums[0]);
// console.log(newMin2)
// console.log(max);

//  5. Start with an array of strings and compute the total length of all the strings.
//     For example, ["volleyball", "basketball", "badminton"] becomes 29.
// let words = ["volleyball", "basketball", "badminton"];
// let total = 0;
// let total2 = 0;
// let i = 0;


//  6. Start with an array of objects and find the object with the lowest price (from the :price key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.
// let items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
// let lowest = items[0];
// let i = 0;


//keep
// let newLowest = items.reduce((min, item) => item.price < min ? item : min, items[0].price);
// console.log(newLowest);

//  7. Start with an array of numbers and compute product of all the numbers.
//     For example, [5, 10, 8, 3] becomes 1200.
// let nums = [5, 10, 8, 3];
// let product = 1;
// let i = 0;


//  8. Start with an array of strings and combine them all into a single string, separated by dashes.
//     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".
// let words = ["volleyball", "basketball", "badminton"];
// let newStr = "";
// let i = 0;

// const str2 = words.reduce((acc, str, index) => index === words.length - 1 ? acc + "-" + str + "-" : acc + "-" + str , "");
// console.log(str2);

//  9. Start with an array of objects and find the object with the shortest name (from the :name key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.
// let items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
// let shortest = items[0];
// let i = 0;


// 10. Start with an array of numbers and compute the maximum number.
//     For example, [5, 10, 8, 3] becomes 10.
// let nums = [5, 10, 8, 3];
// let max = nums[0];
// let i = 0;
