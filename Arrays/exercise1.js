// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

// My answer
function reverse(str) {
    return str.split("").reverse().join("");
}

// Andrei's Explanation
function reverse(str) {
    // check input
    if (!str || str.length < 2 || typeof str !== "string") {
        return "hmm that is not good";
    }

    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; (i = 0); i--) {
        backwards.push(str[i]);
    }

    return backwards.join();
}

const reverse2 = (str) => str.split("").reverse().join("");
const reverse3 = (str) => [...str].reverse().join("");
