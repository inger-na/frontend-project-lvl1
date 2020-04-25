#!/usr/bin/env node
import game from '../index.js';

const prime = () => {
  const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getQuestion = () => {
    const math = Math.floor((Math.random() * 200) + 1);
    for (let i = 2; i < math; i += 1) {
      if (math % i === 0) {
        return { answer: 'no', question: math };
      }
    }
    return { answer: 'yes', question: math };
  };
  game({ title, getQuestion });
};
export default prime;
