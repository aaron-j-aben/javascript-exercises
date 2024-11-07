const reverseString = function(string) {
    const strArr = string.split('');
    const halfLen = Math.floor(string.length / 2);
    
    for (let i = 0; i < halfLen; i++) {
        temp = strArr.at(-i - 1);
        strArr[string.length - i - 1] = strArr.at(i);
        strArr[i] = temp;
    }

    return strArr.join('');
};

// Do not edit below this line
module.exports = reverseString;