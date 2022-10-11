const romanToInt = (str) => {
    const obj = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
    let value = 0;

    for (let i = 0; i < str.length; i += 1) {
        obj[str[i]] < obj[trs[i + 1]]
            ? (value -= obj[str[i]])
            : (value += obj[str[i]]);
    }
    return value;
};
