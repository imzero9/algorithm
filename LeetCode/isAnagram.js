// My solution
var isAnagram = function (s, t) {
    let target, index;
    s = s.split("");
    t = t.split("");

    for (let i = 0; i < s.length; i++) {
        target = s[i];

        if (!t.includes(target)) return false;

        index = t.indexOf(target);
        t.splice(index, 1);
    }

    if (t.length === 0) return true;
    else return false;
};

// Two of top rated solutions
var isAnagram = function (s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("");
};

function isAnagram(s, t) {
    const map = {};
    s.split("").map((c) => (map[c] = map[c] ? map[c] + 1 : 1));
    t.split("").map((c) => (map[c] = map[c] ? map[c] - 1 : -1));
    return Object.keys(map).every((k) => map[k] === 0);
}
