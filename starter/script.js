// "use strict";

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge;
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return retirement;
//   } else {
//     return -1;
//   }
//   //return `$(firstName) retires in $(retirement) years`;
// };
// //yearsUntilRetirement(1991, "Jonas");
// console.log(yearsUntilRetirement(1991, "Su"));
// console.log(yearsUntilRetirement(1951, "SuMama"));

// //function declaration
// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }

// //function expression
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// //Arrow function
// const calcAge = (birthYear) => 2037 - birthYear;

// Coding challenge

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// // Test 1
// const scoreDolphins = calcAverage();

// const friends = ["Mike", "Stev", "Peter"];

// console.log(friends);

// const years = new Array(1991, 1988, 2000, 1986);
// console.log(friends[0]);

// console.log(friends.length);

const friends = ["Mike", "Stev", "Peter"];
const newLength = friends.push("Su");
console.log(friends);

console.log(newLength);

friends.unshift("D");
console.log(friends);

//remove
//friends.pop();
//friends.shift();

console.log(friends.indexOf("Su"));
console.log(friends.indexOf("D"));

//check includes or not // conditional thing
console.log(friends.includes("Su"));
console.log(friends.includes("Ana"));

if (friends.includes("Su")) {
  console.log("You are so cool");
}
