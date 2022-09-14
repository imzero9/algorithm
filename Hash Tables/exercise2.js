// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4];
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4];
// It should return 1

// Given an array = [2,3,4,5];
// It should return undefined

// My Trial
function firstRepeatedItem(arr) {
    const result = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in result) {
            return arr[i];
        } else {
            // add to object if it doesn't exist
        }
    }
    return undefined;
}

// Andrei's First Approach
function firstRepeatedItem(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return undefined;
} // O(n^2)

// Andrei's Second Approach
function firstRepeatedItem2(arr) {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            return arr[i];
        } else {
            map[arr[i]] = true;
        }
    }
    return undefined;
} // O(n)
