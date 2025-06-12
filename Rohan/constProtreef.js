//functions protype
//In JavaScript, every function has a special property called `prototype`. This property is crucial for implementing inheritance and sharing methods or properties among all instances created by a constructor function.
//What is `prototype`?
// - The `prototype` property is an object that is automatically attached to every function (except arrow functions).
// - When you use a function as a constructor (with `new`), all instances created from that constructor inherit properties and methods from the constructor’s `prototype`.

//How does it work?
// When you access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn’t find it, it looks up the prototype chain, starting with the object's constructor’s `prototype`.
// - `display` is added to `Person.prototype`, so all `Person` instances can use it.
// - If you create multiple `Person` objects, they all share the same `display` method, saving memory.

//Why use `prototype`?
// - **Efficiency:** Methods defined on the prototype are shared among all instances, rather than being duplicated for each object.
// - **Inheritance:** You can add new methods or properties to all existing and future instances by modifying the prototype.

//Gotchas
// - Properties defined inside the constructor (like `firstName`, `properAge`, `greet`) are unique to each instance.
// - Properties/methods on the prototype are shared.
// - If you overwrite the prototype with a new object, you may lose the default `constructor` property unless you set it manually.

// ### Example: Checking property location

// ```javascript
// console.log(p1.hasOwnProperty("display")); // false (it's on the prototype)
// console.log(p1.hasOwnProperty("firstName")); // true (it's on the instance)
// ```

// **Summary:**  
// The `prototype` property allows JavaScript objects to inherit features from one another, making code more efficient and enabling powerful patterns like inheritance and method sharing.

function Person(name, age) {
    this.firstName = name;
    this.properAge = age;

    this.greet = function() {
        console.log(`Hello, my name is ${this.firstName} and I am ${this.properAge} years old.`);
    };
}

Person.prototype.display = function() {
    console.log(`Hello, My Name is ${this.firstName}`);
};

Person.prototype.displayAge = function() {
    console.log(`I am ${this.properAge} years old.`);
};

let p1 = new Person("Rohan", 25);

Person.prototype.type = "Homo Sapien"; // Adding a new property to the prototype

p1.greet(); // Hello, my name is Rohan and I am 25 years old.
p1.display(); // Hello, My Name is Rohan    
p1.displayAge(); // I am 25 years old.
p1.toString(); // [object Object]
p1.type; // Homo Sapien
 
console.log(p1.hasOwnProperty("firstName")); // true (it's on the instance)
console.log(p1.hasOwnProperty("properAge")); // true (it's on the instance)
console.log(p1.hasOwnProperty("greet")); // true (it's on the instance)

console.log(p1.hasOwnProperty("display")); // false (it's on the prototype)

//constructor 
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.getInfo = function() {
    return `${this.year} ${this.make} ${this.model}`;
};

Car.prototype.start = function() {
    return `Starting the car: ${this.make} ${this.model}`
};

Car.prototype.stop = function() {
    return `Stopping the car: ${this.make} ${this.model}`
};

let c1 = new Car("Toyota", "Corolla", 2020);
console.log(c1.getInfo());
console.log(c1.start());
console.log(c1.stop()); 

//Inherit
// function Animal(species, age) {
//     this.species = species;
//     this.age = age;
// }

// Animal.prototype.getInfo = function() {
//     return `Species: ${this.species}, Age: ${this.age}`;
// };

// function Dog(name, breed, age) {
//     Animal.call(this, "Dog", age);
//     this.name = name;
//     this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function() {
//     return `${this.name} says Woof!`;
// };

// let d1 = new Dog("Buddy", "Golden Retriever", 3);
// console.log(d1.getInfo());
// console.log(d1.bark());



//proto
function Animal(name) {
    this.name = name;
}

let animal = new Animal("Lion");
console.log(animal.name); // Lion
console.log(animal.constructor); // [Function: Animal]
console.log(animal.__proto__); // Animal { constructor: [Function: Animal] }
console.log(Animal.prototype); // Animal { constructor: [Function: Animal] }
console.log(Animal.constructor); // true
console.log(Animal.prototype.constructor === Animal); // true


Animal.prototype = {
    constructor: Animal,
    speak(){
        console.log(`${this.name} makes a noise.`);
    },
    function() {
        
    },
    func(){

    }
}

let d1 = new Animal("Dog");
