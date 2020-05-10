import game from '../index.js';
import getRandomNumber from '../random.js';

const title = 'What is the result of the expression?';
const signs = () => {
  const operators = ['+', '-', '*'];
  const operatorsLen = operators.length;
  return (operators[getRandomNumber(undefined, operatorsLen)]);
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
const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = signs();
  const question = `${num1} ${operator} ${num2}`;
  const answer = calcOperation(num1, num2, operator);
  return [question, answer.toString()];
};
export default () => game(getQuestionAndAnswer, title);
