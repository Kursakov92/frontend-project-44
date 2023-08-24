import readlineSync from 'readline-sync';
import playGame from '../src/index.js';
import randomNumber from '../src/randomNumber.js';
import greeting from '../src/greeting.js';

function progression() {
  const startNumber = randomNumber(0, 99);
  const step = randomNumber(1, 5);
  const arrayProgression = [startNumber];
  for (let i = 1; i < 10; i += 1) {
    arrayProgression.push(step * (i + 1));
  }
  const secretElement = randomNumber(0, 9);
  const arrWithoutElem = arrayProgression.concat([]);
  arrWithoutElem[secretElement] = '..';
  const joinProgression = arrWithoutElem.join(' ');
  const correctAnswer = arrayProgression[secretElement];
  console.log('What number is missing in the progression?');
  const answer = readlineSync.question(`Question: ${joinProgression}`);
  console.log(`Your answer: ${answer}`);
  const result = {
    isCorrect: answer === correctAnswer,
    answer,
    correctAnswer,
  };
  return result;
}

export default function brainProgression() {
  const name = greeting();
  playGame(progression, name, 1);
}
