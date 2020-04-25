#!/usr/bin/env node
import game from '../index.js';

const gcd = () => {
  const title = 'Find the greatest common divisor of given numbers.';
  const getQuestion = () => {
    const math = Math.floor((Math.random() * 100) + 1);
    const mathSecond = Math.floor((Math.random() * 100) + 1);
    const question = `${math} ${mathSecond}`;    
  const result = ( num1, num2 ) => {
   const num = Math.min(num1, num2);
      for (let i = num; i > 0; i -= 1) {
     if ((num1 % i === 0) && (num2 % i === 0 )){
     return i;
     }
  }
  }
  const answer = result(math, mathSecond);    return { question, answer: String(answer) };
  };
  game({ title, getQuestion });
};
export default gcd;

