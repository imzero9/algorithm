// Write two functions that find the factorial of any number. One should use recursive, the other should just use a for loop

// Recursion
// 1. Identify the base case (when to stop)
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually have two returns

function findFactorialRecursive(number) {
    // O(n)
    if (number === 2) {
        return 2;
    }

    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
    // O(n)
    let answer = 1;

    if (number === 2) {
        answer = 2;
        return answer;
    }

    for (let i = 2; i <= number; i++) {
        answer *= i;
    }

    return answer;
}

findFactorialIterative(2);
