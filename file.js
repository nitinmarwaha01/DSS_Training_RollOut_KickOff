// ✅ Part 1: Data Types
let str = "Hello, World!";
let num = 42;
let bool = true;
let nullVal = null;
let undef;
let bigIntVal = 1234567890123456789012345678901234567890n;
let sym = Symbol("unique");

console.log("String:", typeof str);
console.log("Number:", typeof num);
console.log("Boolean:", typeof bool);
console.log("Null:", typeof nullVal); // 'object' (quirk in JS)
console.log("Undefined:", typeof undef);
console.log("BigInt:", typeof bigIntVal);
console.log("Symbol:", typeof sym);

console.log("--------------------------------------------------");

// ✅ Part 2: Arrays
let fruits = ["Apple", "Banana", "Mango", "Grapes", "Pineapple"];

fruits.push("Strawberry");        // Add new fruit at the end
fruits.shift();                   // Remove the first fruit

console.log("Fruits:", fruits);
console.log("Length of fruits array:", fruits.length);

console.log("--------------------------------------------------");

// ✅ Part 3: Objects
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
    brand: "Toyota",
    model: "Corolla",
    year: 2019,
    isElectric: false,
    color: "Blue",
  },
  {
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
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

console.log("--------------------------------------------------");

// 🎯 Bonus Challenge
function printGarageCars(garage) {
  console.log("Cars in the garage:");
  garage.forEach((car, index) => {
    console.log(`${index + 1}. ${car.brand} ${car.model}`);
  });
}

printGarageCars(garage);
