const convertToCelsius = function(fahrenheit) {
  //  (x - 32) * 5/9 = C
  let celsius = (fahrenheit - 32) * (5/9);
  return Math.round(celsius * 10) / 10;  // Round to 1 decimal
};

const convertToFahrenheit = function(celsius) {
  // (x * 9/5) + 32 = F
  let fahrenheit = (celsius * 9/5) + 32;
  return Math.round(fahrenheit * 10) / 10; // Round to 1 decimal
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
