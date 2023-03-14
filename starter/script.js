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

// const friends = ["Mike", "Stev", "Peter"];
// const newLength = friends.push("Su");
// console.log(friends);

// console.log(newLength);

// friends.unshift("D");
// console.log(friends);

//remove
//friends.pop();
//friends.shift();

// console.log(friends.indexOf("Su"));
// console.log(friends.indexOf("D"));

//check includes or not // conditional thing
// console.log(friends.includes("Su"));
// console.log(friends.includes("Ana"));

// if (friends.includes("Su")) {
//   console.log("You are so cool");
// }

/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new 
array) 
�
GOOD LUCK
�
  */

// 15% for 50 to 300
// 20% for other

// func calcTip = anybill x 15%

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
// };

//const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

const su = {
  firstName: "Su",
  lastName: "Shruthi",
  age: 2037 - 1987,
  job: "programmer",
  friends: ["K", "D", "A", "V"],
};
console.log(su);
console.log(su.lastName);
console.log(su["age"]);

const nameKey = "Name";
console.log(su["first" + nameKey]);

//so cool.. I am loving it
// const interstedIn = prompt(
//   "What do you want to know about Su? Choose between firstName, lastName, job, age, friends "
// );
// if (su[interstedIn]) {
//   console.log(su[interstedIn]);
// } else {
//   console.log(`Wrong request`);
// }

su.location = "Vancouver";
console.log(su);
console.log(
  `${su.firstName} has ${su.friends.length} friends, and her best friend is called ${su.friends[1]} `
);
