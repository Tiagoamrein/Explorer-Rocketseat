import Sound from "./sounds.js"
import { 
  buttonPlay,
  buttonStop,
  buttonAdd,
  buttonRemove,
  buttonNature,
  buttonRain,
  buttonCoffeShop,
  buttonFire,
  minutesDisplay,
  secondsDisplay, 
} from "./elements.js"
import {Timer} from "./timer.js"

let timerTimerOut
let updateMinutes;
let minutes = Number (minutesDisplay.textContent)

const timer = Timer ({minutesDisplay,secondsDisplay,timerTimerOut,minutes})

const sound = Sound()
 
function toggleAudioPlay(myAudio) {
  let isPaused = myAudio.paused
  if (isPaused) {
    myAudio.play()
  } else {
    myAudio.pause()
  }
}

buttonPlay.addEventListener('click', function(){
  timer.countdown()
  
})

buttonStop.addEventListener('click', function(){
  
  timer.reset()
  buttonFire.classList.remove('onFocus')
  buttonNature.classList.remove('onFocus')
  buttonRain.classList.remove('onFocus')
  buttonCoffeShop.classList.remove('onFocus')
  sound.rainAudio.pause()
  sound.coffeShopAudio.pause()
  sound.forestAudio.pause()
  sound.fireAudio.pause()

} )

buttonAdd.addEventListener('click', function (){
 
  timer.timerIncrement()
  console.log (minutes)
  
  
})

buttonRemove.addEventListener('click', function (){
  console.log(minutes)
  timer.deincrement()
})
buttonNature.addEventListener('click', function() {
  buttonNature.classList.toggle('onFocus')
  buttonRain.classList.remove('onFocus')
  buttonCoffeShop.classList.remove('onFocus')
  buttonFire.classList.remove('onFocus')
  toggleAudioPlay(sound.forestAudio)
  sound.rainAudio.pause()
  sound.coffeShopAudio.pause()
  sound.fireAudio.pause()
})

buttonRain.addEventListener('click', function() {
  buttonRain.classList.toggle('onFocus')
  buttonNature.classList.remove('onFocus')
  buttonCoffeShop.classList.remove('onFocus')
  buttonFire.classList.remove('onFocus')
  toggleAudioPlay(sound.rainAudio)
  sound.forestAudio.pause()
  sound.coffeShopAudio.pause()
  sound.fireAudio.pause()
})

buttonCoffeShop.addEventListener('click', function() {
  buttonCoffeShop.classList.toggle('onFocus')
  buttonNature.classList.remove('onFocus')
  buttonRain.classList.remove('onFocus')
  buttonFire.classList.remove('onFocus')
  toggleAudioPlay(sound.coffeShopAudio)
  sound.rainAudio.pause()
  sound.forestAudio.pause()
  sound.fireAudio.pause()
})

buttonFire.addEventListener('click', function() {
  buttonFire.classList.toggle('onFocus')
  buttonNature.classList.remove('onFocus')
  buttonRain.classList.remove('onFocus')
  buttonCoffeShop.classList.remove('onFocus')
  toggleAudioPlay(sound.fireAudio)
  sound.rainAudio.pause()
  sound.coffeShopAudio.pause()
  sound.forestAudio.pause()
})


