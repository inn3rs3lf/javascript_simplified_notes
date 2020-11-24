// Normal Functions //
//////////////////////

// We use functions to use repeatable piece of logic

function saHi() {
  // Parenththes allow us to pass in information
  console.log("Hello");
  console.log("Bye");
}
saHi(); //You need to call the function in order for it to run.

// Exercise: Create a function that prints out your name to the console.
function sayName() {
  console.log("Darryl");
}
sayName();

// Functions that take arguments //
///////////////////////////////////

function sum(a, b) {
  // You can think of arguments as variables
  console.log(a + b);
}

let a = 4;
let b = 8;

sum(1, 2); // a is assigned 1, and b is assigned 2. Much like variables

// Exercise: Creat a function that takes one argument (a persons name) and prints that out
function personName(name) {
  console.log(name); //This is pulling name from the argument
}

personName("Darryl");

// How to return a value //
///////////////////////////

function sum(a, b) {
  return a + b; // This stores the calculation in memory
}

let answer = sum(4, 6); //We assign the return value to a variable, and input the paramaters in the function. This will then take the values, and use the return calculation

console.log(answer); //We can then print the variable, which is the calculation result.

// Exercise: Create a function that takes an argument (name) it will return that name added to the end of a string "Hello"

function sayHello(name) {
  return "Hello " + name;
}

let helloString = sayHello("Darryl");
console.log(helloString);
