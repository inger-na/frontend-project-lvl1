import game from '../index.js';
import getRandomNumber from '../random.js';

const title = 'Find the greatest common divisor of given numbers.';
const getGreatestCommonDivisor = (num1, num2) => {
  let i;
  const num = Math.min(num1, num2);
  for (i = num; i > 0; i -= 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      return i;
    }
  }
  return i;
};
const getQuestionAndAnswer = () => {
  const firstRandomNumber = getRandomNumber(1);
  const secondRandomNumber = getRandomNumber(1);
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const answer = getGreatestCommonDivisor(firstRandomNumber, secondRandomNumber);
  return [question, answer.toString()];
};
export default () => game(getQuestionAndAnswer, title);
