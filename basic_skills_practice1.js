// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//   console.log("hello");
// }

// let c = 0;
// while (c <= 100) {
//   console.log(c);
//   c += 5;
// }

// let i = 0;
// while (i < 10) {
//   console.log(9000);
//   i++;
// }

// let i = 50;
// while (i <= 70) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// while (i < 144) {
//   console.log("Around the world");
//   i++;
// }

// create an array of five random number between 1 and 10
// let randomNumbers = [];
// let count = 0;
// const size = 5;

// while (count < size) {
//   randomNumbers.push(Math.round(Math.random() * 10));
//   count++;
//   console.log('The current size of the array is ' + count);
//   console.log(randomNumbers);
// }

// console.log(randomNumbers);

// var arr = ["spoon", "fork", "knife"];
// arr.push("bowl", "plate");
// console.log(arr);

// var arr = ["a", "b", "c", "d"];
// console.log(arr);
// arr[1] = 4;
// console.log(arr);

// var numbers = [3, 4, 1, 28, 45];
// let i = 0;
// while (i < numbers.length) {
//   console.log(numbers[i]);
//   i++;
// }

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// var numbers = [5];
// console.log(numbers);
// numbers.push(4, 7, 2);
// console.log(numbers);

// var strings = ["first", "second", "third"];
// strings[1] = strings[1].toUpperCase();
// console.log(strings);
// 
// var person = {
//   firstName: "ted",
//   lastName: "johnson",
//   email: "ted@email.com"
// };

// console.log(person["firstName"]);
// console.log(person["lastName"]);
// console.log(person["email"]);
// console.log(person.firstName);

// var menu = {
//   burger: 4,
//   fries: 3,
//   shake: 6
// };

// menu["hotdog"] = 4;
// menu.ice_cream = 5;
// console.log(menu);

//  1. Start with an array of numbers and create a new array with each number times 3.
//     For example, [1, 2, 3] becomes [3, 6, 9].
// let arr = [1, 2, 3];
// let newArr = [];
// let newArr2 = [];
// let i = 0;
// while (i < arr.length) {
//   newArr.push(arr[i] * 3);
//   i++;
// }
// console.log(newArr);

// arr.forEach(element => {
//   newArr2.push(element * 3);
// });
// console.log(arr);
// console.log(`newArr = ${newArr2}`);

// const mapArr = arr.map(element => element * 3);
// console.log(`mapArr = ${mapArr}`);

//  2. Start with an array of strings and create a new array with each string upcased.
//     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].
// let strArr = ['hello', 'goodbye'];
// let newStrArr = [];
// let i = 0;


//  3. Start with an array of objects and create a new array of string values from each object's :name key.
//     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].
// let nameArr = [{name: 'Alice', age: 27}, {name: 'Blane', age: 16}];
// let justNameArr = [];
// let i = 0;


//  4. Start with an array of numbers and create a new array with each number plus 7.
//     For example, [1, 2, 3] becomes [8, 9, 10].
// let numArr = [1, 2, 3];
// let newNumArr = [];
// let i = 0;


//  5. Start with an array of strings and create a new array with each string's length.
//     For example, ["hello", "goodbye"] becomes [5, 7].
// let strArr = ['hello', 'goodbye'];
// let strLengths = [];
// let i = 0;


//  6. Start with an array of objects and create a new array of number values from each object's :age key.
//     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].
// let nameAgeArr = [{name: 'Alice', age: 27}, {name: 'Blane', age: 16}];
// let ageOnlyArr = [];
// let i = 0;


//  7. Start with an array of numbers and create a new array with each number divided by 2.
//     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].
// let nums = [1, 2, 3];
// let numsDivided = [];
// let i = 0;


//  8. Start with an array of strings and create a new array with each string's first letter only.
//     For example, ["hello", "goodbye"] becomes ["h", "g"].
// let arr = ["hello", "goodbye"];
// let firstLetter = [];
// let i = 0;


// 9.  Start with an array of objects and create a new array of number values from each object's :age key times 2.
//     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].
// let people = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
// let ageTimes2 = [];
// let i = 0;


// 10. Start with an array of numbers and create a new array with each number converted into a string.
//     For example, [1, 2, 3] becomes ["1", "2", "3"].
// let nums = [1, 2, 3];
// let numStr = [];
// let i = 0;
