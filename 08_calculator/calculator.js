const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = function sumArray(array) {
  let sum = 0
  for (let integer = 0; integer < array.length; integer += 1) {
    sum += array[integer]
  }
  return sum
};

const multiply = function multiply(numbers){
  return numbers.reduce((product, number) => product * number, 1);
};

const power = function (base, exponent) {
	 return Math.pow(base, exponent);
};

const factorial = function(n) {
	if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
