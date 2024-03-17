const numbersArray = [1, 2, 3, 4];
Array.prototype.multiply = function () {
  return this.reduce((acc, curr) => acc * curr, 1);
};
console.log(numbersArray.multiply());
