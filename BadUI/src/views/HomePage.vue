<template>
  <div class="mainContainer">
    <div class="intro">
      <h1>HUNTING FOR BAD UI</h1>
    </div>
    <main>
      <h3>First all all, some information!</h3>
      <NamePicker></NamePicker>
    </main>
  </div>
</template>

<script>
import NamePicker from '@/components/NamePicker.vue'

export default {
  components: {
    NamePicker
  }
}
</script>

<style scoped>
.mainContainer {
  display: flex;
  flex-direction:column;
  align-items:center;

}
</style>