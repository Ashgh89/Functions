// true false
console.log(true === true); // true
console.log(true === "true"); // false
console.log(true == "dsf"); // true => true = 1 false = 0
console.log(false == 0); // true
console.log(true == 1); // false

let myVal = true;
let myVal2;
if (myVal) {
  myVal2 = 3500;
  console.log(myVal2);
} else {
  myVal2 = 200;
  console.log(myVal2);
}

// falsy = 0 null undefined NaN "" false

const myName = true;
if (myName === true) {
  console.log("Yes");
} else {
  console.log("No");
}

// functions
// 1. function declaration
function test() {
  console.log("Hello");
}
// Call oder Invoke
test();

function test2() {
  let name = "Mila";
  console.log("Hello " + name);
}
// call
test2();

function test3(firstName) {
  console.log("Hi", firstName);
}
test3("Nelly");

function test4(firstName, lastName) {
  // return "Hi " + firstName + " " + lastName;
  return `Hi ${firstName} ${lastName}`;
}
console.log(test4("Belal", "Aljumaa"));

// 2. function expression
let test5 = function () {
  let myVar = "I am a function";
  console.log("Hi There", myVar);
};
// Call
test5();

const square = function (x) {
  return x * x;
};
console.log(square(9)); // 9 x 9 = 81

const square1 = function (x = 9) {
  return x * x;
};
console.log(square1()); // 9 x 9 = 81

//
function addTwoNumbers(x, y) {
  console.log(x + y);
}
addTwoNumbers(26, 6); // 32
addTwoNumbers(12, -90); // -78
addTwoNumbers(); // undefined + undefined = NaN

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};
console.log(calcAge(1990)); // 32
// Arrow function
const calcAge2 = (birthYear) => 2022 - birthYear;
console.log(calcAge2(1990));
//
const test6 = (birthYear) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
console.log(test6(1985)); // 28

const test7 = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(test7(1985, "Saeed")); // Saeed retires in 28 years

// Variable scope in functions

// local variables in functions
function test8(x) {
  console.log("Available here:", x);
}
test8("Hi");
// console.log(x); Error

function test9() {
  let y = "Local variable";
  console.log("Available here:", y);
}
test9();
// console.log(y); Error

// let vs var
function test10() {
  if (true) {
    var x = "local";
  }
  console.log(x); // local
}
test10();

function test11() {
  if (true) {
    let x = "local";
  }
  // console.log(x); // Error
}
test11();

function test12() {
  if (true) {
    //console.log(x);
    // let x = "local"; // Error
    // var x = "local"; undefined
  }
}
test12();

// Global variables
let globalVar = "I am global";
console.log("hi", globalVar);

function testt() {
  console.log(globalVar);
}
testt();

let x1 = "GLOBAL";
function test100() {
  let x1 = "LOCAL";
  console.log(x1);
}
test100(); // LOCAL
console.log(x1); // GLOBAL

let x2 = "A"; // global
function test200(x2) {
  let x3 = "LOC";
  console.log(x2);
}
test200("JS");
console.log(x2);

//
let val = "GLO";
function changeVal() {
  val = "I changed global";
  console.log(val);
}
changeVal(); // I changed global
console.log(val); // I changed global

//
const text = "I Am Just a text";
let result = text.replace("am", "777");
console.log(result);

console.log(text.toUpperCase());
console.log(text.toLowerCase());

let arr = ["Football", "Basketball"];
console.log(arr[10]);

let string = "Sum: ";
let num = 5;
let res = string + num;
console.log(res);
console.log(typeof res);

let number1 = 20;
let string1 = "10";
let res2 = number1 - string1;
console.log(res2); // 20 - DCI => NaN
console.log(typeof NaN);
console.log(typeof res2);

let number2 = "70";
number2 = Number(number2);
console.log(number2, typeof number2); // 70 number

const examp = true;
console.log(Number(examp)); // 1

console.log(parseInt("567hqb778665")); // 567
console.log(Number("56777a8665")); // NaN

let example2 = parseInt("8 19 100 6 500"); //
console.log(example2);

let example3 = parseInt("10.60"); // 10
console.log(example3);

const number10 = "10";
console.log(5 + parseInt(number10)); // 15

const game = "100 Fifa is 100";
console.log(parseInt(game)); //

let x = parseFloat("7890ABC"); // 7890
let x3 = parseFloat("29.7"); // 29.7
let x4 = parseFloat("0994"); // 994
let x5 = parseFloat("741.9ABC"); // 741.9
console.log(x5);
