//Import createIntegers from another module
import { createIntegers } from './utils.js';

function returnStrings(number) {
  if (number === 15) return "The number is 15";
  if (number % 5 === 0) return "The number is divisible by 5";
  if (number > 10 && number <= 20) return "The number is between 10 and 20 inclusive";

  return `The number is ${number}`;
}

const numbers = createIntegers(100, 3);

for (const num of numbers) {
  const result = returnStrings(num);
  console.log(result);
}