#!/usr/bin/env node
import game from '../index.js';
import math from '../modules/math.js';

const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  let result;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      result = false;
      return result;
    }
    result = true;
  }
  return result;
};
const getQuestion = () => {
  const question = math(200, 1);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};
export default () => game(getQuestion, title);
