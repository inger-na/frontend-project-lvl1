#!/usr/bin/env node
import game from '../index.js';
import math from '../modules/math.js';

const title = 'What is the result of the expression?';
const signs = () => {
  const operators = ['+', '-', '*'];
  return (operators[Math.floor(Math.random() * operators.length)]);
};
const calcOperation = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return false;
  }
};
const getQuestion = () => {
  const num1 = math();
  const num2 = math();
  const operator = signs();
  const question = `${num1} ${operator} ${num2}`;
  const answer = calcOperation(num1, num2, operator);
  return [question, answer.toString()];
};
export default () => game(getQuestion, title);
