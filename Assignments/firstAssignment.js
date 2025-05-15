//  Part 1: Data Types


const string_1 = "A string Variable";
const string_2 = 'Also a  string Variable';
const string_3 = " ";

const number_1 = 1123;
const number_2 = 11.23;

const boolean_1 = true;
const boolean_2 = false;

const null_1 = null; 

let undefined_Variable ;

const bigNumber = 12345678910111213141516171819202122232425262728293031323334353637383940n;


const sym1 = Symbol();              // Creates a new, unique symbol
const sym2 = Symbol('description'); // Optional description for debugging

const a = Symbol('id');
const b = Symbol('id');

console.log(`Symbol A === B : ${a === b} \n`); // false ,  Symbol are unique sometimes for the Browsers as well


// -----------------------------------------------------------------------------------


// Part 2: Arrays

let fruits = ['Apple', 'Banana', 'Cherry', 'Mango', 'Pineapple'];

fruits.push('Orange');

fruits.shift();

console.log(`fruits Array : ${fruits.length} \n`);


// -----------------------------------------------------------------------------------


// Part 3: Objects

let car = {
    brand: 'Tesla',
    model: 'Model 3',
    year: 2022,
    isElectric: true
  };
  

  car.color = 'Red';
  

  car.isElectric = false;
  

  for (let key in car) {
    console.log(`${key}: ${car[key]}`);
  }
  
console.log()

  let garage = [
    {
      brand: 'Toyota',
      model: 'Fortuner',
      year: 2021,
      isElectric: false,
      fuel:"Diesel",
      color: 'White'
    },
    {
      brand: 'Tata',
      model: 'Nexon',
      year: 2023,
      isElectric: false,
      fuel:"petrol",
      color: 'Blue'
    },
    {
    brand: 'Mahindra',
    model: 'Scorpio N',
    year: 2025,
    isElectric: false,
    fuel:"Diesel",
    color: 'Black'
    }
  ];

//   console.log(garage , "\n");

  console.log(garage[0], "\n");
  console.log(garage[1], "\n");
  console.log(garage[2], "\n");


function printGarageCars(garage){
    for(let i = 0 ; i < garage.length ; i++){
        console.log(`The Brand is ${garage[i].brand} : and the Model is ${garage[i].model}`);
    }
}

printGarageCars(garage);