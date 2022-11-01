const titleToNumber = (columnTitle) => {
    let result = 0;
    let columnLength = 0;

    for (let i = columnTitle.length - 1; i >= 0; i--) {
        result +=
            (columnTitle[i].charCodeAt() - 64) * Math.pow(26, columnLength);

        columnLength++;
    }

    return result;
};

const titleToNumber2 = (columnTitle) => {
    let result = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        let char = columnTitle[columnTitle.length - 1 - i];

        result += Math.pow(26, i) * (char.charCodeAt() - 64);
    }

    return result;
};
