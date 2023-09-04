"use strict";
// Typescript is a strongly typed superset of javascript
// Needs to be compiled into js. Browser doesn't understand ts
let character = 'mario'; // intellisense error if you open both the ts and js files at the same time in the editor
// character = 5; // type Number is not assignable to a string
console.log(character);
const inputs = document.querySelectorAll('input');
inputs.forEach(element => {
    console.log(element);
});
class UserAccount {
    constructor(user, accountNo) {
        this.user = user;
        this.accountNo = accountNo;
    }
    printDetails() {
        console.log("Name: ", account.user.name);
        console.log("Date Of Birth: ", account.user.DOB);
        console.log("Account Number", account.accountNo);
    }
}
const account = new UserAccount({ name: "John Doe", DOB: new Date("1954-04-14") }, 432);
account.printDetails();
let x = void (5);
//arrays
let arr;
let arr2;
let l = []; // can only be an array of 34
l.push(34);
// l.push(43); // error
//union types
let mixed;
let mixedarr;
// let myObj: Object same as let myObj: object
// the above could also store array since they are also objects
let myObj;
// For projects, you might want to configure settings compiled file locations etc. Use the tsconfig file
// Functions
let myfunc;
// Function arguments
const func = function (a, b = 64, oparg) {
    console.log(oparg);
    return 34;
};
func(4);
// Function signatures
let greet;
// function taking a function argument with a specific signature
function get(path, callback) {
    //code here
}
function performBinaryOperation(operation, ...data) {
    let result = operation(data[0], data[1]);
    for (let i = 2; i < data.length; i++) {
        result = operation(result, data[i]);
    }
    return result;
}
let num = performBinaryOperation((a, b) => {
    return 2 * a + b;
}, 2, 4, -9, 10, -98);
console.log(num); // -50
