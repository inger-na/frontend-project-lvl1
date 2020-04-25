#!/usr/bin/env node
import game from '../index.js';

const progression = () => {
  const title = 'What number is missing in the progression?';
  const getQuestion = () => {
    const math = Math.floor((Math.random() * 20) + 1);
    const mathSecond = Math.floor((Math.random() * 10) + 1);
    const result = [];
    const answer = [];
    for (let i = 1; i <= 10; i += 1) {
      if (i === mathSecond) {
        result.push('..');
        const x = math + i;
        answer.push(x + i);
      } if (i !== mathSecond) {
        const y = math + i;
        result.push(y + i);
      }
    }
    return { question: result.join(' '), answer: answer.join('') };
  };
  game({ title, getQuestion });
};
export default progression;
