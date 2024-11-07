const sumAll = function(n, m) {
    if (!(Number.isInteger(n) && Number.isInteger(m))) {
        return 'ERROR';
    }

    let start, end, sum = 0;
    if (n < m) {
        start = n;
        end = m;
    } else {
        start = m;
        end = n;
    }

    while (start <= end) {
        sum += start++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
