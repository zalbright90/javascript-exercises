const fibonacci = function(n) {
    
    if (typeof n === 'string' && !isNaN(n)) {
        n = parseInt(n, 10);
      }

    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)){
        return 'OOPS';
    }
    
    if (n === 0) {
      return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    }

    let fib1 = 1;
    let fib2 = 1;
    let fib = 0;

    for (integer = 3; integer <= n; integer++) {
        fib = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
