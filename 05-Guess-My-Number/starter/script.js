'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

*/

// Variables declariations
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//Functions to display message content
const dispayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (showScore) {
  document.querySelector('.score').textContent = showScore;
};

//Actual code
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there no input
  if (!guess) {
    dispayMessage('🚫 No number');
  }
  //When guess win
  else if (guess === number) {
    dispayMessage('🎉 Correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = number;
    score++;
    displayScore(score);
  } else if (guess !== number) {
    if (score > 1) {
      dispayMessage(guess > number ? '🙌  Too High' : '⬇️  Too Low');
      score--;
      displayScore(score);
    } else {
      dispayMessage('You lost 😭');
      displayScore(0);
    }
  }
});
