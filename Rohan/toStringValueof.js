const num=20;
 console.log(num.toString()); // "20"
 console.log(num.valueOf()); // 20

// The `toString` method converts a number to its string representation, while the `valueOf` method returns the primitive value of the number.
// In this case, `num.toString()` returns the string "20", and `num.valueOf()` returns the number 20 itself.

const obj = {
  name: "Rohan",
  age: 25,
  toString: function() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  valueOf: function() {
    return this.age;
  }
};

console.log(obj.toString()); // "Name: Rohan, Age: 25"
console.log(obj.valueOf()); // 25

const obj2 = {
    a: 10,
}

console.log(obj2 + 20);
// This will call the `valueOf` method of `obj2`, which returns 10, and then adds 20 to it, resulting in 30.
console.log(obj2.toString()); // "[object Object]"

//override toString and valueOf methods
// This code demonstrates how to override the `toString` and `valueOf` methods in a custom object to control how it is represented as a string and how it behaves in arithmetic operations.
// Example of overriding `toString` and `valueOf` methods in a custom object
const myDate = {
  year: 2023,
  month: 10,
  day: 5,

  toString: function() {
    return `${this.year}-${this.month}-${this.day}`;
  },
  valueOf: function() {
    return new Date(this.year, this.month - 1, this.day);
  }
};

console.log(myDate.valueOf()); // Outputs a Date object representing the date
console.log(myDate.toString()); // Outputs "2023-10-5"

const today = new Date();
console.log(today.toString()); // Outputs the current date in string format
console.log(today.valueOf()); 
//Explains how the `valueOf` method returns the primitive value of the date object, which is the number of milliseconds since January 1, 1970, 00:00:00 UTC.
console.log(today.valueOf()); // Outputs the number of milliseconds since January 1, 1970, 00:00:00 UTC

const date1 = new Date(2023, 9, 5); // October is month 9 (0-indexed)
const date2 = new Date(2024, 10, 5); // November is month 10 (0-indexed)
console.log(date1 < date2); // true, because date1 is earlier than date2
console.log(date1 > date2); // false, because date1 is not later than date2
var x = date2 - date1; // Outputs the difference in milliseconds between the two dates
console.log(x.toString()); // Outputs the difference in milliseconds as a string




