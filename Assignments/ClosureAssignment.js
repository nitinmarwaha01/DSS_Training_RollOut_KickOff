// Closure Assignments
// Part 1: Conceptual Questions
// Q1. What is a closure in JavaScript?
// Q2. Why are closures useful? Give a real-world example.
// Q3. Can a closure access variables from its outer function after the outer function has returned? Explain.
// Q4. What are some common use-cases of closures in web development?
// Q5. Is closure related to memory leaks? If yes, how?
// Part 2: Code Output Questions
// Q6.
function outer() {
let count = 0;
return function () {
count++;
console.log(count);
};
}
let counter = outer();
counter();
counter();
// Q7.
function makeAdder(x) {
return function(y) {
return x + y;

};
}
let add5 = makeAdder(5);
console.log(add5(10)); //output 15
// Q8.
// for (var i = 0; i < 3; i++) {
// setTimeout(function () {
// console.log(i);
// }, 1000);
// }
// Q9.
let funcs = [];
for (let i = 0; i < 3; i++) {
funcs.push(function () {
console.log(i);
});
}
funcs[0]();
funcs[1]();
funcs[2]();
// Part 3: Fix the Code
// Q10. The following code logs "3" three times. Fix it to log 0, 1, 2 instead.
for (var i = 0; i < 3; i++) 
{
setTimeout(function() {
console.log(i);
}, 1000);
}