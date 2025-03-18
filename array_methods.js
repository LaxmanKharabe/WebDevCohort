const letters = ["A", "B", "C", "D", "E"];

// length :- Returns the size of an array || Returns how many elements are there in array.
// console.log(letters.length);  // 5

// at(indexNumberOfElement) :- returns the element of provided index from an array. We can use negative index also '-1' means starts from the end of array.
// console.log(letters.at(2)) // "E"
// console.log(letters.at(-1)) // "E"
// console.log(letters.at(6)) // "undefined"

// toString() :- This method converts an array to string of (seprated by comma) array values.
// console.log(letters.toString()); // A,B,C,D,E

// pop() :- This method removes the last element of an array and returns it.
console.log(letters.pop()); // E
console.log((letters)); // [ 'A', 'B', 'C', 'D' ]





