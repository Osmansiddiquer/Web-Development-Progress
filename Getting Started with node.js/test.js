// Javascript Objects prototypes

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
const myObj = {
    Objname: "Greeter",
    name: "John Doe",
    greet() {
        console.log(`Greetings... ${this.name}`);
    }
};

myObj.greet();
console.log(myObj.toString()); // ???

// what is a prototype
console.log(Object.getPrototypeOf(myObj));

// printing prototype chain
const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object); // same as object = object.__proto__
  console.log(object);
} while (object);

// Every object that you build is a prototype of the Object prototype which has its own properties. When a property of an object is requested (myobj.toString() for example), it is searched for in the definition of that object, if it isn't found, it is searched for in its prototype object and so on in the chain. You can overshadow properties by redefining them.

// Building our own prototype chain. Prototype chain is similar to an inheritance chain. Functions have a property named prototype. n JavaScript, all functions have a property named prototype. When you call a function as a constructor, this property is set as the prototype of the newly constructed object (by convention, in the property named __proto__).


// CLasses and Constructors
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript
class Person{
    name; //optional but recommended.

    // defining constructor
    constructor(name){
        // this.anda = name; // creates a new property called anda
        console.log("Person contructor was called");
        this.name = name;
    }

    introduceSelf(){
        // console.log(`Hi! I'm ${this.name}`); // name is undefined
        console.log(`Hi! I'm ${this.name}`);
    }
}

(new Person("Anda")).introduceSelf();
// const x = Person("flerj") // constructor cannot be invoked without the new keyword 


// Inheritance (only single)
class Professor extends Person {
    course;
    constructor(name, course){
        console.log("Professor Constructor was called")
        super(name); // calling the super-class constructor
        // super(course); // calling the super. ERROR: Super constructor may only be called once

        this.course = course; // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    }

    introduceSelf(){
        super.introduceSelf();
        console.log("I will be teaching you", this.course);
    }
}

new Professor("John Doe", "CS").introduceSelf();

// Use # before a function name or property name to make it private

class Employee extends Person {
    #company;
    constructor(name, company){
        console.log("Employee Constructor was called")
        super(name);
        this.#company = company;
    }

    introduceSelf(){
        super.introduceSelf();
        console.log("I work at", this.#company);
    }
}

const emp = new Employee("John Doe", "Intel");
// console.log(emp.#company); //Property '#company' is not accessible outside class 'Employee' because it has a private identifier.
emp.introduceSelf();
