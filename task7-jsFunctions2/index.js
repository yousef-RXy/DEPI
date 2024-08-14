const reverseOneZero = num => 1 - num;
console.log(reverseOneZero(1));

const digitsSum = num =>
  ('' + num).split('').reduce((prev, curr) => prev + +curr, 0);
console.log(digitsSum(123));

const filterArray = arr => arr.filter(e => typeof e === typeof 0);
console.log(filterArray([1, 2, 'a', 'b']));
console.log(filterArray([1, 'a', 'b', 0, 15]));
console.log(filterArray([1, 2, 'aasf', '1', '123', 123]));

const animals = (chickens, cows, pigs) => chickens * 2 + cows * 4 + pigs * 4;
console.log(animals(2, 3, 5));
console.log(animals(1, 2, 3));
console.log(animals(5, 2, 8));
