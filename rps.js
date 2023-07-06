const choices = ['rock', 'paper', 'scissor'];  
function getComputerChoice(choices) {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return ('You Lose! Paper beats Rock!');
    } else if (playerSelection === 'paper' && computerSelection == 'scissor') {
        return ('You Lose! Scissor beats Paper!'); 
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        return ('You Lose! Rock beats Scissor!')
    } else if (playerSelection === computerSelection) {
        return ('That\s a tie!')
    } else {
        return ('You Won!')
    }
}
const playerSelection = 'paper'; 
const computerSelection = getComputerChoice(choices);
console.log("result: " + playRound(playerSelection, computerSelection));
console.log(playerSelection)
console.log(computerSelection)

