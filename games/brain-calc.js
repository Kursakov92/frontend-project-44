import readlineSync from 'readline-sync';
import playGame from '../src/index.js';
import greeting from '../src/greeting.js';
import randomNumber from '../src/randomNumber.js';

function calc() {
  let correctAnswer;
  const operator = ['+', '-', '*'];
  const number1 = randomNumber(1, 99);
  const number2 = randomNumber(1, 99);
  const randomOperator = randomNumber(0, 3);
  console.log('What is the result of the expression?');
  const answer = readlineSync.question(`Question: ${number1} ${operator[randomOperator]} ${number2}  `);
  console.log(`Your answer: ${answer}`);
  switch (randomOperator) {
    case 0:
      correctAnswer = String(number1 + number2);
      break;
    case 1:
      correctAnswer = String(number1 - number2);
      break;
    case 2:
      correctAnswer = String(number1 * number2);
      break;
    default:
  }
  return answer === correctAnswer;
}

export default function brainCalc() {
  const userName = greeting();
  playGame(calc, userName);
}
