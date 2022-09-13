const strings = ["a", "b", "c", "d"];

// push
strings.push("e"); // O(1)

// pop
strings.pop(); // O(1)

// unshift
strings.unshift("x"); // O(n)

// splice
strings.splice(2, 0, "alien"); // O(n)

// PROS
// Fast lookup, push, pop -> O(1)
// Ordered in adjacent memory

// CONS
// Slow insert, delete -> O(n)
// Fized size if using a static array
