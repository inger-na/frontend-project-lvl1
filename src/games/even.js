import game from '../index.js';
import getRandomNumber from '../random.js';

const title = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};
export default () => game(getQuestionAndAnswer, title);
