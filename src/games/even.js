#!/usr/bin/env node
import game from '../index.js';
import math from '../modules/math.js';

const title = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestion = () => {
  const question = math();
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};
export default () => game(getQuestion, title);
