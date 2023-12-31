// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}

// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
const circleCircumference = (circle) =>
    +(2 * Math.PI * circle.radius).toFixed(6);

// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
    const matchingLengthValues = [];
    for (const key in obj) {
        if (key.length === 5) {
            matchingLengthValues.push(key);
        }
        if (obj[key].length === 5) {
            matchingLengthValues.push(obj[key]);
        }
    }
    return matchingLengthValues;
}

// опційна поглиблена задачка про замикання
// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(function () {
            return i;
        });
    }
    return res;
}

// опційна поглиблена задачка про наслідування
// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, "shark", status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, "cat", status);
    }
    introduce() {
        return `${super.introduce()}  Meow meow!`;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, "dog", status);
        this.master = master;
    }
    greetMaster() {
        return `Hello ${this.master}`;
    }
}

// https://www.codewars.com/kata/5721c189cdd71194c1000b9b
function grabDoll(dolls) {
  var bag = [];
  for (var i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i]);
    }
    if (bag.length !== 3) {
      continue;
    } else {
      break;
    }
  }
  return bag;
}
