const singleNum = (nums) => {
    if (nums.length === 1) {
        return nums[0];
    }

    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in map) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }

    for (const num in map) {
        if (map[num] == 1) {
            return num;
        }
    }
};

// Answer using XOR operator
var singleNumber = function (nums) {
    return nums.reduce((a, b) => a ^ b);
};
