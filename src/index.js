#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! `);
  return userName;
};

const game = (data) => {
  console.log('Welcome to the Brain Games! ');

  const userName = getUserName();
  console.log(`${data.title}`);
  for (let i = 1; i <= 3; i += 1) {
    const { question, answer } = data.getQuestion();
    const yourAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
    if (yourAnswer == answer) {
      console.log('Correct!');
    } else {
      console.log(`"${yourAnswer}" is wrong answer ;(. Correct answer was "${answer}". \n Let's try again, ${userName} !`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default game;
