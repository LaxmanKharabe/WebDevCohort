const letters = ["A", "B", "C", "D", "E"];

// length :- Returns the size of an array || Returns how many elements are there in array.
// console.log(letters.length);  // 5

// at(indexNumberOfElement) :- returns the element of provided index from an array. We can use negative index also '-1' means starts from the end of array.
// console.log(letters.at(2)) // "E"
// console.log(letters.at(-1)) // "E"
// console.log(letters.at(6)) // "undefined"

// toString() :- This method converts an array to string of (seprated by comma) array values. Converts numbers, booleans, and arrays into readable text.
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




// splice() :- The splice() method in JavaScript is used to add, remove, or replace elements in an array. 
/* array.splice(startIndex, deleteCount, item1, item2, ...);
1. startIndex – The index at which to start modifying the array.
2. deleteCount – (Optional) Number of elements to remove after startIndex.
3. itemsToAdd – (Optional) Items to add at startIndex. */
// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 2);  // Removes 2 elements starting from index 2
// console.log(arr);   // Output: [1, 2, 5]

// flat() and flatMap() :- The difference between flat() and flatMap() in JavaScript comes down to two key points:
// flat() is used to flatten nested arrays.
// flatMap() is a combination of map() + flat(1), meaning it first maps each element to a new value and then flattens the result by one level.
// const arr = [1, 2, [3, 4, [5, 6]]];
// console.log(arr.flat());    // Output: [1, 2, 3, 4, [5, 6]]  (default depth = 1)
// console.log(arr.flat(2));   // Output: [1, 2, 3, 4, 5, 6]   (flattens 2 levels)
// console.log(arr.flat(Infinity));  // Output: [1, 2, 3, 4, 5, 6] (flattens all levels)
// Output: ["A", "B", "C", "D", "E", "F", "G", "H", "p"]
// 
// const arr = [1, 2, 3];
// console.log(arr.flatMap(x => [x, x * 2])); // Output: [1, 2, 2, 4, 3, 6]
// const letters = [["A"], "B", "C", "D", "E", ["F", "G", ["H", ["p"]]]];
// const deepFlatMap = arr =>
//   arr.flatMap(x => (Array.isArray(x) ? deepFlatMap(x) : x));
// console.log(deepFlatMap(letters)); // Output: ["A", "B", "C", "D", "E", "F", "G", "H", "p"]
// console.log(letters.flat(Infinity));
