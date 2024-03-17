//Q1
// const arrValue = ['one', 'two', 'three', 'four'];
// const [ ...x, y] = arrValue;
// console.log(x);

//Error : A rest element must be last in a destructuring pattern

//Q2

// const arrValue = ["one", ["two", "three"]];
// const [x, [y, z]] = arrValue;
// console.log(x);
// console.log([y, z]);
// console.log(z);

// one
// ['two', 'three']
// three

//Q3

// let arrValue = [10];
// let [x = 5, y = 7] = arrValue;
// console.log(x);
// console.log(y);
//10
//7

//Q4

// const [a, b, ...[length]] = [1, 2, 3];
// console.log(a, b, length);

// 1 2 3

//Q5

const [a, b, ...{ length }] = [1, 2, 3];
console.log(a, b, length);

// 1 2 1
