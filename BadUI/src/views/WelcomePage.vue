<template>
  <div class="mainContainer">
    <img  class="w-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Seal_of_the_United_States_Department_of_Homeland_Security.svg/2048px-Seal_of_the_United_States_Department_of_Homeland_Security.svg.png" alt="seal">
    <Button class="mt-8 bg-blue-400 p-4 w-1" label="BEGIN" @click="this.$router.push('/start');"></Button>
  </div>
  <Dialog v-model:visible="visibility" :pt="{root: { class: 'w-12 sm:w-9 md:w-6' }}">
    <div class="flex flex-row">
    <Avatar image="https://www.gamespot.com/a/uploads/screen_kubrick/1551/15511094/3388284-game%20news%20update.00_00_38_29.still164.png" class="mr-2" size="xlarge" shape="circle" /><h3>General Herres</h3>
    </div>
    <div class="dialogContainer flex flex-column justify-content-center">

    <p>Welcome.</p>
      <p>I am General Aaron Herres from the US Department of Homeland Security.</p>
      <p>The time we have is limited, so let's be quick</p>
      <p>Due to a hacker attack from the group Hartz-Timor, we have lose control of all the nuclear weapons of the nation. This hacker has started a countdown for a launch against all the major cities of the world in thirty minutes.</p>
      <p>The only way to stop it is using the OMEGA clearance, created in 1999 to obtain master control and prevent the attack. This authorization is so old that not even the hacker found it.</p>
      <p>Unfortunately, the code to obtain this Authorization has been shattered in five parts and hidden inside five websites as random information</p>
      <p>To make difficult for spies to obtain the code, the system is organized with a terrible UI. We thought it was a good idea back in the '90s, but today it has no helped our explorers</p>
      <p>We are contacting you for your exceptional abilities to navigate in websites. Our best engineers tried to recover the password but they got lost inside the sites. You are our only hope</p>
      <p>Once you will click "BEGIN" you will enter inside the navigation system that will guide you to retrieve the password. Be quick, you will have ten minutes before the system shutdown. </p>
      <p>Find the answers to the questions. We will enter each part of the code in the system in real time</p>
    </div>
  </Dialog>
</template>

<script>
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Avatar from 'primevue/avatar'

export default {
  components: {
    Button,
    Dialog,
    Avatar
  },
  data() {
    return {
      visibility: true,
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