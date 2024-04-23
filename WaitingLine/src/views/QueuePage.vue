<template>
<main class="flex flex-column align-items-center justify-content-center p-5">
  <ProgressSpinner strokeWidth="5"/>
  <h3>Your queue number is {{position}}/100</h3>
  <h5>Try to relax</h5>
  <Button label="Challenge the person on top of you" @click="visibleDialog=true"></Button>
  <Dialog v-model:visible="visibleDialog" class="w-6">
    <h2>The player accepted your challenge!</h2>
    <div class="mainContainer flex flex-row space-in-between align-items-center justify-content-center gap-8">

      <Card class="w-3" @click="selectGame('rps')">
        <template #title>Rock-Paper-Scissors</template>
        <template #content>
          <div class="flex flex-row space-in-between align-items-center justify-content-center">
            <img src="https://cdn-icons-png.flaticon.com/512/6851/6851302.png" class="w-10rem">
          </div>

        </template>
      </Card>
      <Card class="w-3" @click="selectGame('TaC')">
        <template #title>Toss a Coin</template>
        <template #content>
          <div class="flex flex-row space-in-between align-items-center justify-content-center">
            <img src="https://www.iconpacks.net/icons/1/free-heads-or-tails-icon-456-thumb.png" class="w-12rem">
          </div>
        </template>
      </Card>
    </div>
  </Dialog>
  <div v-if="rpfVisible" class="surface-100 text-900 w-6 p-5 mt-5">
    <Games :gameResult="gameResult" @gameResult="changePosition" @closeGame="rpfVisible=false"></Games>
  </div>
  <div v-if="tacVisible" class="flex flex-column space-in-between align-items-center justify-content-center surface-100 text-900 w-6 p-5 mt-5">
    <h2>Game Result: {{ gameResult }}</h2>
    <div v-if="resultCoinToss === 'heads'">
      <img src="https://static.thenounproject.com/png/365780-200.png">
      <p>Result of Coin Toss: {{resultCoinToss}}</p>
    </div>
    <div v-else>
      <img src="https://static.thenounproject.com/png/365781-200.png">
      <p>Result of Coin Toss: {{resultCoinToss}}</p>
    </div>
    <p>You have been assigned: {{assignedCoinFace}}</p>
    <Button @click="tacVisible=false; assignedCoinFace=null; resultCoinToss=null">Reset Game</Button>
  </div>
  <Dialog v-model:visible="challengeVisible">
    <div class="flex flex-column align-items-center justify-content-center">
      <h2>The person under you challenged you to</h2>
      <h1>{{challengedGame}}</h1>
      <h2>Do you accept?</h2>
      <div class="flex flex-row align-items-center justify-content-center gap-8">
        <Button label="Accept" style="background-color:green" @click="accept(challengedGame)"></Button>
        <Button label="Decline" style="background-color:#b30000" @click="challengeVisible=false; this.startTimer()"></Button>
      </div>

    </div>
  </Dialog>
</main>
</template>
<script>
import ProgressSpinner from 'primevue/progressspinner';
import Button from 'primevue/button';
import Dialog from "primevue/dialog";
import Card from 'primevue/card'


import Games from "@/components/Games.vue";

export default {
  components: {
    ProgressSpinner,
    Button,
    Dialog,
    Card,
    Games
  },
  data() {
    return {
      position: 54,
      visibleDialog: false,
      game: null,
      rpfVisible: false,
      tacVisible:false,
      assignedCoinFace:null,
      resultCoinToss:null,
      gameResult:null,
      challengeVisible: false,
      challengedGame: null,
    }
  },
  methods: {
    selectGame(game) {
      this.rpfVisible = false
      this.tacVisible = false
      if(game === "rps") {
        this.rpfVisible = true
        this.visibleDialog = false
      }
      if(game==="TaC"){
        this.tacVisible = true
        this.visibleDialog = false
        const options = ["heads","tails"];
        this.assignedCoinFace = options[Math.floor(Math.random() * options.length)];
        this.resultCoinToss = options[Math.floor(Math.random() * options.length)];
        if(this.assignedCoinFace == this.resultCoinToss){
          this.gameResult = "You Win!"
          this.position -=1
        }else{
          this.gameResult = "You Lost!"
          this.position +=1
        }
        this.startTimer()
      }

    },
    changePosition(gameResult){
      if(gameResult === "win"){
        this.position -=1
      }else{
        this.position +=1
      }
      this.startTimer()
    },
    startTimer() {
      setTimeout(() => {
        if(this.visibleDialog == false && this.rpfVisible == false && this.tacVisible == false){
          const options = ["Rock, Paper, Scissor","Heads or Tails"];
          this.challengedGame = options[Math.floor(Math.random() * options.length)]
          this.challengeVisible= true;
        }
      },10000)
    },
    accept(game) {
      this.challengeVisible = false;
      if(game === "Rock, Paper, Scissor") {
        this.selectGame("rps")
      } else {
        this.selectGame("TaC")
      }
    }
  },
  mounted() {
    this.startTimer()
  }
}
</script>
<style>
body {
  background-image: url("https://i.pinimg.com/originals/33/0e/fe/330efe6bc1293733b2d4f0ea3cee9d2e.gif");
  background-repeat: no-repeat;
  background-size: cover;
  color:white
}
</style>