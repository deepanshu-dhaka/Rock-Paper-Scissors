console.log("Hello, World!");

function getComputerChoice() {
    // use random method to get a random number
    randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber <= 0.3) {
        return "rock";
    } else if (randomNumber > 0.3 && randomNumber <= 0.6) {
        return "paper";
    } else {
        return "scissors";
    }

}

function getHumanChoice() {
    userInput = prompt("Enter your choice: ");
    return userInput.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundNumber = 0;
    

    function playRound(humanChoice, computerChoice) {
        roundNumber += 1;

        console.log("Round Number: " + roundNumber);
        console.log("You chose: " + humanChoice);
        console.log("Computer chose: " +computerChoice);

        if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore += 1;
        } else if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore += 1;
        } else {
            console.log("Draw! Noone wins");
        }


    }
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice)
    console.log("Human-Score: " + humanScore + "         " + " Computer-Score: " +computerScore)

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice)
    console.log("Human-Score: " + humanScore + "         " + " Computer-Score: " +computerScore)

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice)
    console.log("Human-Score: " + humanScore + "         " + " Computer-Score: " +computerScore)

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice)
    console.log("Human-Score: " + humanScore + "         " + " Computer-Score: " +computerScore)

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice)
    console.log("Human-Score: " + humanScore + "         " + " Computer-Score: " +computerScore)


    if (humanScore > computerScore){
        console.log("You are the overall winner!");
    }else if(computerScore > humanScore){
        console.log("Computer is the overall winner!");
    }else{
        console.log("It's a draw!");
    }
}





playGame();




// playGame(humanChoice, computerChoice)