const GAME_CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return GAME_CHOICES[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let choice = prompt("Chose one: Rock, Paper Scissors");
  if(choice) {
    let choiceIndex = GAME_CHOICES.indexOf(choice.toLowerCase())
    if(choiceIndex > -1) {
      return GAME_CHOICES[choiceIndex]
    } 
  }
}


function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 5;

  function playRound(humanChoice, computerChoice) {
    let msg = "";
    switch (humanChoice) {
      case "rock":
        if(computerChoice === "paper") {
          msg = "You loose! Paper covers Rock!";
          computerScore++;
        } else if (computerChoice === "scissors") {
          msg = "You win! Rock crushes Scissors!";
          humanScore++;
        } else {
          msg = "It's a tie!";
          computerScore++;
          humanScore++;
        }
        break;
      case "paper":
        if(computerChoice === "scissors") {
          msg = "You loose! Scissors cuts Paper!";
          computerScore++;
        } else if (computerChoice === "rock") {
          msg = "You win! Paper covers Rock!";
          humanScore++;
        } else {
          msg = "It's a tie!";
          computerScore++;
          humanScore++;
        }
        break;
      case "scissors":
        if(computerChoice === "rock") {
          msg = "You loose! Rock crushes Scissors!";
          computerScore++;
        } else if (computerChoice === "paper") {
          msg = "You win! Scissors cuts paper!";
          humanScore++;
        } else {
          msg = "It's a tie!";
          computerScore++;
          humanScore++;
        }
        break;
    }
    return `${msg} Your score: ${humanScore} Computer score: ${computerScore}`;
  }

  while(round > 0) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    round--;
  }

  let endGameMsg =  (humanScore > computerScore) ? "You win!" : "You lose!";
  endGameMsg += ` Your score: ${humanScore} Computer score: ${computerScore}`;
  let playAgain = confirm(`${endGameMsg} Want to play again?`);
  
  if(playAgain) {
    playGame();
  }
}

playGame();