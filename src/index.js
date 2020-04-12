import readlineSync from 'readline-sync';

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const even = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const math = Math.floor((Math.random() * 100) + 1);
    const questions = readlineSync.question(`Question: ${math}  \nYour answer: `);
    if (math % 2 === 0) {
      if (questions === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`"${questions}" is wrong answer ;(. Correct answer was "yes". Let's try again, ${name} `);
        break;
      }
    }
    if (math % 2 !== 0) {
      if (questions === 'no') {
        console.log('Correct!');
      } else {
        console.log(`"${questions}" is wrong answer ;(. Correct answer was "no".
Let's try again, ${name} !`);
        break;
      }
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export default even;
