# Big O Rule

### 1. Worst Case

#### ex. assume that the element we're finding is at the very last in the array

### 2. Remove Constants

```js
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    let middleIndex = Math.floor(items.length / 2);
    let index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (let i = 0; i < 100; i++) {
        console.log("hi");
    }
}

// X: O(1 + n/2 + 100)
// O: O(n)

function compressBoxesTwice(boxes) {
    boxes.forEach((box) => {
        console.log(box);
    });

    boxes.forEach((box) => {
        console.log(box);
    });
}

// X: O(2n)
// O: O(n)
```

### 3. Different terms for inputs

```js
function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function (boxes) {
        console.log(boxes);
    });

    boxes2.forEach(function (boxes) {
        console.log(boxes);
    });
}

// X: O(n)
// O: O(a + b), O(n + m) -> you can name it whatever you want
```

### 4. Drop Non Dominants

```js
function printAllNumbersAndPairSums(numbers) {
    console.log("these are the numbers: ");
    numbers.forEach((number) => {
        console.log(number);
    });

    console.log("and these are their sums: ");
    numbers.forEach((firstNumber) => {
        numbers.forEach((secondNumber) => {
            console.log(firstNumber + secondNumber);
        });
    });
}

printAllNumbersAndPairSums([1, 2, 3, 4, 5]);

// X: O(n + n^2)
// O: O(n^2)  -> only leave the most significant part
```
