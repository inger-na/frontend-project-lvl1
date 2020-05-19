import play from '../index.js';
import getRandomNumber from '../random.js';

const title = 'What is the result of the expression?';
const getSigns = () => {
  const operators = ['+', '-', '*'];
  const operatorsLen = operators.length;
  return (operators[getRandomNumber(0, operatorsLen)]);
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
  const operator = getSigns();
  const question = `${num1} ${operator} ${num2}`;
  const answer = calcOperation(num1, num2, operator);
  return [question, answer.toString()];
};
export default () => play(getQuestionAndAnswer, title);
