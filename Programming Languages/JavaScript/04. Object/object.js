const car = {type:"Fiat", model:"500", color:"white"};
console.log(car);

// Create an Object
const person = {};

// Add Properties
person.firstName = "Anowar";
person.lastName = "Hossen";
person.age = 24;
person.eyeColor = "black";
person.address = "Dhaka, BD";

console.log(person);
// Create a copy
const x = person;
// Change Age in both
x.age = 25;
console.log(person.age);
console.log(person["age"]);


const person2 = {
    firstName: "Anowar",
    lastName : "Hossen",
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
console.log(person2.fullName());

// Object Type Person
function Person3(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
const mySelf = new Person3("Anowar", "Hossen", 24, "black");
console.log(mySelf.lastName)
