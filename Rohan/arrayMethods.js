let num = []

num = [1, 2, 3, 4, 5];

let transformedNum = num.map((value) => value * 2);
//console.log(transformedNum);

// with index and array
let transformedNum2 = num.map((value, index, num) => (value * 2));
//console.log(transformedNum2);

// function
function multiplyByTwo(value) {
    return value * 2;
}

multiplyByTwo = num.map(multiplyByTwo);
//console.log(multiplyByTwo);

//filter
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddnum = num1.filter((value) => value % 2 !== 0);
console.log(oddnum);
let evennum = num1.filter((value) => value % 2 === 0);
console.log(evennum);

//reduce
let sum = num1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

let users = [
    { name: 'Alice', role: "dev" },
    { name: 'Bob', role: "QA" },
    { name: 'Charlie', role: "dev" },
    { name: 'David', role: "dev" },
    { name: 'Eve', role: "Mgr" }
];
let devs = users.filter((user) => user.role === "dev");
console.log(devs);
let QAs = users.filter((user) => user.role === "QA");
console.log(QAs);
let managers = users.filter((user) => user.role === "Mgr");
console.log(managers);

let groupedUsers = users.reduce((acc, user) => {
    if (!acc[user.role]) {
        acc[user.role] = [];
    }
    acc[user.role].push(user);
    return acc;
}, {});

console.log(groupedUsers);