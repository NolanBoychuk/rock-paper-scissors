function getRandom(max) {
    let randomNum = Math.floor(Math.random() * max) + 1;
    return randomNum
}

function getComputerChoice(){
    let choice = getRandom(3);
    if (choice === 1) {
        return 'rock';
    }
        else if (choice === 2) {
            return 'paper';
        }
        else if (choice === 3) {
            return 'scissors';
        }
}

function playRound(computer, player) {
    if (player.toLowerCase() === 'rock' && computer === 'paper') {
        return 'You lose, paper beats rock';
    }
        else if (player.toLowerCase() === 'rock' && computer === 'scissors') {
            return 'You win, rock beats scissors';
        }
        else if (player.toLowerCase() === 'scissors' && computer === 'rock') {
            return 'You lose, rock beats scissors';
        }
        else if (player.toLowerCase() === 'scissors' && computer === 'paper') {
            return 'You win, scissors beat paper';
        }
        else if (player.toLowerCase() === 'paper' && computer === 'rock') {
            return 'You win, paper beats rock';
        }
        else if (player.toLowerCase() === 'paper' && computer === 'scissors') {
            return 'You lose, scissors beat paper';
        }
        else{
            return "It was a draw"
        }
}

const buttonPiedra = document.querySelector('#piedra');
const buttonPapel = document.querySelector('#papel');
const buttonTijera = document.querySelector('#tijera');
const anyButton = document.querySelectorAll('button')
const resultDiv = document.querySelector('#dynamicDiv');
const initialHeader = document.querySelector('#initialHeader');
const computerResult = document.createElement('div');
computerResult.classList.add('resultField');
let computerNum = document.createElement('span');
let computerNumberDynamic = 0;
computerNum.textContent = String(computerNumberDynamic);
const playerResult = document.createElement('div');
let playerNum = document.createElement('span')
let playerNumberDynamic = 0;
playerNum.textContent = String(playerNumberDynamic);
playerResult.classList.add('resultField');
playerResult.textContent = 'Player: '
computerResult.textContent = 'Computer: '
playerResult.append(playerNum);
computerResult.append(computerNum);
let matchResult = document.querySelector('#matchResultContainer');
let roundResult = 'null for now';
let lineBreak = document.createElement('br');
let done = false;
let playAgain = document.createElement('button');
playAgain.classList.add('playAgainButton')
playAgain.textContent = "Play again?"

playAgain.addEventListener('click',function() {
    playerNumberDynamic = 0;
    computerNumberDynamic = 0;
    playAgain.remove();
    matchResult.textContent = "";
    done = false;
    playerNum.textContent = String(playerNumberDynamic);
    computerNum.textContent = String(computerNumberDynamic);
})

anyButton.forEach(function(button){
    button.addEventListener('click',function(){
    initialHeader.remove();
    resultDiv.appendChild(computerResult);
    resultDiv.appendChild(playerResult);
    console.log(button.textContent);
    once:true;
    })
})

buttonPiedra.addEventListener('click', function(){
    changeResults('rock')})
buttonPapel.addEventListener('click', function(){
    changeResults('paper')})
buttonTijera.addEventListener('click', function(){
    changeResults('scissors')})

function changeResults(material){
    if(done === false){
        let result = playRound(getComputerChoice(), material);
        roundResult = document.createElement('div');
        roundResult.classList.add('roundResult');
        roundResult.textContent = result;
        matchResult.appendChild(roundResult);
        if (result.slice(0,7) === 'You win') {
            playerNumberDynamic += 1;
            playerNum.textContent = String(playerNumberDynamic);
        }
        else if (result.slice(0,8) === 'You lose') {
            computerNumberDynamic += 1;
            computerNum.textContent = String(computerNumberDynamic);
        }
        if(playerNumberDynamic === 5){
            matchResult.textContent = "You win the match!"
            done = true;
            matchResult.appendChild(playAgain);
        }
        else if(computerNumberDynamic === 5){
            matchResult.textContent = "You lose the match!"
            done = true;
            matchResult.appendChild(playAgain);
        }
    }
}