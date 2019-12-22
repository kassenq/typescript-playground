export {}
let message = 'Welcome back'; 
console.log(message); 

// compile down to plain JS using typescript compiler
// command: tsc main.ts

// command: node main.js

// command: tsc main --watch 
// automatically recompiles

let x = 10; // let can be done without initialization
const y = 20; // needs to be initialized, can never change after initialization

// error by doing: let x = 30; 

let sum; 
const title = 'Codevolution';

// Basic Types
let isBeginner: boolean = true; // name: type
let total: number = 0; 
let name: string = 'Kassen'; 

let sentence: string = `My name is ${name}
I am a beginner in Typescript`; // template strings with embedded expressions

console.log(sentence); 




// Sub-types 
let n: null = null; 
let u: undefined = undefined; 

let isNew: boolean = null; 
let myName: string = undefined; 




// Two ways to create arrays 
let list1: number[] = [1, 2, 3]; 
let list2: Array<number> = [1, 2, 3];




// Tuple
let person1: [string, number] = ['Chris', 22]; // person1 has 2 fixed values: a string and a number, in that order




// Enum 
enum Color {Red = 5, Green, Blue}; // red 0, green 1, blue 2. then red is 5, green becomes 6

let c: Color = Color.Green; 
console.log(c); 




// Any type (ex. expecting inputs, unknown input)
let randomValue: any = 10; 
randomValue = true; 
randomValue = 'Kassen'; 

// let myVariable: any = 10; 
// console.log(myVariable.name); 
// myVariable(); 
// myVariable.toUpperCase(); 




// Type Unknown 
// can't access any properties, nor call or construct them 
let myVariable2: unknown = 10; 
// (myVariable2 as string).toUpperCase(); 

function hasName(obj: any): obj is {name: string} {
    return !!obj &&
        typeof obj === "object" && "name" in obj
} // check if name property exists in object

if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}



// Type Inference
let a;
a = 10; 
a = true;

let b = 20; 



// Union of types for the same variable
let multiType: number | boolean; 
multiType = 20; 
multiType = true; 

// difference w/ any Type is that there are no restrictions. also no type inferencing/intellisense for any Type
let anyType: any; 
anyType = 20; 
anyType = true; 



// Functions 
function add(num1: number, num2?: number): number {
    return num1 + num2; 
}
add(5, 10);
add(5); // num2? makes it an optional parameter. second parameter would be undefined if called this way 

// optional params must be after required params

function add2(num1: number, num2: number = 10) {
    if (num2)
        return num1 + num2; 
    else   
        return num1;
}
add2(5, 10); // returns 15
add2(5);
// 10 is a default value for num2, so it returns 5+10=15




// Interfaces
// can specify object as a type

function fullName(person: {firstName: string, lastName: string}) {
    console.log(`${person.firstName} ${person.lastName}`);
} // param is person, of type object, which has first name and last name

let p = {
    firstName: 'Bruce', 
    lastName: 'Wayne'
}; 
fullName(p); 


interface Person {
    firstName: string;
    lastName: string; // lastName? makes it optional
}
function fullNameBetter(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}



// Classes
class Employee {
    public employeeName: string; 

    constructor(name: string) {
        this.employeeName = name; 
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Kassen'); 
console.log(emp1.employeeName);
emp1.greet(); 


// Class-based Inheritance
class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName); 
    }

    delegateWork() {
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Manager('Bruce'); 
m1.delegateWork(); 
m1.greet(); 
console.log(m1.employeeName);

// Access Modifiers
// keywords that set accessibility of properties and methods in a class 

// public private protected

// public: free accessibility. classes are public by default.
// private: accessibility only within a class 
// protected: accessibility only within a class, and the class is derived from it
    // ex. can do this.employeeName but can't use elsewhere