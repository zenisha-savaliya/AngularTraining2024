console.log(a);
let a = 5;
// Output: ReferenceError: Cannot access 'a' before initialization
//as variable declared with let keyword will not hoisted globally we will get an error while logging it

console.log(myFunction);
myFunction();
var myFunction = function func() {
  return "hey there!";
};
console.log(myFunction());

//output: Uncaught TypeError: myFunction is not a function
//here if we call func() then in console we will get "hey there!" but we are calling myFunction()
//which will give TypeError because yet it is not of type function and we are calling it as a function
//before calling it as a function if we try to log it's value then it is "undefined" as it is var type variable and after line no 10
//if we will call myFunction() then output will be as expected "hey there!"
