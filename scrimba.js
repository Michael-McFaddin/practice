//input: ["abc", "ded"]
//expected output: ["*****", "*abc*", "*ded*", "*****"]
let arr = ["abc", "ded"];

function addBorder(array) {
  let newArr = array.map(item => `*${item}*`);
  newArr.unshift("*****");
  newArr.push("*****");
  return newArr;
}
console.log(addBorder(arr));