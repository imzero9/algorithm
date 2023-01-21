// Solution using for loop
var hammingWeight = function (n) {
    const str = n.toString(2);
    let result = 0;

    for (let char of str) {
        result += char === "1" ? 1 : 0;
    }

    return result;
};

// Solution using replace
var hammingWeihgt = function (n) {
    return n.toString(2).replaceAll("0", "").length;
};
