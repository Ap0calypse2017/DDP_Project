

<template>
  <main class="flex flex-column align-items-center justify-content-center w-full h-full gap-4">
    <h1>QueueManager&#8482</h1>
    <div style="display:block">
      <h2>Enter Queue Code</h2>
      <InputOTP></InputOTP>
    </div>
    <Button label="Join queue" @click="this.$router.push('/waiting')"></Button>
  </main>
</template>
<script>
import Button from 'primevue/button'
import InputOTP from 'primevue/inputotp';

export default {
  components: {
    Button,
    InputOTP
  }
}
</script>
<style>

</style>