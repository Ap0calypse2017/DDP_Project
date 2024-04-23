<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main class="flex flex-column align-items-center justify-content-center w-full h-full">
    <h1>TheAmazingSite&#8482</h1>
    <Button label="Join queue" @click="this.$router.push('/waiting')"></Button>
  </main>
</template>
<script>
import Button from 'primevue/button'

export default {
  components: {
    Button
  }
}
</script>
<style>

</style>