<template>
  <div id="particles-container"></div>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue'
import { tsParticles } from 'https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.1.0/+esm'
import { loadAll } from 'https://cdn.jsdelivr.net/npm/@tsparticles/all@3.1.0/+esm'

const particlesInstance = ref(null)

async function loadParticles(options) {
  await loadAll(tsParticles)
  await tsParticles.load({ id: 'tsparticles', options })
  particlesInstance.value = await tsParticles.load({ id: 'tsparticles', options })
}

const configs = {
  particles: {
    destroy: {
      mode: 'split',
      split: {
        count: 1,
        factor: {
          value: {
            min: 2,
            max: 4
          }
        },
        rate: {
          value: 100
        },
        particles: {
          life: {
            count: 1,
            duration: {
              value: {
                min: 2,
                max: 3
              }
            }
          },

          move: {
            speed: {
              min: 30,
              max: 50
            }
          }
        }
      }
    },
    number: {
      value: 30
    },
    color: {
      value: ['#00FF00', '#228B22', '#008000', '#006400', '#808000']
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 1
    },
    size: {
      value: {
        min: 30,
        max: 50
      }
    },
    collisions: {
      enable: true,
      mode: 'bounce'
    },
    move: {
      enable: true,
      speed: 3,
      outModes: 'bounce'
    }
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'pop'
      }
    }
  }
}

onBeforeUnmount(() => {
  // Destroy particles when the component is about to be destroyed
  if (particlesInstance.value) {
    particlesInstance.value.destroy()
  }
})

loadParticles(configs)
</script>

<style scoped>
#particles-container {
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
}
</style>
