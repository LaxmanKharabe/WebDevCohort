const letters = ["A", "B", "C", "D", "E", "C"];

/*
indexOf():
Purpose: Searches for a specified element in the array and returns its index.
Return Value: The index of the element if found, otherwise -1.
Case Sensitivity: Case-sensitive.
Syntax: array.indexOf(item, start)
  item: The element to search for.
  start (optional): The position to start the search from. Negative values start from the end of the array.
Examples:
*/
let z = letters.indexOf("Z");
console.log(z); // -1

let b = letters.indexOf("B"); // 1
console.log(b);

let c = letters.indexOf("C", 3);
console.log(c); // 5

let cindex = letters.indexOf("C", 1);
console.log(cindex); // 2

/*
lastIndexOf():
Purpose: Searches for a specified element in the array and returns its last index.
Return Value: The last index of the element if found, otherwise -1.
Case Sensitivity: Case-sensitive.
Syntax: array.lastIndexOf(item, start)
  item: The element to search for.
  start (optional): The position to start the search from, searching backwards. Negative values start from the end of the array.
Examples:
*/
let lastC = letters.lastIndexOf("C"); // 5
console.log(lastC);

let lastZ = letters.lastIndexOf("Z"); // -1
console.log(lastZ);

let lastCFromIndex = letters.lastIndexOf("C", 4);
console.log(lastCFromIndex); // 2

/*
includes():
Purpose: Checks if an array contains a specified element.
Return Value: true if the element is found, otherwise false.
Case Sensitivity: Case-sensitive.
Syntax: array.includes(item, start)
  item: The element to search for.
  start (optional): The position to start the search from. Negative values start from the end of the array.

includes() is not supported in Internet Explorer but supported in all modern browsers since March 2017
Examples:
*/
const hasC = letters.includes("C"); // true
console.log(hasC);

const hasZ = letters.includes("Z"); // false
console.log(hasZ);

const hasCFromIndex = letters.includes("C", 4); // true
console.log(hasCFromIndex);