const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'PLAYER_WINS';
const RESULT_COMPUTER_WIN = 'COMPUTER_WINS';

let gameIsRunning = false;

// start();
// 함수 선언을 할 경우에는 전역에서 함수를 실행할 수 있지만 함수 표현식으로 사용되면 표현식 작성 후에 함수를 실행해야 함

// function startGame() {
// const start = function startGame() {
// const start = function() { // 익명 함수
//   console.log('Game is starting...');
// }; // 함수 표현식의 경우 세미콜론을 붙여도 되고 안붙여도 됨

// const person = {
//   name: 'Max',
//   greet: function greet() {
//     console.log('Hello there!');
//   }
// }

// person.greet();

// console.log(typeof startGame);
// console.dir(startGame);

// const getPlayerChoice = function () {
const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    // return DEFAULT_USER_CHOICE;
    return;
  }
  return selection;
};

// const getComputerChoice = function () {
const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// const getWinner = function (cChoice, pChoice) {
//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     cChoice === ROCK && pChoice === PAPER ||
//     cChoice === PAPER && pChoice === SCISSORS ||
//     cChoice === SCISSORS && pChoice === ROCK
//   ) {
//     return RESULT_PLAYER_WIN;
//   } else {
//     return RESULT_COMPUTER_WIN;
//   }
// };

// const getWinner = (cChoice, pChoice) => 
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => 
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WIN
    : RESULT_COMPUTER_WIN;
// arrow function으로 더 짧게 코드를 작성할 수 있음

// startGame();
// startGameBtn.addEventListener('click', startGame);
// startGameBtn.addEventListener('click', start);
// startGameBtn.addEventListener('click', function () {
//   console.log('Game is starting...');
//   console.log('Game is starting...', age); // 오류난 함수명이 annonymous로 표시
// });
// startGameBtn.addEventListener('click', function startGame() {
//   console.log('Game is starting...', age); // 오류난 함수명이 startGame으로 표시
// });
// startGameBtn.addEventListener('click', function () {
startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  // console.log(playerSelection);
  // const winner = getWinner(computerChoice, playerChoice);
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  // console.log(winner);
  // let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you `;
  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw.'
  } else if (winner === RESULT_PLAYER_WIN) {
    message = message + 'won.'
  } else {
    message = message + 'lost.'
  }
  alert(message);
  gameIsRunning = false;
});


// not related to game-----------------------------------------------------------

// const sumUp = (numbers) => {
// const sumUp = (...numbers) => { // ... -> rest operator
// const sumUp = (a, b, ...numbers) => { // 더 많은 매개변수를 가질 경우에는 ... 앞에 매개변수를 추가해줘야 함 (a, b, ...numbers)
// const sumUp = (resultHandler, ...numbers) => {
const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    // sum += num;
    // sum += validateNumber(num);
    if (operation === 'SUM') {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  // return sum; // 6(1, 5)을 뺀 나머지 numbers에 포함된 값만 출력
  resultHandler(sum, 'The result after adding all numbers is');
}; 

// const subtractUp = function(...numbers) {
// const subtractUp = function(resultHandler, ...numbers) {
//   let sum = 0;
//   // for (const num of numbers) {
//   for (const num of numbers) { // 옛날 방식, 사용하지 말 것
//     sum -= num;
//   }
//   resultHandler(sum);
// };

// const showResult = (result) => {
const showResult = (messageText, result) => {
  // alert('The result after adding all numbers is: ' + result);
  alert(messageText + ' ' + result);
};

// console.log(sumUp([1, 5, 10, -3, 6, 10]));
// console.log(sumUp(1, 5, 10, -3, 6, 10));
// console.log(sumUp(1, 5, 10, -3, 6, 'fasdas'));
// sumUp(showResult, 1, 5, 10, -3, 6, 'fasdas');
combine(showResult.bind(this, 'The result after adding all numbers is:'), 'ADD', 1, 5, 10, -3, 6, 'fasdas');
// sumUp(1, 5, 10, -3, 6, 10, 25, 88);
// console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));
// sumUp(showResult, 1, 5, 10, -3, 6, 10, 25, 88);
combine(showResult.bind(this, 'The result after adding all numbers is:'), 'ADD', 1, 5, 10, -3, 6, 10, 25, 88);
// console.log(subtractUp(1, 10, 15, 20));
// subtractUp(showResult, 1, 10, 15, 20);
combine(showResult.bind(this, 'The result after subtracting all numbers is:'), 'SUBTRACT', 1, 10, 15, 20);