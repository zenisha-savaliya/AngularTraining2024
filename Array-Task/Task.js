// TASK2A

var input = [1, 2, 3, 4, 5, 6].map((x) => x * 2);
console.log(input);

// TASK2B

var input = [0, 23, 0, 0, 0, 4, 6, 0, 8, 10, 0, 0, 0, 12];
let arr = [];
let arr2 = [];
for (let x in input) {
  if (input[x] !== 0) {
    arr.push(input[x]);
  } else {
    arr2.push(input[x]);
  }
}
let res = arr.concat(arr2);
console.log(res);
