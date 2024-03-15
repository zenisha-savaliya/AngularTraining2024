// TASK2A

const inputOne = [1, 2, 3, 4, 5, 6].map((x) => x * 2);
console.log(inputOne);

// TASK2B

const inputTwo = [0, 23, 0, 0, 0, 4, 6, 0, 8, 10, 0, 0, 0, 12];
const nonZeroValues = [];
const zeroValues = [];
for (let index in inputTwo) {
  if (inputTwo[index] !== 0) {
    nonZeroValues.push(inputTwo[index]);
  } else {
    zeroValues.push(inputTwo[index]);
  }
}
const resultArray = nonZeroValues.concat(zeroValues);
console.log(resultArray);
