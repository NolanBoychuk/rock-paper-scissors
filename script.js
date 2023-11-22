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

function game() {
    let playerCount = 0;
    let compCount = 0;
    for (let i = 1; i < 6; i++) {
        result = playRound(getComputerChoice(), prompt("R, P, or S"))
        console.log(result)
        if (result.slice(0,7) === 'You win') {
            playerCount += 1;
        }
        else if (result.slice(0,8) === 'You lose') {
            compCount += 1;
        }
    }
    console.log(playerCount);
    console.log(compCount);
    if (playerCount < compCount) {
        console.log('You lost the match');
    }
        else if (playerCount > compCount) {
            console.log('You won the match');
        }
        else {
            console.log("The match was a tie")
        }
}
game()