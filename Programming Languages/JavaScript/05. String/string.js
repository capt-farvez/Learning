let name = "Anowar Hossen";
console.log(name);
console.log(typeof name);

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);

let text1 = "HELLO WORLD";
let char = text1.charAt(0);
console.log(char);

let text2 = "Apple, Banana, Kiwi";
let part = text2.slice(7, 13);  // 7 including, 13 Excluding
console.log(part);   // Banana

let part1 = text2.slice(7);
console.log(part1);  //If omit the second parameter, the method will slice out the rest of the string:

let part2  = text2.slice(-12);  // If a parameter is negative, the position is counted from the end of the string:
console.log(part2)

let part3 = text2.slice(-12, -6);
console.log(part3)   // This example slices out a portion of a string from position -12 to position -6:


let upc = text2.toUpperCase(); 
console.log(upc);
let loc = text2.toLowerCase();  // text2 is text1 converted to lower
console.log(loc);

let hw = "Hello".concat(" ", "World!");
console.log(hw);

let hw1 = "      Hello World!      ";
let hwt = hw1.trim();
console.log(hwt)

let strr = "Please visit Microsoft and Microsoft!";
let newText = strr.replace("Microsoft", "Meta");
console.log(newText);
