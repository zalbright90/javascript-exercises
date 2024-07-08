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
  return numbers[0] * numbers[1];
};

const power = function() {
	
};

const factorial = function() {
	
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
