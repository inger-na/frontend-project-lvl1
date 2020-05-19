import readlineSync from 'readline-sync';

const play = (getQuestionAndAnswer, title) => {
  const numberOfQuestions = 3;// question is given three times at each game;
  console.log('Welcome to the Brain Games! ');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! `);
  console.log(title);
  for (let i = 1; i <= numberOfQuestions; i += 1) {
    const [question, answer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}". \n Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default play;
