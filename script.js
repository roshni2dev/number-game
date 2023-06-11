'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = document.querySelector('.message');
const bodySelector = document.querySelector('body');
const scoreSelector = document.querySelector('.score');
const correctNumber = document.querySelector('.number');

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    correctNumber.textContent = '?';
    document.querySelector('.guess').value = '';
    bodySelector.style.backgroundColor = '#222'
    scoreSelector.textContent = score;
    correctNumber.style.width = '15rem';
    displayMessage.textContent = 'Start guessing...';

})

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value) ;
    //when there is no input
    if (!guess){
        displayMessage.textContent = '⛔️ No number please add value';
    }
    // when player wins
    else if(guess === secretNumber){
        displayMessage.textContent = '🎉 Correct Number !';
        correctNumber.textContent = secretNumber;
        bodySelector.style.backgroundColor = '#60b347';
        correctNumber.style.width = '25rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
    //when guess is wrong
    else if(guess !== secretNumber){
        if(score > 1){
         displayMessage.textContent = guess > secretNumber ? '📈 Too high !' : '📉 Too low  !';
            score--;
           scoreSelector.textContent = score;
         }
         else{
            displayMessage.textContent = '💥 You lost the game';
           scoreSelector.textContent = 0;
    
         }
    }
    // when guess is too high
    // else if(guess > secretNumber){
    //  if(score > 1){
    //     document.querySelector('.message').textContent = '📈 Too high !'
    //     score--;
    //    scoreSelector.textContent = score;
    //  }
    //  else{
    //     document.querySelector('.message').textContent = '💥 You lost the game';
    //    scoreSelector.textContent = 0;

    //  }
    // }
    // // when guess is too low
    // else if(guess < secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📉 Too low  !'
    //         score--;
    //        scoreSelector.textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = '💥 You lost the game';
    //        scoreSelector.textContent = 0;
    
    //      }
    // }
})