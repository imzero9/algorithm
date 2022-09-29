// Reverse string exercise

function reverseStrRecursive(str) {
    if (str === "") {
        return "";
    } else {
        return reverseStrRecursive(str.substr(1)) + str.charAt(0);
    }
}
