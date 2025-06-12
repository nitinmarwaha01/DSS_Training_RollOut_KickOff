let arr1 = [1, 2, 3, 4, 5];
let transarr1 = arr1.map((arr1)=>(arr1*2))
console.log(transarr1);

//Example extract only names from an array of objects
let users = [
    { name: 'Alice', role: "dev" },
    { name: 'Bob', role: "QA" },
    { name: 'Charlie', role: "dev" },
    { name: 'David', role: "dev" },
    { name: 'Eve', role: "Mgr" },
    { name : false, role: "dev" }
];
let names = users.map((user) => user.name);
console.log(names);
let roles = users.filter((user) => user.role === "dev");
console.log(roles);

let roles1= users.filter((user) => user.role === "dev").map((user) => user.name);
console.log(roles1);

let arr2 = [1, 2, 3, 4, 5, 6];
let transarr2 = arr2.filter((value) => value % 2 === 0);
console.log(transarr2);

let arr3 = [1, 2, 3, 4, 5, 6];
let sum = arr3.reduce((acc, cu) => acc + cu, 0);
console.log(sum);

//count how many times each fruit appears in an array
let fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];
let fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(fruitCount);

//grand total of prices greater than 20 from an array of objects
let products = [
    { name: 'Product A', price: 15 },
    { name: 'Product B', price: 25 },
    { name: 'Product C', price: 30 },
    { name: 'Product D', price: 10 }
];
let grandTotal = products.filter(product => product.price > 20).reduce((acc, product) => acc + product.price, 0);
console.log(grandTotal);

//format and display current month transactions list using map
let transactions = [
    { date: '2023-10-01', amount: 100, description: 'Groceries' },
    { date: '2023-10-05', amount: 50, description: 'Utilities' },
    { date: '2023-10-10', amount: 200, description: 'Rent' },
    { date: '2023-09-15', amount: 150, description: 'Dining Out' }
];
let currentMonth = new Date().getMonth() + 1; // Months are 0-indexed
let currentExpenses = transactions.filter(transaction => new Date(transaction.date).getMonth() + 1 === currentMonth)
.map(transaction => {
    return `Date: ${transaction.date}, Amount: $${transaction.amount}, Description: ${transaction.description}`;
});