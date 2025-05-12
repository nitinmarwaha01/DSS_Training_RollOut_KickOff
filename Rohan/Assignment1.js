/*✅ Part 1: Data Types
Declare variables for each of the following types:
String
Number
Boolean
Null
Undefined
BigInt
Symbol
Print the type of each variable using typeof.*/

var name = "Rohan";
console.log(typeof name);

var age = 28;
console.log(typeof age);

var bol = true;
console.log(typeof bol);

var nullVar = null;
console.log(typeof nullVar);

var undefinedVar;
console.log(typeof undefinedVar);

var bigIntVar = BigInt(1234567890123456789012345678901234567890);
console.log(typeof bigIntVar);

var symbolVar = Symbol("rSK");
console.log(typeof symbolVar);

/*✅ Part 2: Arrays
Create an array named fruits with at least 5 fruit names.

Add a new fruit to the end of the array.

Remove the first fruit from the array.

Print the length of the array. */

var fruits = ["apple", "banana", "orange", "grape", "kiwi"];
fruits.push("mango");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("strawberry");
console.log(fruits);

console.log(fruits.length);

/*✅ Part 3: Objects
Create an object named car with the following properties:

brand

model

year

isElectric

Add a new property called color.

Update the isElectric value.

Print all key-value pairs in the car object.

Create an array called garage that holds 3 car objects. */

var car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  isElectric: "false",
};

car.color = "black";
console.log(car);

car.isElectric = true;
console.log(car);

var garage =[{brand: "Toyota", model: "Camry", year: 2020, isElectric: false}, 
    {brand: "Honda", model: "Civic", year: 2019, isElectric: false},
    {brand: "Tesla", model: "Model S", year: 2021, isElectric: true}];
console.log(garage);

/* 🎯 Bonus Challenge:
Write a function printGarageCars(garage) that prints the brand and model of every car in the garage.*/

function printGarageCars(garage) {
  for (var i = 0; i < garage.length; i++) {
    console.log("Car " +(i + 1) +": " +garage[i].brand +" " +garage[i].model);
  }   
}
printGarageCars(garage);

console.log("5"+ 10); // Concatenation
console.log(5 + 10); // Addition
console.log(5 - 10); // Subtraction
console.log("5" * 10); // Multiplication
console.log(true + 1);  // Addition
console.log(false - 1); // Subtraction
console.log(Number("343")) // Conversion to number
console.log(String(343)) // Conversion to string
console.log(Boolean(0)) // Conversion to boolean
console.log(Boolean(1)) // Conversion to boolean
console.log(Boolean("0")) // Conversion to boolean
console.log(Boolean("1")) // Conversion to boolean
console.log(Boolean("")); // Conversion to boolean


// IIFE (Immediately Invoked Function Expression) to print a message
(function(){
  console.log("Hello, I am attending JS training");
})();

/*A generator function in JavaScript is a special type of function that can be paused and resumed, 
allowing you to yield multiple values over time instead of returning just one. 
It's defined using the function* syntax and uses the yield keyword.*/

function* numberGenerator() {
   yield 1;
   yield 2;
   yield 3;
}

const gen = numberGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

/*The setTimeout() function in JavaScript is used to delay the execution of a function by a specified number of milliseconds.*/
setTimeout(function() {
  console.log("This message is shown after 2 seconds");
}, 2000);


function greet(name) {
  console.log("Hello, " + name);
}

setTimeout(greet, 1500, "Rohan");


