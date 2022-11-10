// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

const climbStairs = (n) => {
    let numOfWays = [1, 2];

    for (let i = 2; i < n; i++) {
        numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2];
    }

    return numOfWays[n - 1];
};
