function getComputerChoice(choices) {
    return choices[Math.floor(Math.random()*choices.length)];
}
const choices = ['rock', 'paper', 'scissors']; 
console.log(getComputerChoice(choices)); 


