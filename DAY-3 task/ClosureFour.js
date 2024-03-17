function setCount() {
  let number = 0;
  return function () {
    console.log(number++);
    console.log(++number);
  };
}
const counter = setCount();
counter();
counter();
counter();
//0
//2
//2
//4
//4
//6
//here counter holds inner function and has access to number variable which is
//assigned to 0 when we invoked setCount() function so when we call counter() first time number++ means first it will log
// number value which is 5 currently and then increment by 1 then ++number will first increment the value of number so now it will be 2
// so this statements output will be 2 and same thing happens when we call counter to second and third time
