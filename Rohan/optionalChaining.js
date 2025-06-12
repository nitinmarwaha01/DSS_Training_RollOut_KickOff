// Optional Chaining in JavaScript
// Optional chaining is a feature in JavaScript that allows you to safely access deeply nested properties of an object without having to check each level for existence.

var user = {
    firstname: "Rohan",
    lastname: "Kale",
    middlename: "",
    address: {
        addressLine1: "Begum Bazar",
        addressLine2: "",
        society: {
            name: "Sai Residency",
            flatNo: "101",
            building: "A Wing",
            street: "",   
        },
        city: "Hyderabad",  
    }

}

console.log(user.address?.addressLine1); // "Begum Bazar"
console.log(user.address?.society?.houseNo); // undefined

//traditional way
if (user && user.address && user.address.society) {
    console.log(user.address.society.name); // "Sai Residency"
}

// Using optional chaining in object (key value) pairs
var user1 = {
    name1: "Rohan",
}

var user2 = {
    name2: "Kale",
}

console.log(user1?.["name1"]); // "Rohan"
console.log(user2?.["name2"]); // "Kale"

// Using optional chaining with arrays
var users = [
    { name: "Rohan", age: 25 },
    { name: "Alice", age: 30 },
    null, // Simulating a missing user
    { name: "Bob", age: 22 }
];

console.log(users[0]?.name); // "Rohan"
console.log(users[2]?.name); // undefined (no error, just returns undefined)

// Using optional chaining with functions
function getUserFullName(user) {
    return `${user?.firstname ?? ''} ${user?.middlename ?? ''} ${user?.lastname ?? ''}`.trim();
}
console.log(getUserFullName(user)); // "Rohan Kale"

// Using optional chaining with NaN as a key

const obj2 = {
  NaN: "This is NaN key"
};

console.log(obj2?.[NaN]); // "This is NaN key"

// const obj1 = {
//   tmkoc: "family show"
// };

// console.log(obj1?.[tmkoc]); // undefined (no error, just returns undefined)

// Using optional chaining with null or undefined values
var user01 = {
    fname: null,
    age:"" 
}
 console.log(user01?.fname); // null
console.log(user01?.age); // "" (empty string)
console.log(user01.fname || "Anonymous"); // "Anonymous" (fallback value)
console.log(user01.age && "Age not provided"); // "" (empty string, no message shown)





