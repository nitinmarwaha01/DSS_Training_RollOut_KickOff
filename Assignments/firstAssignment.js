//Part 1: Data Types
//Declare variables for each of the following types:

// String

// Number

// Boolean

// Null

// Undefined

// BigInt

// Symbol

// Print the type of each variable using typeof.
// ----------------------------------------------------------------------------------------
// ✅ Part 2: Arrays
// Create an array named fruits with at least 5 fruit names.

// Add a new fruit to the end of the array.

// Remove the first fruit from the array.

// Print the length of the array.


// -----------------------------------------------------------------
// ✅ Part 3: Objects
// Create an object named car with the following properties:

// brand

// model

// year

// isElectric

// Add a new property called color.

// Update the isElectric value.

// // Print all key-value pairs in the car object.
//  Bonus Challenge:
// Write a function printGarageCars(garage) that prints the brand and model of every car in the garage.

let mystr = "Hello";

let num = 42;

let Bool = true;
let myNull = null;
let myUndefined ;
let myBigInt = 65656556695787n;
let mySymbol =Symbol("unique");
console.log("5"- 20)

console.log("String:", typeof mystr);
console.log("Number:", typeof num);
console.log("Boolean:", typeof bool);
console.log("Null:", typeof myNull);
console.log("Undefined:", typeof Undefined);
console.log("BigInt:", typeof myBigInt);
console.log("Symbol:", typeof mySymbol);

// console.log("--------------------------------------------------");

//Part 2: Arrays
let fruits = ["mango","apple","grape","banana","dragon fruit"];

fruits.push("Strawberry");        // Add new fruit at the end
fruits.shift();                   // Remove the first fruit

console.log("Fruits:", fruits);
console.log("Length of fruits array:", fruits.length);

console.log("--------------------------------------------------");

//Part 3: Objects
let car = {
  brand: "Tesla",
  model: "Model S",
  year: 2022,
  isElectric: true,
};

// Add new property
car.color = "Red";

// Update existing property
car.isElectric = false;

// Print all key-value pairs
console.log("Car Object:");
for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}

// Create garage array with 3 car objects
let garage = [
  {
    brand: "Honda",
    model: "City",
    year: 2015,
    isElectric: false,
    color: "Black",
  },
  {
    brand: "Tata",
    model: "Tiago",
    year: 2020,
    isElectric: true,
    color: "White",
  },
  {
    brand: "Ford",
    model: "Mustang",
    year: 2020,
    isElectric: false,
    color: "Black",
  },
];

// console.log("--------------------------------------------------");

// // 🎯 Bonus Challenge
function printGarageCars(garage) {
  console.log("Cars in the garage:");
  garage.forEach(car => {
    console.log(`${car.brand} ${car.model}`);
  });
}

printGarageCars(garage);
