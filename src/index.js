import readlineSync from 'readline-sync';

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const game = (getQuestionAndAnswer, title) => {
  const numberOfQuestions = 3;// question is given three times at each game;
  console.log('Welcome to the Brain Games! ');
  const userName = getUserName();
  console.log(`Hello, ${userName}! `);
  console.log(`${title}`);
  for (let i = 1; i <= numberOfQuestions; i += 1) {
    const [question, answer] = getQuestionAndAnswer();
    const yourAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
    if (yourAnswer === answer) {
      console.log('Correct!');
    } else {
      return console.log(`"${yourAnswer}" is wrong answer ;(. Correct answer was "${answer}". \n Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default game;
