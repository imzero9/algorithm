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
