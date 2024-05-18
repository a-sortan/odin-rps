
function getComputerChoice() {
  const GAME_CHOICES = ["rock", "paper", "scissors"];
  return GAME_CHOICES[Math.floor(Math.random() * GAME_CHOICES.length)];
}

function playGame(rounds = 5) {
  const TOTAL_ROUNDS = rounds;
  let humanScore = 0;
  let computerScore = 0;
  let round = 1;

  function updateGameMessage(message) {
    let statusElem  = document.querySelector('#game-status');
    statusElem.textContent = message;
  }

  function updateRoundMessage(message) {
    let statusElem  = document.querySelector('#round-status');
    statusElem.textContent = message;
  }

  function resetGame() {
    humanScore = 0;
    computerScore = 0;
    round = 1; 
    updateScoreElem();
  }

  function updateScoreElem() {
    document.querySelector('#human-score').textContent = humanScore;
    document.querySelector('#computer-score').textContent = computerScore;
  }

  function updateScore(humanPoints = 0, computerPoints = 0) {
    humanScore += humanPoints;
    computerScore += computerPoints;
    updateScoreElem();
  }

  function updateGame(roundMsg) {
    updateRoundMessage(roundMsg);
    if(round == TOTAL_ROUNDS) {
      let endGameMsg = 'GAME OVER! ';
      endGameMsg += (humanScore > computerScore) ?  "You win!" :
                    (humanScore === computerScore) ? "It's a tie!" :
                    "You lose!";
      endGameMsg += ` Choose one to play again`;
      updateGameMessage(endGameMsg);
    } 
    if(round == 1)  {
      updateGameMessage('');
    }
    round++;
  }

  function playRound(humanChoice, computerChoice) {
    if(round > TOTAL_ROUNDS) resetGame();
    let msg = `Round ${round}: `;
    switch (humanChoice) {
      case "rock":
        if(computerChoice === "paper") {
          msg += "You loose! Paper covers Rock!";
          updateScore(0,1);
        } else if (computerChoice === "scissors") {
          msg += "You win! Rock crushes Scissors!";
          updateScore(1,0);
        } else {
          msg += "It's a tie!";
        }
        break;
      case "paper":
        if(computerChoice === "scissors") {
          msg += "You loose! Scissors cuts Paper!";
          updateScore(0,1)
        } else if (computerChoice === "rock") {
          msg += "You win! Paper covers Rock!";
          updateScore(1,0)
        } else {
          msg += "It's a tie!";
        }
        break;
      case "scissors":
        if(computerChoice === "rock") {
          msg += "You loose! Rock crushes Scissors!";
          updateScore(0,1)
        } else if (computerChoice === "paper") {
          msg += "You win! Scissors cuts paper!";
          updateScore(1,0)
        } else {
          msg += "It's a tie!";
        }
        break;
    }
    msg += ` (Your choice: ${humanChoice} Computer's choice: ${computerChoice}) `;
    updateGame(msg);
  }

  document.querySelector('#rock').addEventListener('click', e => {playRound('rock', getComputerChoice())});
  document.querySelector('#paper').addEventListener('click', e => {playRound('paper', getComputerChoice())});
  document.querySelector('#scissors').addEventListener('click', e => {playRound('scissors', getComputerChoice())});

}

playGame();