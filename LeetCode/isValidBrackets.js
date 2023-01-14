// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const isValid = (s) => {
    if (s.length % 2) return false;

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        const stackLast = stack[stack.length - 1];

        if (current === "(") stack.push(")");
        else if (current === "[") stack.push("]");
        else if (current === "{") stack.push("}");
        else if (current === stackLast) stack.pop();
        else return false;
    }

    return stack.length === 0;
};
