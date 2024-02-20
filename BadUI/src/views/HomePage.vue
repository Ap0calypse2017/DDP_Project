<template>
  <div class="mainContainer gap-2">
    <div class="popup flex flex-column align-items-center justify-content-center">
      <a href="https://www.philstar.com/opinion/2008/04/17/56610/corrupt-teachers">
        <img src="../assets/media/popups/popup1.gif" alt="Popup">
      </a>
      <a :href="updateScreen">
        <img src="https://cdn.adtidy.org/public/Adguard/Website/Images/seo/en/block_popups/giphy3.gif?mw=1360">
      </a>
    </div>
    <div class="intro flex flex-column align-items-center justify-content-center">
      <h1>HUNTING FOR BAD UI</h1>

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
    <div class="popup flex flex-column align-items-center justify-content-center">
      <a href="https://geekprank.com/fake-virus/">
        <img src="https://media3.giphy.com/media/3oz8xE94f14Su2fdTi/giphy.gif" alt="popup">
      </a>
      <a href="https://geekprank.com/fbi-warning/">
        <img src="https://i.gifer.com/7WDh.gif" alt="popup">
      </a>
    </div>
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
      age: 0,
      updateScreen: null,
      countdown: 600,
    }
  },
  mounted() {
    let OSName = 'Unknown OS'
    if (navigator.appVersion.indexOf('Win') !== -1) this.updateScreen = 'https://geekprank.com/win10-update/'
    else if (navigator.appVersion.indexOf('Mac') !== -1) this.updateScreen = 'https://geekprank.com/apple/'
    else this.updateScreen = 'https://geekprank.com/matrix-code-rain/'

    console.log(OSName)
  },
  methods: {
    handleSubmit() {
      this.$router.push('/questions')
    },

  }
}
</script>

<style>
body {
  background-color:white
}
.mainContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color:white;
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
