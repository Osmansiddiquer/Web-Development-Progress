let name = "Harry";
let message = `is a good boy`;

let Consoles = document.getElementsByClassName("console");
Object.keys(Consoles).forEach((console)=>{
    Consoles[console].setAttribute('data-before', Consoles[console].id);
});

console.log(name, message, "but he acts out a bit often.");
//using comma in console.log seperates the printed elements by space.

function printLength(string) {
    console.log(`Length of "${string}" is: ${string.length} characters.`);
}
console.log("Are you going to lose...\nHarry!!!");

printLength("ifijerjgoiir fg");

let string = new String("Anda"); //Using constructor

let i = 1;
setInterval(function () {
    if (i <= 30) {
        let div = document.createElement("div");
        div.innerText = i++;
        document.getElementById("content").appendChild(div);
    }
}, 50);

function print(console_id, ...data) {
    let console = document.getElementById(console_id);
    let p = document.createElement("li");
    data.forEach(element => {
        if(typeof(element) == "object")
            element = JSON.stringify(element);
        else
            element = String(element);
        if (element == " ")
            p.innerHTML += "&nbsp;";
        else
            p.innerText = p.innerText + element + " ";
    });
    console.appendChild(p);
}

string = "This is a string";

//indexof of gives the first occurence of the substring
print("console", `"${string}"`, "has first 'is' at index:", string.indexOf("is"));
//lastIndexOf gives the last occurence of the substring
print("console", `"${string}"`, "has last 'is' at index:", string.lastIndexOf("is"));
//substr, slice and substring can be used to get substrings
print("console", `"${string.slice(3, -2)}"`);
print("console", `"${string.substring(2)}"`);
print("console", "substr() function is decaprecated/was never part of the standard in the frist place.");

//You can use string.replace to replace substrings.
print("console", string, "=>", string.replace("a string", "Harry"));

print("console", string.toUpperCase());
print("console", string.toLowerCase());
print("console", string.concat(", right?"));

print("console", "   This has been trimmed  ".trim());

for (let i = 0; i < string.length; i++) {
    print("console", string.charAt(i), ":", string.charCodeAt(i));
}


// Arrays and Objects
let employee = {
    name: "Lorem",
    salary: 10349
}
print("console-2", employee, employee['name'], employee.salary);

let array = new Array(4, 5, employee, "blah", 8);
print("console-2", array);
array = [4, 5, 8, "peoir"];
print("console-2", array);


print("console-3", "Number of characters in the HTML file:", document.getElementsByTagName("html")[0].innerHTML.length);
// For an object, it gives the number of key value pairs.
print("console-3", Object.keys(employee).length);

array.push("New");
// For an array, it gives the number of elements
print("console-3", array.length);
// for functions length is the number of formal parameters the function expects.
print("console-3", function(a, b, c, d){}.length);



//Array functions
let list = [5, 89, 2993, 89, 4, "Howdy neighbour!"];
print("console-4", list);
print("console-4", [...list].sort()); //modifies the actual array
print("console-4", list.length);
// for functions below, you can give a start, and an end index.
print("console-4", [...list].fill(321)); // modifies the array
print("console-4", list.includes(2993));
print("console-4", [...list].reverse()); //modifies the array

//calls the function on each element and creates and returns a new array from the returned values.
print("console-4", list.map((element) => { 
    return element + element;
}))
let list2 = [...list]; //spread syntax to copy the array.

print("console-4", list.push(54), list); // modifies the array, returns the new length
print("console-4", list.pop(), list); // modifies the array, returns the popped(the formerly last) element.

//Functions
function anda(i){
    if(i%2 == 0)
        return 0;
    else
        return "gtrig";
}
console.log(anda(54));


//alerts, prompts and confirmations
alert(JSON.stringify(employee)); 
//alerts do not return anything. Use prompts for taking input. Use this for letting people know something.

let myVar = prompt("What is your name.", "Eggman");
// returns null if cancelled. IE requires there to be a default prompt text argument. Like this below:
// let myVar = prompt("What is your name.", "");
console.log(myVar);

let choco = confirm("You are going to get a chocolate "+ ((myVar !== null)?String(myVar):"") + "!");
// returns a bool.

if(choco)
    console.log("...if you choose to get it.");
else
    console.log("then don't take it!");



// Working with JSON
// using fetch to read from a file??

fetch("test.json")
.then(response => response.text()) // extact data as a text file.
.then(data => {
    print("console-5", "This is the settings file: ");
    print("console-5", data);
    data.replaceAll("\n", "");
    let dataObject = JSON.parse(data);
    print("console-5", "A Sample Setting Property: ", dataObject["settingsSync.ignoredSettings"]);
    print("console-5", "This is the settings file parsed, and then restringified: ");
    print("console-5", JSON.stringify(dataObject));
});
//some cryptic promise magic


