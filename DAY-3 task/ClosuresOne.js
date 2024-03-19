const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};
let result = factorial(10);
console.log(result);
//output:3628800
