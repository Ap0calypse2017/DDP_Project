<template>
  <div>
    <div class="flex flex-column align-items-center">
      <h2>Choose your move:</h2>
      <div class="flex xl:flex-row flex-column align-items-center justify-content-center gap-8">
      <Card class="w-9 xl:w-3" @click="evaluateGame('rock')">
        <template #title>Rock</template>
        <template #content>
          <div class="flex flex-row space-in-between align-items-center justify-content-center">
            <img src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-flat/256/Rock-Flat-icon.png" class="xl:w-6 w-full">
          </div>

        </template>
      </Card>
        <Card class="w-9 xl:w-3" @click="evaluateGame('paper')">
          <template #title>Paper</template>
          <template #content>
            <div class="flex flex-row space-in-between align-items-center justify-content-center">
              <img src="https://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/256/Document-Blank-icon.png" class="xl:w-6 w-full">
            </div>

          </template>
        </Card>
        <Card class="w-9 xl:w-3" @click="evaluateGame('scissors')">
          <template #title>Scissors</template>
          <template #content>
            <div class="flex flex-row space-in-between align-items-center justify-content-center">
              <img src="https://icons.iconarchive.com/icons/avosoft/warm-toolbar/256/cut-icon.png" class="xl:w-6 w-full">
            </div>

          </template>
        </Card>
      </div>
      <div v-if="gameResult" class="flex flex-column align-items-center justify-content-center">
        <h2>Game Result: {{ gameResult }}</h2>
        <p>Opponent chose: {{ computerChoice }}</p>
        <Button @click="resetGame">Choose Again</Button>
      </div>
    </div>

  </div>
</template>

<script>
import Card from 'primevue/card'
import Button from 'primevue/button'

export default {
  components: {
    Card,
    Button,
  },
  data() {
    return {
      gameResult: null,
      userChoice: null,
      gameChoice: null,
      computerChoice: null,
      alreadyDone: false
    };
  },
  methods: {
    evaluateGame(choice) {
      if(!this.alreadyDone) {
        this.userChoice = choice
        const options = ["rock", "paper", "scissors"];
        this.computerChoice =
            options[Math.floor(Math.random() * options.length)];
        console.log(this.userChoice, this.computerChoice);
        if (this.userChoice === this.computerChoice) {
          this.gameResult = "It's a tie!";
        } else if (
            (this.userChoice === "rock" && this.computerChoice === "scissors") ||
            (this.userChoice === "paper" && this.computerChoice === "rock") ||
            (this.userChoice === "scissors" && this.computerChoice === "paper")
        ) {
          this.alreadyDone = true
          this.gameResult = "You win!";
          this.$emit('gameResult','win');
        } else {
          this.alreadyDone = true
          this.gameResult = "You lose!";
          this.$emit('gameResult','lose')
        }

      }

    },
    resetGame() {
      this.$emit('closeGame')
    },
  },
};
</script>
