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
// console.log(letters.pop()); // E
// console.log((letters)); // [ 'A', 'B', 'C', 'D' ]

// push() :- This methods adds new element after the last index of an array and returns new arrays length
// console.log(letters.push("G")); // 6
// console.log(letters);

// shift() :- Removes the 1st element of an array and returns it.
// console.log(letters.shift()); // A
// console.log(letters); // [ 'B', 'C', 'D', 'E' ]

// unshift() :- This method adds new element in array at the beginning of an array and return the new length of any arrar; and unshift older elements.
// console.log(letters.unshift("new element")); // 6
// console.log(letters); // [ 'new element', 'A', 'B', 'C', 'D', 'E' ]

// delete() :- using this method remove the element and return true if removed, but we will have undefined at that place of removed element.
// console.log(delete letters[0]);
// console.log(letters); // [ <1 empty item>, 'B', 'C', 'D', 'E' ]







