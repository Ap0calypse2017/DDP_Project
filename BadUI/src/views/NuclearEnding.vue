<template>
  <div class="mainContainer">
    <div class="countdown-container surface-section p-3 border-round mb-5">
      <h2>Time Remaining:</h2>
      <div id="countdown"></div>
    </div>
    <Terminal
      welcomeMessage="OMEGA clearance confirmed"
      prompt="secure-terminal-HS2607 $"
      aria-label="PrimeVue Terminal Service"
      class="w-5 surface-800 text-green-500"
    />
  </div>
  <Dialog v-model:visible="visibility" :pt="{root: { class: 'w-12 sm:w-9 md:w-6' }}">
    <div class="flex flex-row">
      <Avatar image="https://www.gamespot.com/a/uploads/screen_kubrick/1551/15511094/3388284-game%20news%20update.00_00_38_29.still164.png" class="mr-2" size="xlarge" shape="circle" /><h3>General Herres</h3>
    </div>
    <div class="dialogContainer flex flex-column justify-content-center">

      <p>Good job. The Omega clearance has been retrieved.</p>
      <p>Unfortunately, Hartz-Timor has caught the infiltration in the system and decided to launch the attack in three minutes from now.</p>
      <p>We have no time to install the clearance into our machines, so you will have to stop the launch by yourself.</p>
      <p>You will obtain access to a terminal. It should contain all the information to exclude Hartz-Timor from our systems. Type START to begin</p>
      <p>Good luck, the entire nation counts on you.</p>
    </div>
  </Dialog>

  <Dialog v-model:visible="visibility_end" :pt="{root: { class: 'w-12 sm:w-9 md:w-6' }}">
    <div class="flex flex-row">
      <Avatar image="https://www.gamespot.com/a/uploads/screen_kubrick/1551/15511094/3388284-game%20news%20update.00_00_38_29.still164.png" class="mr-2" size="xlarge" shape="circle" /><h3>General Herres</h3>
    </div>
    <div class="dialogContainer flex flex-column justify-content-center">

      <p>Good job. The Hartz-Timor group has lost access to our nuclear arsenal</p>
      <p>Your Nation Thanks you for your service!</p>
    </div>
  </Dialog>
</template>

<script>
import Dialog from 'primevue/dialog'
import Avatar from 'primevue/avatar'
import Terminal from 'primevue/terminal';
import TerminalService from 'primevue/terminalservice'

export default {
  components: {
    Dialog,
    Avatar,
    Terminal,
    TerminalService,
  },
  data() {
    return {
      visibility: true,
      visibility_end: false,
      countdown: 180,
    }
  },
  mounted() {
    this.startCountdown()
    TerminalService.on('command', this.commandHandler);
  },
  methods: {
    startCountdown() {
      this.updateCountdown();
      this.countdownInterval = setInterval(() => {
        this.countdown--;
        this.updateCountdown();

        if (this.countdown <= 0) {
          clearInterval(this.countdownInterval);
          // Handle what should happen when the countdown reaches zero
          this.handleCountdownEnd();
        }
      }, 1000); // Update every second
    },

    updateCountdown() {
      const minutes = Math.floor(this.countdown / 60);
      const seconds = this.countdown % 60;
      document.getElementById('countdown').innerHTML = `${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
    },

    padNumber(number) {
      return number.toString().padStart(2, '0');
    },

    handleCountdownEnd() {
      // Perform actions when the countdown reaches zero
      alert('Time is up!');
    },

    commandHandler(text) {
      let response;
      let argsIndex = text.indexOf(' ');
      let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

      switch(command) {
        case "START":
          response = 'List of allowed commands:\n ' +
            '- ProgramNGGYU\n' +
            '- NuclearAccessModule\n' +
            '- SellInformationToURSS\n' +
            '- {PLACEHOLDER[3]: EXIT_ERROR_CODE(4833922).overstim.ACT}\n'
          break;

        case "ProgramNGGYU":
          window.location = "https://youtu.be/dQw4w9WgXcQ"
          break;

        case "SellInformationToURSS":
          response = 'SELLING INFORMATION IN PROGRESS'
          alert("SO YOU ARE A COMMUNIST")
          window.location = "https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2017/07/GettyImages-541320861-1024x683.jpg"
          break;

        case "NuclearAccessModule":
          response = 'Nuclear Module accessed. Do you want to shot the system down? [Y/N]'
          break;

        case "Y":
          response = 'Nuclear Module Shutdown completed'
          this.visibility_end = true
          console.log(this.visibility_end)
          this.$router.push("/normal_ending")
          break;
        default:
          response = "Unknown command: " + command;
      }

      TerminalService.emit('response', response);

    }
  },
  beforeDestroy() {
    TerminalService.off('command', this.commandHandler);
  },
  beforeUnmount() {
    TerminalService.off('command', this.commandHandler);
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