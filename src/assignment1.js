//Part1
num=42;
str='Hello';
bool=true;
n=null;
let undefin;
sym=Symbol('sym');
bigIntNum=1n;

console.log(num, typeof(num));//42 number
console.log(str,typeof(str)); //Hello string
console.log(bool,typeof(bool));//true boolean
console.log(n,typeof(n));//null object
console.log(undefin,typeof(undefin));//undefined undefined
console.log(sym,typeof(sym));//Symbol(sym) symbol
console.log(bigIntNum,typeof(bigIntNum));//1n bigint
var a=-1n
console.log(a);//-1n

//part2
//Create an array named fruits with at least 5 fruit names
const fruits=['banana','apple','mango','watermelon','grape']
console.log(fruits);
//Add new fruiy to the end of the array
fruits.push('cherry');
console.log(fruits); //[ 'banana', 'apple', 'mango', 'watermelon', 'grape', 'cherry' ]
//Remove the first fruit from array
fruits.shift()
console.log(fruits);//[ 'apple', 'mango', 'watermelon', 'grape', 'cherry' ]
//print lenghth of array
console.log(fruits.length)

//part3
//Create an object named car with the following properties:
// brand
// model
// year
// isElectric

const car={
    brand:'Tata',
    model:'Nexon',
    Year:'2015',
    isElectric:'No'
}
// Add a new property called color.
car.color='Red'
// Update the isElectric value.
car.isElectric='Yes'
// Print all key-value pairs in the car object.
console.log(car)
// Create an array called garage that holds 3 car objects.
const garage=[ car,
    { brand: 'Honda', model: 'Civic', year: 2019 },
    { brand: 'Ford', model: 'Mustang', year: 2021 }];

//Part 4-Bonus Challenge    
//Write a function printGarageCars(garage) that prints the brand and model of every car in the garage.

function printGarageCars(garage){
    garage.forEach((car) => {
        console.log('Car-Brand:'+car.brand +' Car-Model:'+ car.model)
    });
}

printGarageCars(garage);