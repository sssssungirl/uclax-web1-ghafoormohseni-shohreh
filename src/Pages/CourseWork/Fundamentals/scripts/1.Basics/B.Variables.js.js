/*===================================
||
|| Variables
||
===================================*/
console.group("Variables");

/*
    A variable is a reference to a value so it can be used over and over, or refrence later on
*/

// Let can be changed
let favColor = "blue";
console.log(favColor);
favColor = "Red";
console.log(favColor);

// Const cannot be changed
const firstName = "Shohreh";
console.log(firstName);
// firstName = "Mitch";
// console.log(firstName);

console.groupEnd();
