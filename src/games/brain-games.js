import { getUserName } from '../index.js';

export default function name() {
  console.log('Welcome to the Brain Games! ');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
}
