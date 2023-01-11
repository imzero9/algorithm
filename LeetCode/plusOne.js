// First Solution
var plusOne = function (digits) {
    const incrementedInteger = parseInt(digits.join(""), 10) + 1;
    const result = String(incrementedInteger).split("");

    return result;
};

// Second Solution Using BigInt
var plusOne = function (digits) {
    const answer = String(BigInt(digits.join("")) + BigInt(1)).split("");

    return answer;
};

// Test Case
// [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
