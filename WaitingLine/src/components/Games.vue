<template>
  <div>
    <h1>Choose a game to play:</h1>
    <div>
      <button @click="playGame('rock-paper-scissors')">
        Rock, Paper, Scissors
      </button>
      <button @click="playGame('other-game')">Other Game</button>
    </div>
    <div v-if="gameChoice == 'rock-paper-scissors'">
      <h2>Choose your move:</h2>
      <button @click="userChoice = 'rock' && evaluateGame()">Rock</button>
      <button @click="userChoice = 'paper' && evaluateGame()">Paper</button>
      <button @click="userChoice = 'scissors' && evaluateGame()">
        Scissors
      </button>
    </div>
    <div v-if="gameResult">
      <h2>Game Result: {{ gameResult }}</h2>
      <button @click="resetGame">Play Again</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameResult: null,
      userChoice: null,
      gameChoice: null,
      computerChoice: null,
    };
  },
  methods: {
    playGame(game) {
      // Implement game logic here
      if (game === "rock-paper-scissors") {
        this.gameChoice = game;
        const options = ["rock", "paper", "scissors"];
        this.computerChoice =
          options[Math.floor(Math.random() * options.length)];
      }
    },
    evaluateGame() {
      if (this.userChoice === this.computerChoice) {
        this.gameResult = "It's a tie!";
      } else if (
        (this.userChoice === "rock" && this.computerChoice === "scissors") ||
        (this.userChoice === "paper" && this.computerChoice === "rock") ||
        (this.userChoice === "scissors" && this.computerChoice === "paper")
      ) {
        this.gameResult = "You win!";
      } else {
        this.gameResult = "You lose!";
      }
    },
    resetGame() {
      this.gameResult = null;
      this.userChoice = null;
      this.gameChoice = null;
      this.computerChoice = null;
    },
  },
};
</script>
