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

function playRound(humanChoice){
    let computerChoice = getComputerChoice();

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

function validateResults(winner){
        if(winner == "computer"){
            ++computerScore;
        } else if(winner == "human"){
            ++humanScore;
        }
    
        if(computerScore == 5){
            alert("You lost! The computer has won 5 rounds")
        } else if(humanScore == 5){
            alert("Congratulations, you are a winner!. You have won 5 rounds")
        }
    }


   
const playerOptions = document.querySelectorAll("button");
const humanScoreCounter = document.querySelector("#human");
const computerScoreCounter = document.querySelector("#computer");


let humanScore = 0;
let computerScore = 0;





playerOptions.forEach((button) => {
    button.addEventListener("click", () => {
        event.preventDefault();
        const userInput = button.id;
        const winner = playRound(userInput);
        validateResults(winner);

     humanScoreCounter.textContent = "Human score: " + humanScore;
     computerScoreCounter.textContent = "Computer Score: " + computerScore;
    }); 
});


                        


