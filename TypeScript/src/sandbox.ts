// Typescript is a strongly typed superset of javascript
// Needs to be compiled into js. Browser doesn't understand ts

let character = 'mario'; // intellisense error if you open both the ts and js files at the same time in the editor
// character = 5; // type Number is not assignable to a string
console.log(character);

const inputs = document.querySelectorAll('input');

inputs.forEach(element => {
    console.log(element);
})

// Compile sutomatically using tsc -w --pretty "file name"


interface Person {
    name: string,
    DOB: Date
}

class UserAccount {
    user: Person;
    accountNo: Number;

    constructor(user: Person, accountNo: Number) {
        this.user = user;
        this.accountNo = accountNo;
    }

    printDetails(): void {
        console.log("Name: ", account.user.name);
        console.log("Date Of Birth: ", account.user.DOB);
        console.log("Account Number", account.accountNo);
    }
}

const account = new UserAccount({ name: "John Doe", DOB: new Date("1954-04-14") }, 432);
account.printDetails();

let x: void = void (5);

// Making your own types

type anda = "Boiled" | "Half-Fry" | "Full-Fry" | Number | Array<any>; // can be any array, number or these three string literals

//arrays
let arr: Number[];
let arr2: (Number)[];
let l: 34[] = []; // can only be an array of 34
l.push(34);
// l.push(43); // error

//union types
let mixed: string | 4 | 4 | 34;
let mixedarr: (string | 4 | 6 | 34)[];

// let myObj: Object same as let myObj: object
// the above could also store array since they are also objects

let myObj: {
    name: string,
    erk: Number,
    fmeoi: Date
}

// For projects, you might want to configure settings compiled file locations etc. Use the tsconfig file

// Functions
let myfunc: Function

// Function arguments
const func = function(a: Number, b: Number = 64, oparg?: Number | String): number | string{ // adding ? or passing a default value makes it optional
    console.log(oparg);
    return 34;
}
func(4);

// Function signatures
let greet: (a: string, b: string|number) => number;

// function taking a function argument with a specific signature

function get(path: string, callback:(req: string, res:string)=>void){
    //code here
}


type arrMin2numbers = [number, number, ...number[]]

function performBinaryOperation(operation: (a: number, b: number)=>number, ...data: arrMin2numbers){
    let result = operation(data[0], data[1]);
    for(let i = 2; i<data.length; i++){
        result = operation(result, data[i]);
    }
    return result;
}

let num = performBinaryOperation((a, b)=>{
    return 2*a+b;
}, 2, 4, -9, 10, -98)

console.log(num); // -50


