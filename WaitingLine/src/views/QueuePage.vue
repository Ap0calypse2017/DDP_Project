<template>
<main class="flex flex-column align-items-center justify-content-center p-5">
  <ProgressSpinner/>
  <h5>Your queue number is {{position}}/100</h5>
  <Button label="Challenge the person on top of you" @click="visibleDialog=true"></Button>
  <Dialog v-model:visible="visibleDialog" class="w-6">
    <div class="mainContainer flex flex-row space-in-between align-items-center justify-content-center gap-8">
      <Card class="w-3" @click="game='RPS'">
        <template #title>Rock-Paper-Scissors</template>
        <template #content>
          <div class="flex flex-row space-in-between align-items-center justify-content-center">
            <img src="https://cdn-icons-png.flaticon.com/512/6851/6851302.png" class="w-10rem">
          </div>

        </template>
      </Card>
      <Card class="w-3" @click="game='TaC'">
        <template #title>Toss a Coin</template>
        <template #content>
          <div class="flex flex-row space-in-between align-items-center justify-content-center">
            <img src="https://www.iconpacks.net/icons/1/free-heads-or-tails-icon-456-thumb.png" class="w-12rem">
          </div>
        </template>
      </Card>
    </div>
  </Dialog>
</main>
</template>
<script>
import ProgressSpinner from 'primevue/progressspinner';
import Button from 'primevue/button';
import Dialog from "primevue/dialog";
import Card from 'primevue/card'

export default {
  components: {
    ProgressSpinner,
    Button,
    Dialog,
    Card
  },
  data() {
    return {
      position: 54,
      visibleDialog: false,
      game: null,
    }
  }
}
</script>
<style scoped>

</style>