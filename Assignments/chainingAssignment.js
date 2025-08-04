// Part 1: Chaining Multiple .call() Invocations
// 1. Create a base function `describeCar()` that logs: "This is a {color} {brand}."
// 2. Create three car objects: car1, car2, car3 with different brand and color values.
// 3. Chain `.call()` to invoke `describeCar` for each car.
// Part 2: Use .apply() with Math Functions
// 1. Write a function `findMax()` that takes a variable number of arguments and returns the max value.
// 2. Use `Math.max.apply(null, arguments)` inside the function.
// 3. Call `findMax(4, 7, 1, 9, 3)` and log the result.

// Part 4: Reuse a Method with bind() in setTimeout
// 1. Create

function describeCar(){
    console.log(`This is a ${this.color} ${this.brand}`)
}
//car objects
const car1 ={ brand : 'toyota', color : 'red'};
const car2 ={ brand : 'honda', color : 'blue'};
const car3 ={ brand : 'tata', color : 'green'}

describeCar.call(car1);
describeCar.call(car2);
describeCar.call(car3);

function findMax(){
    return Math.max.apply(null, arguments)
}
console.log(findMax(4, 7, 1, 9, 3));

// Part 3: Simulate Inheritance with call()
// 1. Create a constructor function `Animal(name)` that sets this.name.
// 2. Create another constructor `Dog(name, breed)` and use `Animal.call(this, name)` to inherit.
// 3. Create an instance of `Dog` and print both name and breed.

function Animal(name) {
    this.name = name;
}
function Dog(name,breed){
    Animal.call(this, name);
    this.breed= breed ;
}
const myDog =new Dog(`puppy`, 'Golden Retriever');
console.log(`Name :${myDog.name}, Breed : ${myDog.breed}`);


// Part 4: Reuse a Method with bind() in setTimeout
// 1. Create an object `countObj` with a `count` property and a `logCount` method.
// 2. Use `setTimeout` to call `logCount` after 1 second, but ensure `this` still refers to `countObj` using
// `.bind()`.
const countObj ={
    count:0,
    logCount(){
        console.log(`current count: ${this.count}`)
    }
};
setTimeout(countObj.logCount.bind(countObj),1000);



