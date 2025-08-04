// ================================================================
// HIGHER-ORDER ARRAY METHODS: PRACTICAL EXERCISES
// ================================================================

// This file contains practical exercises for mastering JavaScript's
// higher-order array methods. Each section focuses on a different method
// with examples and exercises.

// To run these exercises:
// 1. Copy the code to a JavaScript file
// 2. Use Node.js to run it: node filename.js
// 3. Uncomment the console.log statements to see results
// 4. Try solving the exercises before looking at the solutions

// ================================================================
// MAP EXERCISES
// ================================================================

console.log("===== MAP EXERCISES =====");

const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics" },
  { id: 2, name: "Coffee Maker", price: 129, category: "Kitchen" },
  { id: 3, name: "Running Shoes", price: 89, category: "Fitness" },
  { id: 4, name: "Bluetooth Speaker", price: 69, category: "Electronics" },
  { id: 5, name: "Yoga Mat", price: 29, category: "Fitness" }
];

// EXAMPLE: Create an array of just the product names
const productNames = products.map(product => product.name);
console.log("Product names:", productNames);

// EXERCISE 1: Create an array of formatted price strings (e.g., "$999")

// EXERCISE 2: Create an array of objects with just id and name properties

// EXERCISE 3: Create an array with a 10% discount applied to all prices

// EXERCISE 4: Transform the array to add a "shortName" property that's limited to 10 characters




// ================================================================
// FILTER EXERCISES
// ================================================================

console.log("\n===== FILTER EXERCISES =====");

const users = [
  { id: 1, name: "Alice", age: 25, role: "developer", active: true },
  { id: 2, name: "Bob", age: 17, role: "intern", active: true },
  { id: 3, name: "Charlie", age: 35, role: "manager", active: false },
  { id: 4, name: "Diana", age: 32, role: "developer", active: true },
  { id: 5, name: "Edward", age: 42, role: "admin", active: true },
  { id: 6, name: "Fiona", age: 28, role: "developer", active: false }
];

// EXAMPLE: Filter to only active users
const activeUsers = users.filter(user => user.active);
console.log("Active users:", activeUsers);

// EXERCISE 1: Filter to users who are developers

// EXERCISE 2: Filter to active users who are 30 or older

// EXERCISE 3: Filter products to only those in the "Electronics" category

// EXERCISE 4: Find items that are either cheap (< $50) or from the fitness category




//******************************************************************************** */
//******************************************************************************** */

// ================================================================
// REDUCE EXERCISES
// ================================================================

console.log("\n===== REDUCE EXERCISES =====");

const orders = [
  { id: 1, userId: 1, products: ["Laptop", "Mouse"], total: 1099 },
  { id: 2, userId: 3, products: ["Coffee Maker"], total: 129 },
  { id: 3, userId: 1, products: ["Headphones", "Speakers"], total: 249 },
  { id: 4, userId: 2, products: ["Yoga Mat", "Water Bottle"], total: 49 },
  { id: 5, userId: 3, products: ["Monitor", "Keyboard"], total: 349 },
  { id: 6, userId: 1, products: ["Smartphone"], total: 799 }
];

// EXAMPLE: Calculate the total value of all orders
const totalValue = orders.reduce((sum, order) => sum + order.total, 0);
console.log("Total value of all orders:", totalValue);

// EXERCISE 1: Count the total number of products ordered across all orders

// EXERCISE 2: Group the orders by userId

// EXERCISE 3: Create an object with users as keys and the sum of their order totals as values

// EXERCISE 4: Create a flat array of all products ordered (with duplicates)

// EXERCISE 5: Find the most expensive order



// ================================================================
// COMBINATION EXERCISES
// ================================================================
console.log("\n===== COMBINATION EXERCISES =====");

const transactions = [
  { i: 1, userId: 3, type: "purchase", amount: 299, category: "Electronics" },
  { id: 2, userId: 1, type: "purchase", amount: 149, category: "Clothing" },
  { id: 3, userId: 2, type: "refund", amount: 29, category: "Books" },
  { id: 4, userId: 1, type: "purchase", amount: 99, category: "Electronics" },
  { id: 5, userId: 3, type: "refund", amount: 39, category: "Toys" },
  { id: 6, userId: 2, type: "purchase", amount: 199, category: "Electronics" },
  { id: 7, userId: 1, type: "purchase", amount: 49, category: "Books" }
];

// EXERCISE 1: Calculate the net amount for each user (purchases - refunds)
const netAmountByUser = transactions.reduce((acc, transaction) => {
  const { userId, type, amount } = transaction;
  if (!acc[userId]) {
    acc[userId] = 0;
  }
  acc[userId] += type === "purchase" ? amount : -amount;
  return acc;
}, {});

console.log(netAmountByUser);
// Output: { '1': 297, '2': 170, '3': 260 }


// EXERCISE 2: Find the user who spent the most on electronics

const electronicsSpendingByUser = transactions.reduce((acc, transaction) => {
  const { userId, category, amount } = transaction;
  if (category === "Electronics") {
    if (!acc[userId]) {
      acc[userId] = 0;
    }
    acc[userId] += amount;
  }
  return acc;
}, {});

const maxSpender = Object.keys(electronicsSpendingByUser).reduce((maxUser, userId) => {
  return electronicsSpendingByUser[userId] > (electronicsSpendingByUser[maxUser] || 0) ? userId : maxUser;
}, null);

console.log(maxSpender);
// Output: 3


// EXERCISE 3: Get a count of transactions by category
const transactionCountByCategory = transactions.reduce((acc, transaction) => {
  const { category } = transaction;
  if (!acc[category]) {
    acc[category] = 0;
  }
  acc[category]++;
  return acc;
}, {});

console.log(transactionCountByCategory);
// Output: { Electronics: 3, Clothing: 1, Books: 2, Toys: 1 }




// ================================================================
// ADVANCED EXERCISES
// ================================================================

console.log("\n===== ADVANCED EXERCISES =====");

const data = [
  { date: "2023-01-01", sales: [120, 230, 450], department: "electronics" },
  { date: "2023-01-01", sales: [45, 130, 80], department: "grocery" },
  { date: "2023-01-02", sales: [55, 50], department: "electronics" },
  { date: "2023-01-02", sales: [370, 210, 130, 90], department: "grocery" },
  { date: "2023-01-03", sales: [290, 135, 240], department: "electronics" },
  { date: "2023-01-03", sales: [110, 175, 120], department: "grocery" }
];

// EXERCISE 1: Calculate the total sales for each department
// Your code here:

// EXERCISE 2: Calculate the total sales for each day

// EXERCISE 3: Find the day with the highest sales


