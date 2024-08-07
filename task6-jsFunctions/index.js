const printEnteredNumber = num => console.log(num);
printEnteredNumber(5);

const devisableBy3And4 = num => console.log(num % 3 === 0 && num % 4 === 0);
devisableBy3And4(12);
devisableBy3And4(9);

const max = (num1, num2) => console.log(Math.max(num1, num2));
max(3, 5);
max(10, 7);

const isNegative = num => console.log(num < 0 ? 'negative' : 'positive');
isNegative(-5);
isNegative(10);

const maxMin = (...nums) =>
  console.log(`max: ${Math.max(...nums)}, min: ${Math.min(...nums)}`);
maxMin(7, 8, 5);
maxMin(3, 6, 9);

const isEven = num => console.log(num % 2 === 0 ? 'even' : 'odd');
isEven(8);
isEven(7);

const isVowel = char =>
  console.log(
    ['a', 'e', 'I', 'o', 'u'].find(vow => vow === char.toLowerCase())
      ? 'vowel'
      : 'Consonant'
  );
isVowel('O');
isVowel('b');

const upToNumber = num =>
  console.log(Array.from({ length: num }, (_, i) => i + 1).join(' '));
upToNumber(5);

const upTo12 = num =>
  console.log(Array.from({ length: 12 }, (_, i) => (i + 1) * num).join(' '));
upTo12(5);

const evenUpToNumber = num =>
  console.log(
    Array.from({ length: num }, (_, i) => i + 1)
      .filter(n => n % 2 === 0)
      .join(' ')
  );
evenUpToNumber(15);

const power = (num1, num2) => console.log(Math.pow(num1, num2));
power(4, 3);

const totalCalculator = (...grades) => {
  const total = grades.reduce((prev, cur) => prev + cur, 0);
  const avg = total / grades.length;
  console.log(
    `Total marks: ${total}, Average Marks: ${avg}, Percentage: ${avg}%`
  );
};
totalCalculator(95, 76, 58, 90, 89);

const daysInMonth = num =>
  console.log(
    `Days in Month: ${[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].at(
      num - 1
    )}`
  );
daysInMonth(1);

const gradeCalculator = (...grades) => {
  const perc = grades.reduce((prev, cur) => prev + cur, 0) / grades.length;
  const grade =
    [
      [90, 'A'],
      [80, 'B'],
      [70, 'C'],
      [60, 'D'],
      [40, 'E'],
    ]
      .find(v => perc >= v[0])
      ?.at(1) ?? 'F';

  console.log(`Percentage: ${perc}%, grade: ${grade}`);
};
gradeCalculator(95, 76, 58, 90, 89);

console.log('');
console.log('Switch: ');

const switchDaysInMonth = num => {
  let days;
  switch (num) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      days = 28;
      break;
    default:
      days = 'Invalid month number!';
  }
  console.log(`Days in Month: ${days}`);
};
switchDaysInMonth(1);

const switchIsVowel = char => {
  switch (char.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      console.log(`Vowel`);
    default:
      console.log(`Consonant`);
  }
};
isVowel('O');
isVowel('b');

const switchMax = (num1, num2) => {
  switch (true) {
    case num1 > num2:
      console.log(`The maximum number is ${num1}.`);
      break;
    case num2 > num1:
      console.log(`The maximum number is ${num2}.`);
      break;
    default:
      console.log('Both numbers are equal.');
  }
};
switchMax(3, 5);
switchMax(10, 7);

const switchIsEven = num => {
  switch (true) {
    case num % 2 === 0:
      console.log(`even`);
      break;
    default:
      console.log('odd');
  }
};
switchIsEven(8);
switchIsEven(7);

const switchIsNegative = num => {
  switch (true) {
    case num > 0:
      console.log(`positive`);
      break;
    case num < 0:
      console.log(`negative`);
      break;
    default:
      console.log('zero');
  }
};
switchIsNegative(-5);
switchIsNegative(10);
switchIsNegative(0);

const simpleCalculator = (num1, num2, operator) => {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      console.log('Invalid operator! Use one of +, -, *, /');
  }

  console.log(`The result of ${num1} ${operator} ${num2} is ${result}.`);
};
simpleCalculator(10, 5, '+');
simpleCalculator(10, 5, '-');
simpleCalculator(10, 5, '*');
simpleCalculator(10, 5, '/');
