const choices = ['rock', 'paper', 'scissor'];
var userPoint = 0; 
var computerPoint = 0;

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
    let userInput = prompt('Enter your option:'); 
    let userInput2 = userInput.toLowerCase(); 
    const computerSelection = getComputerChoice(choices);
    console.log('computer: ' + computerSelection); 
    console.log('player: ' + userInput)
    console.log(playRound(userInput2, computerSelection)); 
    alert ('User\'s Point: ' + userPoint + ' Computer\'s Point: ' + computerPoint)
}

game();
game();
game();
game();
game();
console.log(userPoint);
console.log(computerPoint); 


