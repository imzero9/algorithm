function booooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log("booooo!");
    }
}

booooo([1, 2, 3, 4, 5]);

// Space complexity: O(1) -> declaring variable i

function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = "hi";
    }
    return hiArray;
}

// Space complexity: O(n) -> adding 'hi' n times to array data structures
