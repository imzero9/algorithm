// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

const majorityElement = (nums) => {
    // Map elements to its frequency in obj
    let count = {};

    for (n of nums) {
        count[n] ? count[n]++ : (count[n] = 1);

        // Extract the majority element
        if (count[n] > nums.length / 2) return n;
    }
    return -1;
};
