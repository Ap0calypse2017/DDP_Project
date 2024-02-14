<template>
  <div class="mainContainer">
    <div class="intro">
      <h1>HUNTING FOR BAD UI</h1>
    </div>
    <main style="text-align: center">
      <h3>First all all, some information!</h3>
      <NamePicker></NamePicker>

      <h2>Phone Number:</h2>
      <div class="phoneNumberCont flex flex-column align-items-center justify-content-center">
        <span>{{ phoneNumber }}</span>
        <Slider v-model="phoneNumber" :min="0" :max="9999999999" class="w-30rem"></Slider>
      </div>
      <h2>Age</h2>
      <div class="ageCont flex flex-column align-items-center justify-content-center">
        <p>{{ age }}</p>
        <Slider v-model="age" class="w-30rem" :min="0" :max="200" />
      </div>
      <button class="submit" @click="handleSubmit">Submit</button>
    </main>
  </div>
</template>

<script>
import NamePicker from '@/components/NamePicker.vue'
import Slider from 'primevue/slider'

export default {
  components: {
    NamePicker,
    Slider
  },
  data() {
    return {
      phoneNumber: 0,
      age: 0
    }
  },
  methods: {
    handleSubmit() {
      this.$router.push('/questions')
    }
  }
}
</script>

<style scoped>
.mainContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.submit {
  margin-top: 20px;
  padding: 10px;
  width: 50%;
  background: rgb(78, 195, 129);
  color: white;
  border: none;
}
</style>
