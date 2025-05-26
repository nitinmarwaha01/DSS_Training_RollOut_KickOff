//memoization is a technique to store the results of expensive function calls and return the cached result when the same inputs occur again
// //This code demonstrates a simple implementation of memoization in JavaScript. The `memoize` function takes another function `fn` as an argument and returns a new function that caches the results of calling `fn` with specific arguments. The cache is stored in an object called `cache`, where the keys are stringified versions of the arguments passed to `fn`. If the result for a given set of arguments is already in the cache, it returns that result instead of calling `fn` again. 
// //This is particularly useful for optimizing performance in cases where the same function is called multiple times with the same arguments, such as in recursive algorithms or expensive computations.


function fact(n){
    if(n==0 || n==1) return 1;
    let result = 1;
    for(let i=2; i<=n; i++){
        result *= i;
    }
    return result;
}

console.time("simple");
console.log(factorial(5)); // 120
console.timeEnd("simple"); 

//recursive function
//This code demonstrates a simple recursive function to calculate the factorial of a number. The `factorial` function takes a single argument `n` and checks if it is less than or equal to 1. If so, it returns 1 (the base case). Otherwise, it recursively calls itself with `n - 1` and multiplies the result by `n`. This continues until the base case is reached, at which point the recursion unwinds and the final result is calculated.
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.time("recursive");
console.log(factorial(5)); // 120
console.timeEnd("recursive"); 

//Memoization way
//This code demonstrates a simple implementation of memoization in JavaScript. 
function memoizeFactorial() {
    let cache = {};
    function memoFactorial(n){
        if(n in cache) {
            return cache[n];
        }
        if (n <= 1) return 1;

        cache[n] = n * memoFactorial(n - 1);
        return cache[n];
    }
    return memoFactorial;
}

console.time("memoization");
var factMemo = memoizeFactorial();
console.log(factMemo(7)); // 5040
console.timeEnd("memoization"); 

console.time("memo");
var factMemo = memoizeFactorial();
console.log(factMemo(7)); // 5040
console.timeEnd("memo"); 