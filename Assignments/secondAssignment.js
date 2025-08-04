// Q1: Multiply each number in an array by 2
const input1 = [1, 2, 3, 4, 5];
const output1 = input1.map(num => num * 2);
console.log(output1);

// Q2: Extract only the names from an array of user objects
const users = [
  { id: 1, name: "Aman" },
  { id: 2, name: "Tony" },
  { id: 3, name: "Raj" }
];
const names = users.map(user => user.name);
console.log(names);

// Q3: Get all even numbers from an array
const input3 = [1, 2, 3, 4, 5, 6];
const evenNumbers = input3.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Q4: Get users aged 18 or older
const people = [
  { name: "Ron", age: 17 },
  { name: "Mon", age: 21 },
  { name: "Tom", age: 18 }
];
const adults = people.filter(person => person.age >= 18);
console.log(adults);

// Q5: Find the sum of all numbers in an array
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// Q6: Count how many times each fruit appears
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count);

// Q7: Get the total price of items that cost more than $20
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Pencil", price: 5 },
  { name: "Bag", price: 50 }
];
const total = products
  .filter(product => product.price > 20)
  .reduce((acc, product) => acc + product.price, 0);
console.log(total);

// Mini Project: Expense Tracker Dashboard
const expenses = [
  { id: 1, description: "Grocery", amount: 90, category: "Food", date: "2025-05-10" },
  { id: 2, description: "Movie", amount: 30, category: "Entertainment", date: "2025-05-12" },
  { id: 3, description: "Internet", amount: 45, category: "Utilities", date: "2025-04-28" },
  { id: 4, description: "Bill", amount: 60, category: "Utilities", date: "2025-05-05" },
  { id: 5, description: "Gym", amount: 50, category: "Health", date: "2025-05-01" },
  { id: 6, description: "Burger", amount: 20, category: "Food", date: "2025-05-19" },
];
const currentMonth = "2025-05";
const currentExpenses = expenses.filter(expense => expense.date.startsWith(currentMonth));
const summary = currentExpenses.reduce((acc, expense) => {
  acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
  return acc;
}, {});
const formatted = currentExpenses.map(expense => `${expense.description}: $${expense.amount} (${expense.category})`);
console.log(currentExpenses);
console.log(summary);
console.log(formatted);