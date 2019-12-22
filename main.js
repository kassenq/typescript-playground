"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Welcome back';
console.log(message);
// compile down to plain JS using typescript compiler
// command: tsc main.ts
// command: node main.js
// command: tsc main --watch 
// automatically recompiles
var x = 10; // let can be done without initialization
var y = 20; // needs to be initialized, can never change after initialization
// error by doing: let x = 30; 
var sum;
var title = 'Codevolution';
// Basic Types
var isBeginner = true; // name: type
var total = 0;
var name = 'Kassen';
var sentence = "My name is " + name + "\nI am a beginner in Typescript"; // template strings with embedded expressions
console.log(sentence);
// Sub-types 
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// Two ways to create arrays 
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// Tuple
var person1 = ['Chris', 22]; // person1 has 2 fixed values: a string and a number, in that order
// Enum 
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
; // red 0, green 1, blue 2. then red is 5, green becomes 6
var c = Color.Green;
console.log(c);
// Any type (ex. expecting inputs, unknown input)
var randomValue = 10;
randomValue = true;
randomValue = 'Kassen';
// let myVariable: any = 10; 
// console.log(myVariable.name); 
// myVariable(); 
// myVariable.toUpperCase(); 
// Type Unknown 
// can't access any properties, nor call or construct them 
var myVariable2 = 10;
// (myVariable2 as string).toUpperCase(); 
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" && "name" in obj;
} // check if name property exists in object
if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}
// Type Inference
var a;
a = 10;
a = true;
var b = 20;
// Union of types for the same variable
var multiType;
multiType = 20;
multiType = true;
// difference w/ any Type is that there are no restrictions. also no type inferencing/intellisense for any Type
var anyType;
anyType = 20;
anyType = true;
// Functions 
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
add(5); // num2? makes it an optional parameter. second parameter would be undefined if called this way 
// optional params must be after required params
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
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
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
} // param is person, of type object, which has first name and last name
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
function fullNameBetter(person) {
    console.log(person.firstName + " " + person.lastName);
}
// Classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Kassen');
console.log(emp1.employeeName);
emp1.greet();
// Class-based Inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
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
