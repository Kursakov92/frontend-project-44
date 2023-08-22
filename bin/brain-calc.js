import readlineSync from 'readline-sync';
import randomNumber from './brain-even.js';

export default function calc() {
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
