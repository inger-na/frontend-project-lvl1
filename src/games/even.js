#!/usr/bin/env node
import game from '../index.js';

const even = () => {
  const title = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getQuestion = () => {
    const question = Math.floor((Math.random() * 100) + 1);
    const answer = question % 2 === 0 ? 'yes' : 'no';
    return { question, answer };
  };
  game({ title, getQuestion });
};
export default even;
