// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// With built-in functions
var mySqrt = function (x) {
    return Math.floor(Math.sqrt(x));
};

// Without built-in functions
var mySqrt = function (x) {
    let val = 0;
    while (val * val <= x) val++;

    return val - 1;
};
