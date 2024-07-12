const fruitsList = ["Mango", "Banana", "Orange", "Apple", "Pineapple"]

console.log(fruitsList.length)

console.log(fruitsList.pop())
console.log(fruitsList)

console.log(fruitsList.push("Lemon"))
console.log(fruitsList)

fruitsList[fruitsList.length] = "Dragon"
console.log(fruitsList)

for (let i = 0; i<fruitsList.length; i++){
    console.log(fruitsList[i]);
}

let fruit = fruitsList.at(2);
console.log(fruit); // Orange

fruitsList.shift();  //removes the first array element and "shifts" all other elements to a lower index.
console.log(fruitsList)

fruitsList.unshift("Papaya");  // adds a new element to an array (at the beginning), and "unshifts" older elements
console.log(fruitsList)

fruitsList.splice(2, 0, "Lemon", "Kiwi");// adds new items to an array. at index 2 and removing 0 items
console.log(fruitsList)

console.log(fruitsList.includes("Orange")); // is true