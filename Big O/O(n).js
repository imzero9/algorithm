// O(n) --> Linear Time
// An operation scales up as the size of the input increases

// Example 1
const nemo = ["nemo"];
const everyone = [
    "dory",
    "bruce",
    "marlin",
    "nemo",
    "gill",
    "bloat",
    "nigel",
    "squirt",
    "darla",
    "hank",
];
const large = new Array(100000).fill("nemo");

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "nemo") {
            console.log("Found NEMO!");
        }
    }
}

findNemo(large);

// Example 2
const compressAllBoxes = (boxes) => {
    boxes.forEach((box) => console.log(box));
};
