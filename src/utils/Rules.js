export function decideWinner(playerChoice, opponentChoice) {
  if (playerChoice === opponentChoice) {
    return "draw";
  } else if (
    (playerChoice === "hand" && opponentChoice === "hand-rock") ||
    (playerChoice === "hand-rock" && opponentChoice === "hand-scissor") ||
    (playerChoice === "hand-scissor" && opponentChoice === "hand")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

export function opponentRandom() {
  const choices = ["hand-rock", "hand", "hand-scissor"];

  return choices[Math.floor(Math.random() * choices.length)];
}
