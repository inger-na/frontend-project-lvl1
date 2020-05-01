#!/usr/bin/env node
import game from '../index.js';
import math from '../modules/math.js';

const title = 'Find the greatest common divisor of given numbers.';
const getQuestion = () => {
  const mathFirst = math();
  const mathSecond = math();
  const question = `${mathFirst} ${mathSecond}`;
  const result = (num1, num2) => {
    let i;
    const num = Math.min(num1, num2);
    for (i = num; i > 0; i -= 1) {
      if ((num1 % i === 0) && (num2 % i === 0)) {
        return i;
      }
    }
    return i;
  };
  const answer = result(mathFirst, mathSecond);
  return [question, answer.toString()];
};
export default () => game(getQuestion, title);
