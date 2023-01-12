"use strict";

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge;
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
  //return `$(firstName) retires in $(retirement) years`;
};
//yearsUntilRetirement(1991, "Jonas");
console.log(yearsUntilRetirement(1991, "Su"));
console.log(yearsUntilRetirement(1951, "SuMama"));

//function declaration
function calcAge(birthYear) {
  return 2037 - birthYear;
}

//function expression
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

//Arrow function
const calcAge = (birthYear) => 2037 - birthYear;
