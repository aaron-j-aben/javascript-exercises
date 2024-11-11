const fibonacci = function(n) {
    if (n < 0) return 'OOPS';

    let temp, pre = 0, curr = 1;

    for (let i = 0; i < n; i++) {
        temp = pre;
        pre = curr;
        curr = pre + temp;
    }

    return pre;
};

// Do not edit below this line
module.exports = fibonacci;
