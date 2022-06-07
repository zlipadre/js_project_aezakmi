const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice;
generateComputerChoice();
getResult();
}));

function generateComputerChoice () {
    const randomNumber = Math.floor(Math.random() * possibleChoice.length);

    if( randomNumber === 1 ) {
    computerChoice = 'rock'; 
    }
    if( randomNumber === 2 ) {
    computerChoice = 'scissors'; 
    }
    if( randomNumber === 3 ) {
    computerChoice = 'paper'; 
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if(computerChoice === userChoice) {
        result = 'draw';
    }
    if(computerChoice === `rock` && userChoice === `paper`) {
        result = 'paper wins';
    }
    if(computerChoice === `rock` && userChoice === `scissors`) {
        result = 'rock wins';
    }
    if(computerChoice === `paper` && userChoice === `rock`) {
        result = 'paper wins';
    }
    if(computerChoice === `paper` && userChoice === `scissors`) {
        result = 'scissors wins';
    }
    if(computerChoice === `scissors` && userChoice === `paper`) {
        result = 'scissors wins';
    }
    if(computerChoice === `scissors` && userChoice === `rock`) {
        result = 'rock wins';
    }

    resultDisplay.innerHTML = result;
}