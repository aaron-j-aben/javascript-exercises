const removeFromArray = function(arr, ...args) {
    for (const arg of args) {
        let i = 0;
        while (i < arr.length) {
            if (arr.at(i) === arg) {
                arr.splice(i, 1);
            } else {
                i++;
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