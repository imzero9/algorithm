// My Solution
const fizzBuzz = (n) => {
    const arr = Array.from({ length: n }, (_, i) => i + 1);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 15 === 0) {
            arr[i] = "FizzBuzz";
        }
        if (arr[i] % 3 === 0) {
            arr[i] = "Fizz";
        }
        if (arr[i] % 5 === 0) {
            arr[i] = "Buzz";
        }
        arr[i] = arr[i].toString();
    }
    return arr;
};

// Cleaner Solution
const fizzBuzz2 = (n) => {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0 && i % 3 === 0) result.push("FizzBuzz");
        else if (i % 3 === 0) result.push("Fizz");
        else if (i % 5 === 0) result.push("Buzz");
        else result.push(i.toString());
    }
    return result;
};

// Top Rated Solution
const fizzBuzz3 = (n) => {
    return new Array(n)
        .fill(0)
        .map(
            (a, i) => (++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || "" + i
        );
};
