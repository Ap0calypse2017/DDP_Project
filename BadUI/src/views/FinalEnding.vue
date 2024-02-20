<template>
  <div class="mainContainer">
  </div>
  <Dialog v-model:visible="visibility" :pt="{root: { class: 'w-12 sm:w-9 md:w-6' }}">
    <div class="flex flex-row">
      <Avatar image="https://www.gamespot.com/a/uploads/screen_kubrick/1551/15511094/3388284-game%20news%20update.00_00_38_29.still164.png" class="mr-2" size="xlarge" shape="circle" /><h3>General Herres</h3>
    </div>
    <div class="dialogContainer flex flex-column justify-content-center">

      <p>Good job. The Hartz-Timor group has lost access to our nuclear arsenal</p>
      <p>Your Nation Thanks you for your service!</p>
      <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHhrdzFpOTNxZGtoMm9wd3dua2w4aDV3MmZieHNjejFsb2UwdTMxayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XClPnuZtG2yPyqTI6R/giphy.gif">
    </div>
  </Dialog>


</template>

<script>
import Dialog from 'primevue/dialog'
import Avatar from 'primevue/avatar'

export default {
  components: {
    Dialog,
    Avatar,
  },
  data() {
    return {
      visibility: true,
      countdown: 180,
    }
  }
}
</script>

<style>
body {
  background-image: url("https://img.freepik.com/premium-vector/scanning-view-interface-structure-city-skyscrapers-blue-color_115579-1213.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh; /* Set the height to 100% of the viewport height */
  margin: 0; /* Remove default body margin */
}
</style>