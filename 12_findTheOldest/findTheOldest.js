const findTheOldest = function(people) {
    let oldestPerson = null;
    let maxAge = -Infinity;

    people.forEach(person => {
        let currentAge;
        if (person.yearOfDeath) {
            currentAge = person.yearOfDeath - person.yearOfBirth;
        } else {
            const currentYear = new Date().getFullYear();
            currentAge = currentYear = person.yearOfBirth;
        }

        if(currentAge > maxAge) {
            maxAge = currentAge;
            oldestPerson = person;
        }
    })
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
