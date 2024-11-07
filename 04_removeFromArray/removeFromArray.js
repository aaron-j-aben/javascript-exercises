const removeFromArray = function(arr, ...args) {
    for (const arg of args) {
        for (let i = 0; i < arr.length; i++) {
            if (arr.at(i) === arg) {
                arr.splice(i, 1);
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;


/*
Things to learn:
 >> indefinite optional arguments
 >> Common array methods - splice
 - How array length is calculated/stored in js
*/