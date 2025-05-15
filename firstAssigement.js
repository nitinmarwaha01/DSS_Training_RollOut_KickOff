//Declare variables for each of the following types:

var str="Gauri Deshmukh";

console.log("String Variable :",str);
console.log("type of str :",typeof(str));

var num=100;

console.log("number varibale:",num);
console.log("tyoe of num:",typeof(num));

var Boolean=true;

console.log("Boolean variable :",Boolean);
console.log("type of boolean:",typeof(Boolean));

var bgint= 2000000n;
console.log("BigInt variable:",bgint);
console.log("type of bgint: ",typeof(bgint));

var a; 
console.log("type of a varibale:",typeof(a)); 

var b = undefined;
console.log("type of b varibale:",typeof(b));

var n = null;
console.log(n);
console.log("type of n varibale:",typeof(n));


// Create an array named fruits with at least 5 fruit names.
var fruits=["Mango","apple","banana","watermelon","orange"];

//length of Fruit array
console.log("length of Fruits array-",fruits.length);

//Add a new fruit to the end of the array
fruits.push("Chiku");
console.log("length of Fruits array-",fruits);
console.log("length of Fruits array-",fruits.length);

//Remove the first fruit from the array
fruits.shift(0);

//print array
console.log(fruits);

//length of fruits array
console.log("length of Fruits array-",fruits.length);

//Create an object named car with the following properties:

var car = {
  Brand: "TATA",
  model:"Nexon",
  year: 2022,
  isElectric: false
};

//Add a new property called color
car.color="White";

//print object 
console.log(car);

//update the isElectric value
car.isElectric=true;

//print oject 
console.log(car);

//print an array called garage

var garage=[
  {
  Brand: "TATA",
  model:"Nexon",
  year: 2022,
  isElectric: false
},
{
  Brand: "TATA",
  model:"Punch",
  year: 2023,
  isElectric: true
},
{
  Brand: "TATA",
  model:"Tigore",
  year: 2021,
  isElectric: false
}];

function printCar(car) {
  console.log("Car Details:");
  console.log("Brand: " + car.Brand);
  console.log("Model: " + car.model);
  console.log("Year: " + car.year);
  console.log("IsElectric: " + car.isElectric);
}

printCar(garage[0]);
printCar(garage[1]);
printCar(garage[2]);