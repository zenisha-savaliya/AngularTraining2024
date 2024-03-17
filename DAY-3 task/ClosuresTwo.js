function calculate(x) {
  function multiply(y) {
    return x * y;
  }
  return multiply;
}
const multiply3 = calculate(3);
const multiply4 = calculate(4);

console.log(multiply3);
console.log(multiply3());

console.log(multiply3(6));
console.log(multiply4(2));

//output :
//ƒ multiply(y) {
//     return x * y;
// }
// NaN
// 18
// 8

//as here calculate function is returning multiply function console.log(multiply3) this is having value
//as multiply function but in console.log(multiply3()) this case it expects value of y but we are not passing it
//and x will be undefined here so it gives output as NaN
//here multiply3 and multiply4 are closures created by calling calculate function with 3 and 4 parameter
//when we pass 6 as a parameter to multiply3 function output will be 18 because as a closure property inner function
//still access outer function's variable value even after it's scope has ended same goes for multiply4 in this case
//as we first passed 4 to calculate function value of x will be 4 and then it will be multiplied with 2 and output will be 8
