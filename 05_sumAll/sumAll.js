const sumAll = function(num1, num2) {
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
