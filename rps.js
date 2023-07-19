const choices = ['rock', 'paper', 'scissor'];
var userPoint = 0; 
var computerPoint = 0;
let computerSelection = getComputerChoice(choices);

function getComputerChoice(choices) {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) { 
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerPoint = computerPoint + 1; 
        alert ('You Lose! Paper beats Rock!')
        return ('You Lose! Paper beats Rock!');
    } else if (playerSelection === 'paper' && computerSelection == 'scissor') {
        computerPoint = computerPoint + 1; 
        alert ('You Lose! Scissor beats Paper!')
        return ('You Lose! Scissor beats Paper!'); 
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        computerPoint = computerPoint + 1; 
        alert ('You Lose! Rock beats Scissor!')
        return ('You Lose! Rock beats Scissor!')
    } else if (playerSelection === computerSelection) {
        alert ('That\s a tie!')
        return ('That\s a tie!')
    } else {
        userPoint = userPoint + 1; 
        alert ('You Won!')
        return ('You Won!')
    }
}

function game() {
    console.log('computer: ' + computerSelection);
    if (userPoint === 5) {
        finalResults.textContent = 'You Won! Press F5 to restart.';
    } else if (computerPoint === 5) {
        finalResults.textContent = 'Computer Won! Press F5 to restart.';
    }
    return ('User\'s Point: ' + userPoint + ' Computer\'s Point: ' + computerPoint);
}; 

const selectRock = document.createElement('button');  
selectRock.textContent = 'Rock'; 
document.body.appendChild(selectRock); 
selectRock.addEventListener('click', () => {
    computerSelection = getComputerChoice(choices);
    playRound('rock', computerSelection); 
    results.textContent = game();    
});  

const selectPaper = document.createElement('button'); 
selectPaper.textContent = 'Paper'; 
document.body.appendChild(selectPaper);
selectPaper.addEventListener('click', () => {
    computerSelection = getComputerChoice(choices);
    playRound('paper', computerSelection); 
    results.textContent = game();  
}); 

const selectScissor = document.createElement('button'); 
selectScissor.textContent = 'Scissor';
document.body.appendChild(selectScissor); 
selectScissor.addEventListener('click', () => {
    computerSelection = getComputerChoice(choices); 
    playRound('scissor', computerSelection);  
    results.textContent = game(); 
});

const results = document.createElement('div'); 
document.body.appendChild(results); 

const finalResults = document.createElement('div'); 
document.body.appendChild(finalResults); 
 


