// Twitter Example
// assumes that we have show the latest Twit and the oldest Twit

const tweets = ["oldest", "mid", "latest"];
tweets[0]; // O(1)
tweets[array.length - 1]; // O(1)

const tweetsAndDates = [
    {
        tweet: "oldest",
        date: 2012,
    },
    {
        tweet: "mid",
        date: 2014,
    },
    {
        tweet: "latest",
        date: "2018",
    },
];

// O(n^2)
