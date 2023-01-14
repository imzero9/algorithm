const romanToInt = (s) => {
    const obj = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
    let result = 0;

    const splitted = s.split("").map((key) => obj[key]);

    for (let i = 0; i < splitted.length; i++) {
        splitted[i] < splitted[i + 1]
            ? (result -= splitted[i])
            : (result += splitted[i]);
    }

    return result;
};
