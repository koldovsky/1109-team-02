// Convert a string to an array https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
    return string.split(" ");
}

// DNA to RNA Conversion https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
const DNAtoRNA = (dna) => dna.replace(/T/g, "U");

// Find Maximum and Minimum Values of a List https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
    return Math.min(...list);
};

var max = function (list) {
    return Math.max(...list);
};

// Smallest value of an array https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    return toReturn == "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
}

// Поглиблені задачки
// A wolf in sheep's clothing https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
    queue.reverse();
    return queue[0] == "wolf"
        ? "Pls go away and stop eating my sheep"
        : "Oi! Sheep number " +
        queue.indexOf("wolf") +
        "! You are about to be eaten by a wolf!";
}

// Beginner - Lost Without a Map https://www.codewars.com/kata/beginner-lost-without-a-map
function maps(x) {
    return x.map((i) => i * 2);
}

// Find the first non-consecutive number https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] > 1) {
            return arr[i];
        }
    }
    return null;
}

// Додаткові задачки по JS
// Double Integer    https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
const doubleInteger = (i) => i * 2;

// Century From Year    https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
const century = (year) => Math.ceil(year / 100);

// Make negative    https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
// Cockroach speed    https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
const cockroachSpeed = (s) => Math.floor(s * 27.777778);

// Angle of triangle    https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
const otherAngle = (a, b) => 180 - (a + b);

// Twice as old    https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
const twiceAsOld = (dadYearsOld, sonYearsOld) =>
    Math.abs(dadYearsOld - sonYearsOld * 2);

// Return n-th even number    https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
const nthEven = (n) => n * 2 - 2;

// What's the real floor     https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
const getRealFloor = (n) => (n <= 0 ? n : n <= 13 ? n - 1 : n - 2);

// Clock    https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
const past = (h, m, s) => 1000 * (h * 60 * 60 + m * 60 + s);

// Is n divisible by x and y    https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;