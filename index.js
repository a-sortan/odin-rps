const GAME_CHOICES = ["rock", "paper", "scissors"];
function getComputerChoice() {
  return GAME_CHOICES[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let choice = prompt("Chose one: Rock, Paper Scissors");
  let choiceIndex = GAME_CHOICES.indexOf(choice.toLowerCase())
  if(choiceIndex > -1) {
    return GAME_CHOICES[choiceIndex]
  } 
}
