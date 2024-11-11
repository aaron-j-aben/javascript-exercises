const palindromes = function (str) {
    const charArr = str.toLowerCase().split('');
    const cleanedArr = charArr.filter((char) => {
        const alphaNumericRegex = /^[0-9a-zA-Z]+$/;
        return char !== ' ' && char.match(alphaNumericRegex);
    });
    
    let start = 0, end = cleanedArr.length - 1;

    while (start < end) {
        if (cleanedArr[start] !== cleanedArr[end]) return false;
        start++, end--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
