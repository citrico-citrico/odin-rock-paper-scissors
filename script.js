function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice == 0){
        return "rock";
    }
    else if(computerChoice == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    const humanChoice = prompt("Input your choice ");
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice == computerChoice){
        alert("Tie! You both chose " + computerChoice)
    } else if ((humanChoice == "rock" && computerChoice == "paper") || 
    (humanChoice == "paper" && computerChoice == "scissors")||
    (humanChoice == "scissors" && computerChoice == "rock")){
        alert("You lose! " + computerChoice + " beats " + humanChoice);
        return "computer";
    } else {
        alert("You win! " + humanChoice + " beats " + computerChoice)
        return "human";
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        let roundWinner = playRound(humanSelection, computerSelection);
        if(roundWinner == "computer"){
            ++computerScore;
        } else if(roundWinner == "human"){
            ++humanScore;
        }
        console.log("Your Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
    
    if(humanScore > computerScore){
            console.log("You win!");
        } else if (humanScore < computerScore){
            console.log("The computer wins!");
        } else {
            console.log("Its a tie!");
        }

}

playGame();



