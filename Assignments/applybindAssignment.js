// JavaScript Practical Assignment: call, apply, and bind
// Objective:
// Understand and demonstrate the use of .call(), .apply(), and .bind() in different JavaScript contexts.
// ---
// Part 1: Function Borrowing with .call()
// 1. Create an object person1 with a method getFullName() that returns firstName + " " + lastName.
// 2. Create another object person2 with the same properties but no getFullName() method.
// 3. Use .call() to use person1's getFullName method for person2.

const person1= {
    firstName : 'Aman',
    LastName :  'Bhatnagar',
    getfullName() {
       return this.firstName + " " + this.LastName
    }
}

const person2 ={
    firstName : 'john',
    LastName :  'doe',
}
console.log(person1.getfullName.call(person2))

// Part 2: Using .apply() to Pass Arguments as Arrays
// 1. Write a function introduce(greeting, punctuation) that returns: "Hello, I am John Doe!"
// 2. Use .apply() to call introduce() on person1 or person2 with arguments passed as an array.

function introduce(greeting , punctuation)
{
   return `${greeting}", I am ${this.firstName} ${this.LastName} ${punctuation}`
}

const args= ['Hello', '!!']   //array
console.log(introduce.apply(person2,args))

// Part 3: Binding Function Permanently with .bind()
// 1. Create a function logName() that logs the full name using this.firstName and this.lastName.
// 2. Bind logName() permanently to person2 and store it in a new variable boundLog.
// 3. Call boundLog() later in the code and ensure it still logs person2's name.

function logName(){
    console.log(this.firstName + '' + this.LastName);
}
const boundLog = logName.bind(person2); //function to bind with object
boundLog();

// Part 4: Use bind in Event Listener Context
// 1. Create a button in HTML: <button id="greetBtn">Greet</button>
// 2. Create an object user with firstName and a method greet() that shows an alert: "Hello, John!"
// 3. Add an event listener to the button and bind greet() to the user object.
// Bonus Task: Partial Application with .bind()
// 1. Create a multiply(a, b) function.
// 2. Use .bind() to create a double(x) function that always multiplies by 2.

function multiply(a,b)
{
    return a*b;
}
const double =
 multiply.bind(null,2) //1st null is for object, 2 is 1st argument in mutiply ie-a

console.log(double(5));

