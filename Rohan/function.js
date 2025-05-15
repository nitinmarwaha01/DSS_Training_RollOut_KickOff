//Higher Order Function
// A higher-order function is a function that takes another function as an argument or returns a function as its result.
function createCounter(name) {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const appCount = createCounter();
console.log(appCount());

//You need to define the object methods using the correct object literal method syntax or as properties with function expressions, not with the function keyword inside an object literal.
// The object literal syntax is used to create objects in JavaScript.
// The function keyword is used to define functions, and when defining methods in an object literal, you can use shorthand syntax or the function keyword.
//The closure allows the inner function to access the variables of the outer function even after the outer function has finished executing.
// The closure is created when a function is defined inside another function, and the inner function retains access to the outer function's variables.
function createCounter1() {  
let count = 0;
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    reset: function() {
      count = 0;
      return count;
    }
  }
}

const appCount1 = createCounter1();
console.log(appCount1.increment());
console.log(appCount1.decrement());
console.log(appCount1.reset());


function outerFunction() {
  let count= 0;
  return function innerFunction() {
    count++;
    console.log(count);
    return count;
  }
    //The below is unreachable code bcoz the function is already returned, and once after returning it will not execute
    console.log("second log", count);
}

const outer = outerFunction();
outer(); // 1

//This code demonstrates the concept of higher-order functions and closures in JavaScript. The `multiplier` function takes a single argument, `factor`, and returns a new function. The returned function itself takes an argument `x` and multiplies it by the original `factor`. This means that `multiplier` is a function that creates other functions—specifically, functions that multiply their input by a fixed number.
//When you call `multiplier(2)`, it returns a new function that always multiplies its input by 2. This function is assigned to the constant `double`. Similarly, `multiplier(3)` creates a function that multiplies its input by 3, assigned to `triple`. The line `console.log(double(5));` calls the `double` function with the argument `5`, resulting in `10`, which is printed to the console.
//The key concept here is closure: the inner function returned by `multiplier` "remembers" the value of `factor` from when it was created, even after `multiplier` has finished executing. This allows you to create customized multiplier functions easily and demonstrates a powerful pattern in JavaScript programming.
function multiplier(factor) {
  return function(x) {
    return x * factor;
  };
}

const double = multiplier(2);

const triple = multiplier(3);
console.log(double(5)); // 10


//Pitfall of closure in JavaScript
//This code demonstrates a common pitfall in JavaScript closures, particularly when using `var` in a loop. The `for` loop iterates from `0` to `4`, and for each iteration, it sets a timeout to log the value of `i` after 1000 milliseconds (1 second). However, because `var` is function-scoped, by the time the timeout callbacks execute, the loop has already completed, and `i` has the value of `5`. As a result, all five timeouts will log `print 5`.
//This code uses a `for` loop to schedule five delayed log statements using `setTimeout`. The loop runs from `i = 0` to `i < 5`, incrementing `i` each time. For each iteration, it sets a timeout to execute a function after 1000 milliseconds (1 second). Inside the timeout's callback function, it logs the string `"print"` followed by the current value of `i`.
//A key detail here is the use of `let` to declare the loop variable `i`. In JavaScript, `let` creates a new binding for `i` in each iteration of the loop. This means that when the timeout callback runs, it "remembers" the value of `i` as it was during that specific iteration. As a result, after 1 second, the console will print:
//If `var` had been used instead of `let`, all callbacks would have logged `print 5`, because `var` does not create a new binding per iteration. This example highlights how `let` helps avoid common closure pitfalls in asynchronous code.
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log("print", i);
  }, 1000);
}

for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log("print", i);
  }, 1000);
}

//To handle above pitfall, we can use an IIFE (Immediately Invoked Function Expression) to create a new scope for each iteration of the loop. This way, each timeout callback captures the current value of `i` as it was during that specific iteration. The IIFE takes `i` as an argument and creates a new scope for each iteration, allowing us to log the correct value of `i` after the timeout.
for (var i = 0; i < 5; i++) {
  (function(i) {
    setTimeout(function() {
      console.log("print", i);
    }, 1000);
  })(i);
}

//Currying is a functional programming technique in which a function takes multiple arguments and transforms it into a sequence of functions, each taking a single argument. This allows for partial application of functions and can lead to more reusable and composable code.
//In this example, the `add` function takes two arguments, `a` and `b`, and returns their sum. The `curry` function takes a function `fn` as an argument and returns a new function that takes the first argument `a`. This new function returns another function that takes the second argument `b`. Finally, it calls the original function `fn` with both arguments.
function add(a, b) {
  return a + b;
}

//with currying
function curry(fn) {
  return function(a) {
    return function(b) {
      return fn(a, b);
    };
  };
}