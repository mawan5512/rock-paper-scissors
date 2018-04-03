// All code should be written in this file.
let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;
let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    let moveTypeMissing = true;
    let moveValueMissing = true;
    let moveTypeInvalid = true;
    let moveValueInvalid = true;

    if(moveOneType != null && moveTwoType != null && moveThreeType != null){
        moveTypeMissing = false;
    }

    if(moveOneValue != null && moveTwoValue != null && moveThreeValue != null){
        moveValueMissing = false;
    }

    if((moveOneType === 'rock' || moveOneType === 'paper' || moveOneType === 'scissors') && (moveTwoType === 'rock' || moveTwoType === 'paper' || moveTwoType === 'scissors') && (moveThreeType === 'rock' || moveThreeType === 'paper' || moveThreeType === 'scissors')){
        moveTypeInvalid = false;
    }

    if((moveOneValue + moveTwoValue + moveThreeValue <= 99) && (moveOneValue > 0 && moveTwoValue > 0 && moveThreeValue > 0) && (moveOneValue <= 99 && moveTwoValue <= 99 && moveThreeValue <= 99)){
        moveValueInvalid = false;
    }

    if(!(moveTypeMissing || moveValueMissing || moveTypeInvalid || moveValueInvalid)){
        if (player === 'Player One'){
            playerOneMoveOneType = moveOneType;
            playerOneMoveOneValue = moveOneValue;
            playerOneMoveTwoType = moveTwoType;
            playerOneMoveTwoValue = moveTwoValue;
            playerOneMoveThreeType = moveThreeType;
            playerOneMoveThreeValue = moveThreeValue;
        }
        else
        {
            playerTwoMoveOneType = moveOneType;
            playerTwoMoveOneValue = moveOneValue;
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveTwoValue = moveTwoValue;
            playerTwoMoveThreeType = moveThreeType;
            playerTwoMoveThreeValue = moveThreeValue;
        }
    }


};

const setComputerMoves = () => {
    let comMoveValueLeft = 99;
    let comMoveValue = Math.floor(Math.random() * comMoveValueLeft) - 1;
    playerTwoMoveOneValue = comMoveValue;

    let comMoveType = Math.floor(Math.random() * 3) + 1;
    if(comMoveType === 1){
        playerTwoMoveOneType = 'rock';
    }
    else if(comMoveType === 2){
        playerTwoMoveOneType = 'paper';
    }
    else{
        playerTwoMoveOneType = 'scissors';
    }

    comMoveValueLeft -= comMoveValue;
    comMoveValue = Math.floor(Math.random() * comMoveValueLeft);
    playerTwoMoveTwoValue = comMoveValue;

    comMoveType = Math.floor(Math.random() * 3) + 1;
    if(comMoveType === 1){
        playerTwoMoveTwoType = 'rock';
    }
    else if(comMoveType === 2){
        playerTwoMoveTwoType = 'paper';
    }
    else{
        playerTwoMoveTwoType = 'scissors';
    }

    comMoveValueLeft -= comMoveValue;
    playerTwoMoveThreeValue = comMoveValueLeft;

    comMoveType = Math.floor(Math.random() * 3) + 1;
    if(comMoveType === 1){
        playerTwoMoveThreeType = 'rock';
    }
    else if(comMoveType === 2){
        playerTwoMoveThreeType = 'paper';
    }
    else{
        playerTwoMoveThreeType = 'scissors';
    }

};

//Should return winner of the round
const getRoundWinner = (round) => {
    let winner = null;

    switch(round){
        case 1:
            if(playerOneMoveOneType === playerTwoMoveOneType){
                if(playerOneMoveOneValue === playerTwoMoveOneValue){
                    winner = 'Tie';
                }
                else if(playerOneMoveOneValue > playerTwoMoveOneValue){
                    winner = 'Player One';
                }
                else if(playerTwoMoveOneValue > playerOneMoveOneValue){
                    winner = 'Player Two';
                }
            }
            else if(playerOneMoveOneType === 'rock'){
                if(playerTwoMoveOneType === 'scissors'){
                    winner = 'Player One';
                }
                else if(playerTwoMoveOneType === 'paper'){
                    winner = 'Player Two';
                }
            }
            else if(playerOneMoveOneType === 'scissors'){
                if(playerTwoMoveOneType === 'paper'){
                    winner = 'Player One';
                }
                else if(playerTwoMoveOneType === 'rock'){
                    winner = 'Player Two';
                }
            }
            else if(playerOneMoveOneType === 'paper'){
                if(playerTwoMoveOneType === 'rock'){
                    winner = 'Player One';
                }
                else if(playerTwoMoveOneType === 'scissors'){
                    winner = 'Player Two';
                }
            }
            break;
        case 2:
            if(playerOneMoveTwoType === playerTwoMoveTwoType){
                if(playerOneMoveTwoValue === playerTwoMoveTwoValue){
                    winner = 'Tie';
                }
                else if(playerOneMoveTwoValue > playerTwoMoveTwoValue){
                    winner = 'Player One';
                }
                else if(playerTwoMoveTwoValue > playerOneMoveTwoValue){
                    winner = 'Player Two';
                }
            }
            else if(playerOneMoveTwoType === 'rock'){
                if(playerTwoMoveTwoType === 'scissors'){
                    winner = 'Player One';
                }
                else if(playerTwoMoveTwoType === 'paper'){
                    winner = 'Player Two';
                }
            }
            else if(playerOneMoveTwoType === 'scissors'){
                if(playerTwoMoveTwoType === 'paper'){
                    winner = 'Player One';
                }
                else if(playerTwoMoveTwoType === 'rock'){
                    winner = 'Player Two';
                }
            }
            else if(playerOneMoveTwoType === 'paper'){
                if(playerTwoMoveTwoType === 'rock'){
                    winner = 'Player One';
                }
                else if(playerTwoMoveTwoType === 'scissors'){
                    winner = 'Player Two';
                }
            }
            break;

        case 3:
            if(playerOneMoveThreeType === playerTwoMoveThreeType){
                if(playerOneMoveThreeValue === playerTwoMoveThreeValue){
                    winner = 'Tie';
                }
                else if(playerOneMoveThreeValue > playerTwoMoveThreeValue){
                    winner = 'Player One';
                }
                else if(playerTwoMoveThreeValue > playerOneMoveTwoValue){
                    winner = 'Player Two';
                }
            }
            else if(playerOneMoveThreeType === 'rock'){
                if(playerTwoMoveThreeType === 'scissors'){
                    winner = 'Player One';
                }
                else if(playerTwoMoveThreeType === 'paper'){
                    winner = 'Player Two';
                }
            }
            else if(playerOneMoveThreeType === 'scissors'){
                if(playerTwoMoveThreeType === 'paper'){
                    winner = 'Player One';
                }
                else if(playerTwoMoveThreeType === 'rock'){
                    winner = 'Player Two';
                }
            }
            else if(playerOneMoveThreeType === 'paper'){
                if(playerTwoMoveThreeType === 'rock'){
                    winner = 'Player One';
                }
                else if(playerTwoMoveThreeType === 'scissors'){
                    winner = 'Player Two';
                }
            }
            break;
    }

    return winner;

};

//Should return winner of the game
const getGameWinner = () => {
    let playerOneWins = 0;
    let playerTwoWins = 0;
    let ties = 0;
    const winner1 = getRoundWinner(1);
    const winner2 = getRoundWinner(2);
    const winner3 = getRoundWinner(3);

    if(winner1 === 'Player One'){
        playerOneWins++;
    }
    else if(winner1 === 'Player Two'){
        playerTwoWins++;
    }
    else if(winner1 === 'Tie'){
        ties++;
    }

    if(winner2 === 'Player One'){
        playerOneWins++;
    }
    else if(winner2 === 'Player Two'){
        playerTwoWins++;
    }
    else if(winner2 === 'Tie'){
        ties++;
    }

    if(winner3 === 'Player One'){
        playerOneWins++;
    }
    else if(winner3 === 'Player Two'){
        playerTwoWins++;
    }
    else if(winner3 === 'Tie'){
        ties++;
    }

    if(ties + playerOneWins + playerTwoWins != 3){
        return null;
    }
    else if(playerOneWins > playerTwoWins){

        return 'Player One';
    }
    else if(playerTwoWins > playerOneWins){
        return 'Player Two';
    }
    else{
        return 'Tie';
    }


};