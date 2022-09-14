// Hash Tables
// computer takes its property(key) through hash functions and decides where to put the key and value

// insert, lookup, delete, search => O(1)

let user = {
    age: 54,
    name: "Kylie",
    magic: true,
    scream: function () {
        console.log("ahhhhhh!!");
    },
};

user.age; // O(1)
user.spell = "abra kadabra"; // O(1)
user.scream(); // O(1)

// Hash Collisions
// As the memory capacity is limited, sometimes computers add keys in the same memory address
// which can slow down our ability to access the information

// O(n/k) *k is the size of hash table
// = O(n)

// PROS
// Fast lookup, inserts, flexible keys(JS map)

// CONS
// Unordered, Slow key iteration
