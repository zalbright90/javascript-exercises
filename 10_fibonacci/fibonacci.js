const fibonacci = function(n) {
    if (n <= 2) {
      return 1;
    } else { //Fn = Fn-1 + Fn-2
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  };

// Do not edit below this line
module.exports = fibonacci;
