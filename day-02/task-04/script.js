// Spot errors:

/* const userName = Brad;
userName = "Jenna";

function getUserNameLength {
  return const result = name.length
}

console.log(getUserNameLength(userName) > 4)
// ^______________ Should log true */

//Test

function calc() {
  console.log(1 + 1);
}
calc();

let userName = "BRAD";
userName = "Jenna";
console.log(userName);

function getUserNameLength(userName) {
  return userName.length;
}

console.log(userName.length);

console.log(getUserNameLength(userName) > 4);

//02

const isString = function (word) {
  return typeof word === "string";
};

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
