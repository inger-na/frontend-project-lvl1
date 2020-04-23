#!/usr/bin/env node
import game from '../index.js';

const calc = () => {
  const title = 'What is the result of the expression?';
  const getQuestion = () => {
    const signs = () => {
      const operators = ['+', '-', '*'];
      return (operators[Math.floor(Math.random() * 3)]);
    };
    const operator = signs();
    const math = Math.floor((Math.random() * 100) + 1);
    const mathSecond = Math.floor((Math.random() * 100) + 1);
    const question = `${math} ${operator} ${mathSecond}`;
    const answer = eval(question);
    return { question, answer };
  };
  game({ title, getQuestion });
};
export default calc;
