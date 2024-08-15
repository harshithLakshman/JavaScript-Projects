const choices=["rock","paper","scissor"];
const computerDisplay = document.getElementById("computerDisplay");
const playerDisplay=document.getElementById("playerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerScoreDisplay=document.getElementById("playerScoreDisplay");
const computerScoreDisplay=document.getElementById("computerScoreDisplay");
let computerScore=0;
let playerScore=0;


function playGame(playerChoice){
    let computerChoice=choices[Math.floor(Math.random()*3)]

    let result="";
    
    if(playerChoice===computerChoice){
        result="It's a TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
                result=(computerChoice==="paper")? "YOU LOSE!":"YOU WIN!";
                break;
            case "paper":
                result=(computerChoice==="scissor")? "YOU LOSE!":"YOU WIN!";
                break;
            case "scissor":
                result=(computerChoice==="rock")? "YOU LOSE!":"YOU WIN!";
        }
    }
    playerDisplay.textContent=`PLAYER: ${playerChoice}`;
    computerDisplay.textContent=`COMPUTER: ${computerChoice}`;

    resultDisplay.textContent=result

    switch(result){
        case "YOU WIN!":
            playerScore++;
            playerScoreDisplay.textContent=playerScore;

            break;
        case "YOU LOSE!":
            computerScore++;
            computerScoreDisplay.textContent=computerScore;


    }

}



