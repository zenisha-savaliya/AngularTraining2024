//1. Converts a specified number to an array of digits.

function numberToDigits(number) {
  return number.toString().split("").map(Number);
}

const input = 123;
const output = numberToDigits(input);
console.log(output);
// Output: [1, 2, 3]

var alphabets = ["A", ..."BCD", "E"];
console.log(alphabets);

//output:
// ['A', 'B', 'C', 'D', 'E']

var newArray = [...[, ,]];
console.log(newArray);

//output:
//[undefined, undefined]
