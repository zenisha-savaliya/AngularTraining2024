const numbersArray = [1, 2, 3, 4, 6, 7];

//added multiply method in Array prototype
Array.prototype.multiply = function () {
  return this.reduce((acc, curr) => acc * curr, 1);
};
console.log(numbersArray.multiply());

//output : 1008

//added multiply method in Array prototype

Array.prototype.average = function () {
  if (this.length === 0) return NaN;
  const sum = this.reduce((acc, curr) => acc + curr, 0);
  return sum / this.length;
};

console.log(numbersArray.average());
//output : 3.8333333333333335
