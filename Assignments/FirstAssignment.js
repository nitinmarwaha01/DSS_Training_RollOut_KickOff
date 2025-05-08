// Part 1: Data Types
let myString = "Hello, world";      // String
let myNumber = 42;                  // Number
let myBoolean = true;               // Boolean
let myNull = null;                  // Null
let myUndefined = undefined;        // Undefined
let myBigInt = 12345678901234567890n; // BigInt
let mySymbol = Symbol("id");        // Symbol

console.log(typeof myString);       // string
console.log(typeof myNumber);       // number
console.log(typeof myBoolean);      // boolean
console.log(typeof myNull);         // object (quirk in JS)
console.log(typeof myUndefined);    // undefined
console.log(typeof myBigInt);       // bigint
console.log(typeof mySymbol);       // symbol

// Part 2: Arrays
let fruits = ["apple", "banana", "mango", "orange", "grape"];

fruits.push("pineapple");           // Add to the end
fruits.shift();                     // Remove the first element

console.log(fruits.length);         // Print length of array

// Part 3: Objects
let car = {
    brand: "Tesla",
    model: "Model 3",
    year: 2022,
    isElectric: true
};

car.color = "red";                  // Add new property
car.isElectric = false;            // Update property

// Print all key-value pairs
for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

// Create garage with 3 car objects
let garage = [
    car,
    { brand: "Ford", model: "Mustang", year: 2018, isElectric: false, color: "blue" },
    { brand: "Nissan", model: "Leaf", year: 2020, isElectric: true, color: "white" }
];

// Bonus challenge
function printGarageCars(garage) {
    garage.forEach(car => {
        console.log(`Brand: ${car.brand}, Model: ${car.model}`);
    });
}

// Call the function
printGarageCars(garage);