#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! `);
  return userName;
};

const game = (getQuestion, title) => {
  console.log('Welcome to the Brain Games! ');
  const userName = getUserName();
  console.log(`${title}`);
  for (let i = 1; i <= 3; i += 1) {
    const [question, answer] = getQuestion();
    const yourAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
    if (yourAnswer === answer) {
      console.log('Correct!');
    } else {
      return console.log(`"${yourAnswer}" is wrong answer ;(. Correct answer was "${answer}". \n Let's try again, ${userName} !`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default game;
