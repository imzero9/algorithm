// O(n^2) - Quadratic Time
// As the number of elements increases, the number of operations increases quadratically

// Log all pairs of array
const boxes = ["a", "b", "c", "d", "e"];

function logAllPairs(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
}
