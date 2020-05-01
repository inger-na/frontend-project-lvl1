#!/usr/bin/env node
import game from '../index.js';
import math from '../modules/math.js';

const title = 'What number is missing in the progression?';
const progressionLength = 10;
const getProgression = (start, diff, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + diff * i);
  }

  return progression;
};
const getQuestion = () => {
  const start = math();
  const diff = math(1, 2);
  const missingIndexElement = math(progressionLength - 1, 1);
  const progression = getProgression(start, diff, progressionLength);
  const answer = `${progression.splice(missingIndexElement, 1, '..')}`;
  const question = progression.join(' ');

  return [question, answer];
};

export default () => game(getQuestion, title);
