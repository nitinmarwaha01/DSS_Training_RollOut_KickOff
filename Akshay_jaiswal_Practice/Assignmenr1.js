//Data types
var String = "Akshay Jaiswal";
console.log(typeof String);
var Number = 12;
console.log(typeof Number);
var Boolean= true;
console.log(typeof Boolean);
var value = "null";
console.log(typeof value);
var a;
console.log(typeof a);
var Bigint = 123527537527n;
console.log(typeof Bigint);
var Bigint1 = 12;
console.log(typeof Bigint1);
var sym = Symbol('hash');
console.log(typeof sym);
///////////////////////////////////////////////////////////

//Part2: Arrays
// create an array named fruits with at least 5 fruit names
var arr =["apple", "mango", "banana", "grapes","tomato"];

//Add a new fruit to the end of the array
console.log(arr.push("chiku"));
console.log(arr);

//Remove the first fruit from the array
arr.shift();
console.log(arr);
//print length of array
console.log(arr.length);
////////////////////////////////////////////////////////////
//Part3: Create an object named car with the properties

var car={
    brand :"TATA",
    model: "PUNCH",
    Year :"2019",
    isElectric:"NO",
}
console.log(car);
//add one property color
car.color="White";
console.log(car);

//update the isElectric value
car.isElectric ="yes";
console.log(car);

//create an array called garage that holds 3 car objects
var garage = [
    { brand: "TATA", model: "PUNCH", Year: "2019", isElectric: "yes", color: "White" },
    { brand: "Hyundai", model: "i20", Year: "2020", isElectric: "no", color: "Red" },
    { brand: "Maruti", model: "Swift", Year: "2021", isElectric: "no", color: "Blue" }
];
console.log(garage);
//write a fuction printGarageCars(garage) that prints the brand and model of every car in the garage
function printGarageCars(garage) {
    garage.forEach(function(car) {
        console.log(car.brand + " " + car.model);
    });
}

printGarageCars(garage);