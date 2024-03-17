function outest() {
  var c = 12;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
let a = 100;
var close = outest()("Hi Closures");
close();
//10 'Hi Closures' 12
//when we are calling outest()("Hi Closures") value of c is 12 and b is "Hi Closures" and outest function returns outer
//function which contains inner function who logs value of a,b,c and can access value of a,b,c which is 10, "Hi Closures" and 12 and close variable holds this
//inner function so close() will give output as 10 'Hi Closures' 12
//so here inner function has access to variables of outer function as well as outest function even after it's scope ends
//and outer function has access to outest function's variable and as in line no. 12 we are declaring variable with let it will not globally hoisted
//and in output value of a will be 10
