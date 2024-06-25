const leapYears = function(year) {
    // Create a function that determines whether or not a given year is a leap year.
    if (typeof year !== 'number') {
        return false;
    }
    // Leap years are years divisible by four
    if (year % 4 === 0) {
        // However, years divisible by 100 are not leap years
        if (year % 100 === 0) {
            // unless they are divisible by 400 (like 1600 and 2000, which were leap years)
            return year % 400 === 0;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
