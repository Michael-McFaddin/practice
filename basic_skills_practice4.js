//  1. Convert an array of arrays into a hash.
//     For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.
// let pairs = [[1, 3], [8, 9], [2, 16]];
// let pairsObj = {};
// let i = 0;
// while (i < pairs.length) {
//   let key = pairs[i][0];
//   let value = pairs[i][1];
//   pairsObj[key] = value;
//   i++;
// }
// console.log(pairsObj);

// pairs.forEach(pair => {
//   let key = pair[0];
//   let value = pair[1];
//   pairsObj[key] = value;
// });
// console.log(pairsObj);



//  2. Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
//     For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.
// let arr = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}];
// let obj = {};
// let i = 0;
// while (i < arr.length) {
//   obj[arr[i].id] = arr[i];
//   i++;
// }

// arr.forEach(item => {
//   obj[item.id] = item;
// });
// console.log(obj);


//  3. Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
//     For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.
// let word = "bookkeeper";
// let letterFreq = {};
// let i = 0;
// while (i < word.length) {
//   let letter = word[i];
//   if (letterFreq[letter] === null) {
//     letterFreq[letter] = 1;
//   } else {
//     letterFreq[letter] = (letterFreq[letter] + 1) || 1;
//   }
//   i++;
// }
// console.log(letterFreq);

// let j = 0;
// let letterFreq2 = {};
// while (j < word.length) {
//   let letter = word[j];
//   letterFreq2[letter] = (letterFreq2[letter] + 1) || 1;
//   j++;
// }
// console.log(letterFreq2);

// word.split('').forEach(letter => {
//   letterFreq[letter] = (letterFreq[letter] + 1) || 1;
// });
// console.log(letterFreq);

//  4. Convert a hash into an array of arrays.
//     For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].
// let items = {"chair": 100, "book": 14};
// let newObj = Object.entries(items);
// console.log(newObj);
// let newArr = Object.fromEntries(newObj);
// console.log(newArr);

// let result = Object.keys(items).map(key => [String(key), items[key]]);
// console.log(result);

//--------------------------
// https://reedbarger.com/how-to-transform-javascript-objects-the-power-of-objectkeys-values-entries/
//  5. Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
//     For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].
// let people = {321: {name: "Alice", age: 31}, 322: {name: "Maria", age: 27}};
// const peopleArr = Object.entries(people).reduce((acc, [id, person]) => {
//   acc.push({ ...person, id });
//   return acc;
// }, []);
// console.log(peopleArr);
//--------------------------


//  6. Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
//     For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.
// let strArr = ["do", "or", "do", "not"];
// let strFrequency = {};
// let i = 0;
// while (i < strArr.length) {
//   let str = strArr[i];
//   strFrequency[str] = (strFrequency[str] + 1) || 1;
//   i++;
// }
// console.log(strFrequency);


//  7. Convert a hash into a flat array containing all the hash’s keys and values.
//     For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].
// let items = {"a": 1, "b": 2, "c": 3, "d": 4};
// function flattenObj(arr) {
//   let objArr = Object.entries(arr);
//   // let flatArr = [].concat.apply([], objArr); this is pre ES6
//   let flatArr = [].concat(...objArr);
//   return flatArr;
// }
// console.log(flattenObj(items));

//  8. Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
//     For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] 
//     becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.

//  9. Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
//     For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] 
//     becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.
let objs = [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}];
let authorsObj = {};

// function createObj(obj) {
//   for (let keys in obj) {
//     if (authorsObj.hasOwnProperty(keys)) {
//       authorsObj[keys].push(obj[keys]);
//     } else {
//       authorsObj[keys] = [obj[keys]];
//     }
//   }
// }
// console.log(createObj(objs));
objs.forEach(book => {
  // if (!authorsObj[book.author]) {
  //   authorsObj[book.author] = [];
  // } 
  authorsObj[book.author] = [book.title];

  // else {
  //   authorsObj[book.author] = [book.title];
  //   console.log("else");
  // }
  console.log(authorsObj);
});
// console.log(authorsObj);


// 10. Given a hash, create a new hash that has the keys and values switched.
//     For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.


// SOLUTIONS: https://gist.github.com/peterxjang/216a7a6e8411ee5c05118e78022f2bc7