//Apply and Call in JavaScript
//Call method in JavaScript is used to call a function with a specified 'this' value and arguments provided individually.
//Apply method in JavaScript is similar to call method, but it takes an array of arguments.
//Apply and call are used on methods which don't have objects to refer to, so we can use them to set the 'this' context of a function.

function greetMessage() {
    return `Hello, ${this.nm}!!! ${this.message}`;
}

let obj = {
    nm: "Rohan",
    message: "Welcome to the JavaScript world!"
};

console.log(greetMessage());

console.log(greetMessage.call(obj)); // Using call to set 'this' to obj
console.log(greetMessage.apply(obj)); // Using apply to set 'this' to obj

const newFunc = greetMessage.bind(obj); // Using bind to create a new function with 'this' set to obj
console.log(newFunc()); // Calling the new function


const person = {
    name: "Rohan",
    greet: function(greeting, punctuation) {
        return greeting + ', ' + this.name + punctuation;
    },

    greetMessage: function(greetMsg) {
        return greetMsg + ', ' + this.name + '!';
    }
};

const anotherPerson = {
    name: "Alice",
    greetMsg : "Good Morning"
    
};

console.log(person.greet("Hello", "!")); // "Hello, Rohan!"
console.log(person.greet.call(anotherPerson, "Hi", ".")); // "Hi, Alice."

console.log(person.greetMessage.call(anotherPerson, "Good Morning"));
