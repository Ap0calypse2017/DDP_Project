<template>
  <button v-if="questionNum == 3" class="submitBtnTopLeft" @click="checkAnswer">Submit</button>
  <div class="mainContainer">
    <particles-container />
    <div class="countdown-container">
      <h2>Time Remaining:</h2>
      <div id="countdown"></div>
    </div>
    <h1 v-if="questionNum < 5" class="score">Score:{{ scoreDisplay[score] }}</h1>
    <div v-if="questionNum == 5" class="tryAgainContainer">
      {{ this.$router.push('ending') }}
    </div>
    <div
      v-if="questionNum < 5"
      :class="{ questionBox: true, 'scrollable-content': questionNum === 4 }"
      :style="{ height: questionNum == 4 ? '30vh' : '' }"
    >
      <h1>Question: {{ question[questionNum] }}</h1>
      <h2>
        Link:<a :href="links[questionNum]" target="_blank">{{ links[questionNum] }}</a>
      </h2>
      <div>
        <input v-model="userAnswer" class="answer" type="text" name="" id="" />
      </div>
      <button v-if="questionNum == 0" class="submitBtn" @click="checkAnswer">Submit</button>
      <a v-if="questionNum == 1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laboriosam delectus
        reprehenderit veritatis expedita, accusantium molestiae animi molestias, aspernatur nulla
        modi odit facere cum laudantium <a @click="checkAnswer">submit</a> libero earum harum
        soluta! Asperiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quae vel
        ut necessitatibus, veritatis distinctio exercitationem optio, facilis natus vero at iure,
        corrupti rerum iste maxime eum minus? Incidunt, sapiente.
      </a>
      <button v-if="questionNum == 2" class="submitBtnTransparent" @click="checkAnswer">
        Submit
      </button>
      <button v-if="questionNum == 4" class="submitBtnBtm" @click="checkAnswer">Submit</button>
    </div>
  </div>
</template>

<script>
import ParticlesContainer from '@/components/ParticlesContainer.vue'
export default {
  name: 'QuestionsAnswers',
  components: {
    ParticlesContainer
  },
  data() {
    return {
      question: [
        'What is the price of R2D2 Projector?',
        'What is the type of fuel of a Toyota Aygo X?',
        'Who last edited the "A message from Communications" box?',
        'In what year did the S.V. Woods sunk?',
        'In the travel report for Hanyang University Autumn 2019 (II), courses were full within what?'
      ],
      links: [
        'https://arngren.net/',
        'https://www.lingscars.com/personal-car-leasing/audi/q4-e-tron-estate/4380662-150kW-40-82kWh-Sport-(Leather)-(204bhp)-Estate-5dr-Electric-Automatic',
        'https://www.art.yale.edu',
        'http://www.irishwrecksonline.net/',
        'https://itustudent.itu.dk/'
      ],
      answer: ['299', 'Petrol', 'Lindsey Mancini', '1827', '4-5 seconds'],
      scoreDisplay: [0, 1, 'II', '三', 'Cuatro', 'Cinque'],
      score: 0,
      questionNum: 0,
      userAnswer: '',
      countdown: 600
    }
  },
  mounted() {
    if (!sessionStorage.getItem('isReloaded')) {
      sessionStorage.setItem('isReloaded', true)
      location.reload()
    }
    this.startCountdown()
  },
  methods: {
    checkAnswer() {
      const correctAnswer = this.answer[this.questionNum]
      console.log(correctAnswer)
      if (!isNaN(correctAnswer)) {
        parseInt(this.userAnswer)
      }

      if (this.userAnswer == correctAnswer) {
        if (this.questionNum != this.answer.length) {
          this.score++
        }
        this.questionNum++

        this.userAnswer = ''
      } else {
        alert('Incorrect answer! Try again.')
      }
    },
    resetQuiz() {
      this.questionNum = 0
      this.score = 0
      this.$router.push('/')
    },
    startCountdown() {
      this.updateCountdown()
      this.countdownInterval = setInterval(() => {
        this.countdown--
        this.updateCountdown()

        if (this.countdown <= 0) {
          clearInterval(this.countdownInterval)
          // Handle what should happen when the countdown reaches zero
          this.handleCountdownEnd()
        }
      }, 1000) // Update every second
    },

    updateCountdown() {
      const minutes = Math.floor(this.countdown / 60)
      const seconds = this.countdown % 60
      document.getElementById('countdown').innerHTML =
        `${this.padNumber(minutes)}:${this.padNumber(seconds)}`
    },

    padNumber(number) {
      return number.toString().padStart(2, '0')
    },

    handleCountdownEnd() {
      // Perform actions when the countdown reaches zero
      alert('Time is up!')
    }
  }
}
</script>

<style>
#countdown {
  font-size: 2em;
  text-align: center;
  z-index: 1;
}
.countdown-container {
  z-index: 1;
  margin-bottom: 20px;
}
.mainContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  z-index: 1;
}
.tryAgainContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 1;
}
.tryBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 30%;
  background: rgb(78, 195, 129);
  color: white;
  border: none;
}
.submitBtn {
  padding: 10px;
  width: 50%;
  background: rgb(78, 195, 129);
  color: white;
  border: none;
}
.submitBtnTransparent {
  padding: 10px;
  width: 50%;
  background: transparent;
  color: white;
  border: none;
}
.submitBtnBtm {
  margin-top: 5000px;
  padding: 10px;
  width: 50%;
  background: rgb(78, 195, 129);
  color: white;
  border: none;
}
.questionBox {
  border: 1px solid black;
  padding: 30px;
  width: 50%;
  text-align: center;
  position: relative;
  background-color: white;
}
.answer {
  padding: 10px;
  width: 80%;
  margin: 10px 0px;
}
.score {
  text-align: center;
  z-index: 1;
  margin-bottom: 20px;
}
.scrollable-content {
  max-height: 100vh;
  overflow-y: auto;
}
</style>
