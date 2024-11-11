const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    let oldestAge = 0, oldestPerson = null;
    for (let person of people) {
        let age = 0;
        if ('yearOfDeath' in person) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            age = currentYear - person.yearOfBirth;
        }

        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = person;
        };
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
