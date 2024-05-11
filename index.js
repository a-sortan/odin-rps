const GAME_CHOICES = ["rock", "paper", "scissors"]
function getComputerChoice() {
  return GAME_CHOICES[Math.floor(Math.random() * 3)];
}