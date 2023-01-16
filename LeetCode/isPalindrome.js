// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

var isPalindrome = (str) => {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = str.split("").reverse().join("");

    return str === reversedStr ? true : false;
};
