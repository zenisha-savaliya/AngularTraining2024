var a = 4;
function greet() {
  b = "hello";
  console.log(b);
  var b;
}
greet();
console.log(b);

//output:
// hello and then error : Uncaught ReferenceError: b is not defined
//here in the greet function body contains b as local variable and as we declared with var so code will be interpreted as
// var b;
// b="hello"
// console.log(b);
//so output will be hello in console
//but when we try to log b which is after function calls to be at that time it will give reference error
//as our b is declared with the local scope of function
