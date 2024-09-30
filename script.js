function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    return choices[Math.random().toFixed(1)*10 % 3];
}

const getHumanChoice = () => {
    return prompt("Nhap gia tri ban chon[rock/paper/scissors]: ");
    

}

const playRound = function (humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice();
    console.log("Human: ",humanChoice,"Computer: ",computerChoice);
    if(humanChoice === "rock") {
        if(computerChoice === "scissors")
        {
            humanScore += 1;
        console.log("success");
        }
        else if (computerChoice === "paper"){
            computerScore += 1;
        }
        
    }
    else if(humanChoice === "paper") {
        if(computerChoice === "rock")
        {
            humanScore += 1;
        console.log("success");
        }
        else if (computerChoice === "scissors"){
            computerScore += 1;
        }
        
    }
    else if(humanChoice === "scissors") {
        if(computerChoice === "paper")
        {
            humanScore += 1;
        console.log("success");
        }
        else if (computerChoice === "rock"){
            computerScore += 1;
        }
        
    }

    
}
function playGame(counter) {
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    while(counter > 0)
    {
    playRound(humanSelection,computerSelection);
    console.log(`Computer's score:  ${computerScore} and Human's score: ${humanScore}`);
    counter -= 1;
    }
}
let humanScore = 0;
let computerScore = 0;
playGame(5);

