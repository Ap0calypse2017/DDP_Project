<template>
  <div class="mainCard">
    <h2>Name: {{name}} </h2>
    <Panel class="flex flex-column align-items-center justify-content-center">
      <h1>{{letters[pointer]}}</h1>
      <div class="buttonCont">
        <Button label=">>" @click="forward"></Button>
        <Button label="OK" @click="accept"></Button>
        <Button label="Delete" @click="deleteLetter"></Button>
        <Button label="<<" @click="backward"></Button>
      </div>
    </Panel>
    <Button label="Confirm" @mouseover="openDialog"></Button>
    <Dialog v-model:visible="dialogVis">
      <div>
        <div></div>
        <p>You have exceeded the maximum time exaclty:</p>
        <h2>{{(Math.random() * (58 - 1) + 1).toFixed(2) }} ms ago</h2>
        <p>Don't worry, we will use an AI to complete you sentence</p>
      </div>
    </Dialog>
    <Dialog v-model:visible="dialog2Vis">
      <h3>Welcome user:</h3>
      <h2>EGGS BENEDICT</h2>
    </Dialog>
  </div>
</template>
<script>
import Panel from 'primevue/panel'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog';
export  default {
  components: {
    Panel,
    Button,
    Dialog
  },
  data() {
    return {
      name: "",
      pointer: 0,
      dialogVis: false,
      timeAgo: null,
      dialog2Vis:false,
      alreadOpened: false,
      letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    }
  },
  methods: {
    forward() {
      this.pointer++
      if(this.pointer === 26) {
        this.pointer = 0
      }
    },
    backward() {
      this.pointer--
      if(this.pointer === -1) {
        this.pointer = 25
      }
    },

    accept() {
      this.name += this.letters[this.pointer]
    },

    deleteLetter() {
      if (this.name.length > 0) {
        this.name = this.name.slice(0, -1);
      }
    },

    openDialog() {
      if(!this.alreadOpened) {
        this.dialogVis = true;
        setTimeout(() => {
          this.dialogVis = false;
          this.dialog2Vis = true;
          this.name = "Eggs Benedict"
        }, 5000); // Close dialog after 5 seconds
        this.setTimeAgo();
        this.alreadOpened = true;
      }

    },

    setTimeAgo() {
      const now = new Date().getTime();
      const randomTime = Math.random() * (58 - 1) + 1;
      this.timeAgo = now - randomTime;
    }
  }
}
</script>
<style scoped>

.mainCard{
  display:flex;
  flex-direction:column;
  justify-items:center;
  justify-content:center;
  align-items:center;
}
.buttonCont {
  display:flex;
  flex-direction:row;
  justify-content: space-evenly;
  gap:10px;
}
</style>