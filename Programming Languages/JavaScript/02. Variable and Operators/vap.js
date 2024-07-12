let x;      //Only use let if you can't use const
var y;  

/*
Always use const if the value should not be changed and the type should not be changed (Arrays and Objects)
const PI1;
PI1 = 3.14159265359; // an incorret proccess
*/


const PI = 3.141592653589793;  // Correct,  value cant upadate later
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error
console.log(PI);


// can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";   // can change an element
cars.push("Audi");    // can add an element
console.log(cars);

// can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};
car.color = "red";
car.owner = "Anowar";
console.log(car);
console.log(typeof car)


// Operators
let a = 5, b=2;
let addi = a+b;
console.log(addi);

let sub = a-b;
console.log(sub);

let muli = a * b;
let divi = a/b;
let pow = a ** b;

let str1 = "Anowar";
let str2 = "Hossen";
let name = str1 + " " + str2;
console.log(name);

let text = "What a very ";
text += "nice day";
console.log(text);


// Data Type:
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let b1 = true;
let b2 = false;

// Object:
const person = {firstName:"Anowar", lastName:"Hossen"};

// Array object:
const carsList = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2024-03-25");
console.log(date)