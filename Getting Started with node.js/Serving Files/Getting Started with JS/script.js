const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas"
];

const insertY = [
    "the soup kitchen",
    "Disneyland",
    "the White House"
];

const insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"
];

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// Call result function upon recieving click event
randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300);
        const temperature = Math.round(94);

        let weight_stones = Math.round(weight / 14);
        let temperature_celsius = Math.round((temperature - 32) * 5 / 9);

        newStory = newStory.replaceAll(weight, weight_stones);
        newStory = newStory.replaceAll(temperature, temperature_celsius);

        newStory = newStory.replaceAll("fahrenheit", "celsius");
        newStory = newStory.replaceAll("pounds", "stones");
    }

    let itemX = randomValueFromArray(insertX);
    let itemY = randomValueFromArray(insertY);
    let itemZ = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:', itemX);
    newStory = newStory.replaceAll(':inserty:', itemY);
    newStory = newStory.replaceAll(':insertz:', itemZ);

    story.textContent = newStory;
    story.style.visibility = 'visible';

}


// Simple Calculator
let limitExceeded = false;
let operand_1 = NaN;
let operator = null;
let Result = "";
let hasDPoint = false;
let awaitingFraction = false;
let repeatOperand = true;
let awaitingSecondOperand = false;
printToOutput("");
printToHistory("");
const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;
function printToHistory(text) {
    document.getElementById("history").innerText = text;
}

function getHistory() {
    return document.getElementById("history").innerText;
}

function printToOutput(num) {
    num = Number(reverseFormat(num));
    if (awaitingFraction) {
        document.getElementById("result").innerText = num.toLocaleString('en-US', { maximumFractionDigits: 3 }) + ".";
        awaitingFraction = false;
    }
    else {
        document.getElementById("result").innerText = num.toLocaleString('en-US', { maximumFractionDigits: 3 });
    }
}

function getOutput() {
    return reverseFormat(document.getElementById("result").innerText);
}

function reverseFormat(num) {
    return String(num).replaceAll(",", '');
}


let number_buttons = document.querySelectorAll(".number-button");
for (let i = 0; i < number_buttons.length; i++) {
    number_buttons[i].addEventListener('click', function () {
        if(awaitingSecondOperand){
            if(repeatOperand){
                repeatOperand = false;
                Result = "";
                printToOutput();
            }
        }
        else
            Result = getOutput();
        if (number_buttons[i].id == 'decimal') {
            if (hasDPoint)
                return;
            else {
                hasDPoint = true;
                awaitingFraction = true;
            }
        }
        if (!(limitExceeded)) {
            if (Result == "")
                Result = number_buttons[i].innerText;
            else
                Result = Result + number_buttons[i].innerText;
            printToOutput(Result);

            if (Result.length > 14) {
                limitExceeded = true;
            }
        }
        console.log(Result, hasDPoint);
    });
}

let operators = document.querySelectorAll("#calculator :is(button):not(.number-button)");
operators.forEach(x => {
    x.addEventListener("click", function () {
        let Result = Number(getOutput());
        if (!awaitingSecondOperand) {
            operand_1 = Number(Result);
            switch (x.id) {
                case "divide":
                case "multiply":
                case "subtract":
                case "add":
                case "percentage":
                    operator = x.id; break;
                case "equal":
                    operator = "="; break;
                default:
                    return;
            }
            awaitingSecondOperand = true;
            repeatOperand = true;
            printToHistory(getOutput() + " " + x.innerText + " ");
            console.log(operand_1, operator, awaitingSecondOperand);
        }
        else if (x.id == "equal") {

            switch (operator) {
                case "divide":
                    Result = operand_1 / Number(getOutput()); break;
                case "multiply":
                    Result = operand_1 * Number(getOutput()); break;
                case "subtract":
                    Result = operand_1 - Number(getOutput()); break;
                case "add":
                    Result = operand_1 + Number(getOutput()); break;
                case "percentage":
                    Result = 100 * operand_1 / Number(getOutput()); break;
            }
            console.log(Result);
            printToHistory(`${operand_1} ${document.getElementById(operator).innerText} ${getOutput()} = ${Result.toLocaleString('en-US', { maximumFractionDigits: 3 })}`);
            printToOutput(Result);
        }
    })
});

let C = document.getElementById("C");
C.addEventListener("click", function () {
    limitExceeded = false;
    operand_1 = NaN;
    operator = null;
    Result = "";
    hasDPoint = false;
    awaitingFraction = false;
    awaitingSecondOperand = false;
    printToOutput("");
    printToHistory("");
})

let backspace = document.getElementById("backspace");
backspace.addEventListener("click", function () {
    Result = getOutput();
    if (Result[Result.length - 2] == ".")
        awaitingFraction = true;
    if (Result[Result.length - 1] == ".")
        hasDPoint = false;
    if (Result != "")
        Result = Result.substring(0, Result.length - 1);
    // Result = Result.splice(0, -1);
    printToOutput(Result);
    limitExceeded = false;
})




document.addEventListener('keydown', (event) => {
    let k = Number(event.key);
    if(k == k) // checks if it is equal to NaN. apparently (NaN != NaN) returns true.
    {
        number_buttons[k].dispatchEvent(new MouseEvent('click'));
    }
    else if(event.key == ".")
    {
        number_buttons[10].dispatchEvent(new MouseEvent('click'));
    }
    else if(event.key == "Enter") operators[4].dispatchEvent(new MouseEvent('click'));
    else if(event.key == "+") operators[3].dispatchEvent(new MouseEvent('click'));
    else if(event.key == "-") operators[2].dispatchEvent(new MouseEvent('click'));
    else if(event.key == "*") operators[1].dispatchEvent(new MouseEvent('click'));
    else if(event.key == "/") operators[0].dispatchEvent(new MouseEvent('click'));
    else if(event.key == "c") operators[6].dispatchEvent(new MouseEvent('click'));
    else if(event.key == "Backspace") operators[5].dispatchEvent(new MouseEvent('click'));
}, false);

let inetrvalId = setInterval(greet = () => {
    let Time = new Date();
    console.log(Time);
    time.innerText = Time;
}, 1000);
setTimeout(() => {clearInterval(inetrvalId); time.innerText += " Completed!!"}, 5000);


//Date and Time Tutorial
let dt = document.getElementById("dt");

let now = new Date(); // An object
let p = document.createElement("p");
p.innerText = String(now);
dt.appendChild(p);

let epoch = new Date(0); // where time began. 0 indicates the number of milliseconds after the epoch.
//The default argument for the Date constructor is Date.now() which gives the current time in milliseconds since epoch
p = document.createElement("p");
p.innerText = String(epoch);
dt.appendChild(p);

let newDate = new Date("2023-08-21"); //strings needs to be in yyyy-mm-dd
p = document.createElement("p");
p.innerText = newDate;
dt.appendChild(p);

newDate = new Date(2029, 95, 98, 21, 56, 9, 23); // another constructor
p = document.createElement("p");
p.innerText = newDate;
dt.appendChild(p);

p = document.createElement("p");
p.innerText = newDate.getFullYear();
dt.appendChild(p);

p = document.createElement("p");
p.innerText = newDate.getMonth();
dt.appendChild(p);

p = document.createElement("p");
p.innerText = newDate.getHours();
dt.appendChild(p);

p = document.createElement("p");
p.innerText = newDate.getMinutes();
dt.appendChild(p);

p = document.createElement("p");
p.innerText = newDate.getSeconds();
dt.appendChild(p);

p = document.createElement("p");
p.innerText = newDate.getMilliseconds();
dt.appendChild(p);


// Arrow functions. You don't need to name them, but you can, by assigning them to a variable.

// let f1 = (a) => a/2; //same as below
let f1 = a => a/2; //making arrow functions. Basically says, take a, and return a/2
// f1(2)

let f2 = () => console.log(5); // print 5;
// f2()

let f3 = (a, b) => a+b; //sum the two taken values
// f3(5, 9)

let f4 = (...data) => {
    //multi-line code goes here. return anything if you desire or you can make a non-returning function.
}

// let f5 = a,b => 5 // error!!


// Making objects like classes with memeber functions and data

let obj = {
    greeting: "Ohayo!",
    numbers: [1, 2, 3, 4, 5, 6, 7, 8],
    speak(){
        this.numbers.forEach((e, i)=>console.log(this.greeting, e, ":" + i));
        // 'this' refers to the object.

        // this.numbers.forEach(function anda(e, i){console.log(this.greeting, e, ":" + i)});
        // 'this' is not defined in the 'anda' function, or rather, is binded to the function itself. 'this' refering to the object is only available inside the arrow function
    }
}

obj.speak();

// Math Based

