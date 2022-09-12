// Coding Interview Example

// Give 2 arrays, create a function that lets a user know (true/false) whether these two arrays contain any common items
// For example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false
// -------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true

// 1. Clarify the problem and input/output
// input: 2 parameters - array - no size limit
// output: boolean

// 2. Start with naive approach
// don't need to write this code, just explain what it is and why it is not the best
function containsCommonItem(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false;
}

// Time complexity - O(n^2) or O(a*b) if arrays have different sizes
// Space complexity - O(1)

// 3. Come up with a better solution
// walk through the steps before start coding (ex.explanation or comment)
function containsCommonItem2(arr1, arr2) {
    // loop through first array and create object where properties === items in the array
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!map.arr1[i]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    // loop through second array and check if item in second array exists on created object
    for (let j = 0; j < arr2.length; j++) {
        if (map.arr2[j]) {
            return true;
        }
    }
    return false;
}

// Time complexity - O(a + b)
// Space complexity - O(a)

// 4. Think about error checks and how you can break this code above
// ex. what if we only pass only 1 param, pass null or 0 as params

// 5. Discuss how to improve the code
function containsCommonItem2(arr1, arr2) {
    return arr1.some((item) => arr2.includes(item));
}
