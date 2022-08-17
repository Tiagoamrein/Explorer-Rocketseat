import { 
  countdown,
  reset,
  increaseMinutes,
  decreaseMinutes,
} from './timer.js'

import Sound from './sounds.js'

import {
  buttonPlay,
  buttonStop,
  buttonAdd,
  buttonRemove,
  buttonForest,
  buttonRain,
  buttonCoffeShop,
  buttonFire,
  buttonLightMode,
  buttonDarkMode,
  volumeForest,
  volumeRain,
  volumeCoffe,
  volumeFire,
} from './elements.js'


const sound = Sound()

function toggleAudioPlay(myAudio) {
  let isPaused = myAudio.paused
  if (isPaused) {
    myAudio.play()
  } else {
    myAudio.pause()
  }
}

buttonLightMode.addEventListener('click', function() {
  buttonLightMode.classList.add('hide')
  buttonDarkMode.classList.remove('hide')
  document.body.classList.add('dark')
})

buttonDarkMode.addEventListener('click', function() {
  buttonDarkMode.classList.add('hide')
  buttonLightMode.classList.remove('hide')
  document.body.classList.remove('dark')
})

buttonPlay.addEventListener('click', function () {
  countdown()
})

buttonStop.addEventListener('click', function () {
  reset()
})

buttonAdd.addEventListener('click', function () {
  increaseMinutes()
})

buttonRemove.addEventListener('click', function () {
  decreaseMinutes()
})

volumeForest.addEventListener('change', function() {
  sound.forestAudio.volume = this.value
})

volumeRain.addEventListener('change', function() {
  sound.rainAudio.volume = this.value
})

volumeCoffe.addEventListener('change', function() {
  sound.coffeShopAudio.volume = this.value
})

volumeFire.addEventListener('change', function() {
  sound.fireAudio.volume = this.value
})

buttonForest.addEventListener('click', function () {
  buttonForest.classList.toggle('onFocus')
  buttonRain.classList.remove('onFocus')
  buttonCoffeShop.classList.remove('onFocus')
  buttonFire.classList.remove('onFocus')
  toggleAudioPlay(sound.forestAudio)
  sound.rainAudio.pause()
  sound.coffeShopAudio.pause()
  sound.fireAudio.pause()
})

buttonRain.addEventListener('click', function () {
  buttonRain.classList.toggle('onFocus')
  buttonForest.classList.remove('onFocus')
  buttonCoffeShop.classList.remove('onFocus')
  buttonFire.classList.remove('onFocus')
  toggleAudioPlay(sound.rainAudio)
  sound.forestAudio.pause()
  sound.coffeShopAudio.pause()
  sound.fireAudio.pause()
})

buttonCoffeShop.addEventListener('click', function () {
  buttonCoffeShop.classList.toggle('onFocus')
  buttonForest.classList.remove('onFocus')
  buttonRain.classList.remove('onFocus')
  buttonFire.classList.remove('onFocus')
  toggleAudioPlay(sound.coffeShopAudio)
  sound.rainAudio.pause()
  sound.forestAudio.pause()
  sound.fireAudio.pause()
})

buttonFire.addEventListener('click', function () {
  buttonFire.classList.toggle('onFocus')
  buttonForest.classList.remove('onFocus')
  buttonRain.classList.remove('onFocus')
  buttonCoffeShop.classList.remove('onFocus')
  toggleAudioPlay(sound.fireAudio)
  sound.rainAudio.pause()
  sound.coffeShopAudio.pause()
  sound.forestAudio.pause()
})