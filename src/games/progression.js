import game from '../index.js';
import getRandomNumber from '../random.js';

const title = 'What number is missing in the progression?';
const progressionLength = 10;
const getProgression = (startProgression, differenceInProgression, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(startProgression + differenceInProgression * i);
  }

  return progression;
};
const getQuestionAndAnswer = () => {
  const startProgression = getRandomNumber(1);
  const differenceInProgression = getRandomNumber(2, 1);
  const missingElementIndex = getRandomNumber(1, progressionLength - 1);
  const progression = getProgression(startProgression, differenceInProgression, progressionLength);
  const answer = progression.splice(missingElementIndex, 1, '..');
  const question = progression.join(' ');

  return [question, answer.toString()];
};

export default () => game(getQuestionAndAnswer, title);
