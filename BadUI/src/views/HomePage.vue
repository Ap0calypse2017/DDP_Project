<template>
  <div class="mainContainer gap-2">
    <div class="popup flex flex-column align-items-center justify-content-center">
      <a href="https://www.wikihow.com/Bribe-Someone">
        <img src="../assets/media/popups/popup1.gif" alt="Popup">
      </a>
      <a :href="updateScreen">
        <img src="https://cdn.adtidy.org/public/Adguard/Website/Images/seo/en/block_popups/giphy3.gif?mw=1360">
      </a>
    </div>
    <div class="intro flex flex-column align-items-center justify-content-center">

      <main style="text-align: center" class="flex flex-column align-items-center justify-content-center">
        <h1>AUTENTIFICATION NEEDED</h1>
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
        <div class="captcha flex flex-row mt-6 w-5 pl-2 pt-2 pb-2 align-items-center gap-4 border-round" style="border:solid 1px #cecece">
          <Checkbox v-model="checkedCommi" :binary="true" @click="checked=true"/>
          <p class="text-xs">I am not a Communist</p>
          <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/google_recaptcha_logo_icon_170062.png" class="w-2">
        </div>
        <Button class="submit" @click="handleSubmit">Begin</Button>
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
    <Dialog v-model:visible="checked" :pt="{icons: {style:'display:none'}}">
      <div class="captcha-images">
        <h1>Select all the images that represents something American</h1>
        <div class="grid-container">
          <img v-for="(image, index) in captchaImages" :key="index" :src="image.src" class="border-round" style="width:10rem; height:10rem;" :class="{ 'bw': checkedImages[index] }" @click="toggleImage(index)">
        </div>
      </div>
      <Button label="DONE" class="mt-5 bg-blue-600" :disabled="!(checkedImages[0] && checkedImages[1] && checkedImages[4] && checkedImages[7] && checkedImages[6])" @click="checked=false; checkedCommi=true"></Button>
    </Dialog>
  </div>
</template>

<script>
import NamePicker from '@/components/NamePicker.vue'
import Slider from 'primevue/slider'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'

export default {
  components: {
    NamePicker,
    Slider,
    Checkbox,
    Dialog,
    Button
  },
  data() {
    return {
      phoneNumber: 0,
      age: 0,
      updateScreen: null,
      countdown: 600,
      checked:false,
      checkedCommi: false,
      captchaImages: [
        { src: 'https://www.hdwallpapers.in/download/dollars_of_america_hd_money-1920x1080.jpg'},
        {src: 'https://s3-us-west-2.amazonaws.com/s3-wagtail.biolgicaldiversity.org/images/RSBaldEagle_RobinSilver_FPWC_8_HIGHRES-scr.max-800x800.jpg'},
        {src: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Karl_Marx_%28colored%29.png'},
        {src: 'https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png'},
        {src: 'https://enjoyorangecounty.com/wp-content/uploads/2023/12/about-the-super-bowl.jpg'},
        {src: 'https://hishamsrevisionblog.files.wordpress.com/2016/03/vintage-russian-poster-a-spectre-is-haunting-europe-lenin-1920-14271-p.jpg?w=640'},
        {src: 'https://cdn.britannica.com/82/183382-050-D832EC3A/Detail-head-crown-Statue-of-Liberty-New.jpg'},
        {src: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Uncle_Sam_%28pointing_finger%29.png'},
        {src: 'https://smapse.com/storage/2021/11/top-5-stereotypes-about-russia-that-are-not-relevant-today-smapse-image.png'},
      ],
      checkedImages: Array(9).fill(false),
    }
  },
  mounted() {
    let OSName = 'Unknown OS'
    if (navigator.appVersion.indexOf('Win') !== -1) this.updateScreen = 'https://geekprank.com/win10-update/'
    else if (navigator.appVersion.indexOf('Mac') !== -1) this.updateScreen = 'https://geekprank.com/apple/'
    else this.updateScreen = 'https://geekprank.com/matrix-code-rain/'
    if (sessionStorage.getItem('isReloaded')) {
      sessionStorage.removeItem('isReloaded', true)
    }
    console.log(OSName)
  },
  methods: {
    handleSubmit() {
      if(this.checkedCommi) {
        this.$router.push('/questions')
      }
      else{
        alert("You are a communist")
        window.location = "https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2017/07/GettyImages-541320861-1024x683.jpg"
      }

    },
    toggleImage(index) {
      this.checkedImages[index] = !this.checkedImages[index]
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
.captcha-images img.bw {
  filter: grayscale(100%);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
