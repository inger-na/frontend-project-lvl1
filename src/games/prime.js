import play from '../index.js';
import getRandomNumber from '../random.js';

const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const getQuestionAndAnswer = () => {
  const question = getRandomNumber(2, 200);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};
export default () => play(getQuestionAndAnswer, title);
