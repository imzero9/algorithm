// Given an integer n, return true if it is a power of three. Otherwise, return false.

const isPowerOfThree = (n) => {
    while (n > 1) {
        n /= 3;
    }
    return n === 1;
};
