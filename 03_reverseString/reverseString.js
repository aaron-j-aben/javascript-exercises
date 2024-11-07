const reverseString = function(string) {
    const strArr = string.split('');
    const halfLen = Math.floor(string.length / 2);
    
    for (let i = 0; i < halfLen; i++) {
        [strArr[i], strArr.at(-i - 1)] = [strArr.at(-i - 1), [strArr[i]]]
    }

    return strArr.join('');
};

// Do not edit below this line
module.exports = reverseString;