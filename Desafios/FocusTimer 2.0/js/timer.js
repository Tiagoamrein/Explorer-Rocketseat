 export function Timer ({minutesDisplay,secondsDisplay,timerTimerOut,minutes}){
let updateMinutes;

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function reset() {
  updateDisplay(minutes, 0)
  clearTimeout(timerTimerOut)
}

function countdown (){
  timerTimerOut = setTimeout(function (){
    let seconds = Number (secondsDisplay.textContent)
    let minutes = Number (minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0
    updateDisplay (minutes, 0)
    if (seconds<=0){
      
      seconds = 60
      --minutes
      
    }
    if (isFinished){
      return 
      
    }
    updateDisplay(minutes, String(seconds - 1))
countdown ()
  },1000)
  
}

function updateDefault(minutes) {
  updateMinutes = minutes
}

function timerIncrement () {
  
  minutes = minutes < 60 ? Number(minutes) + 5 : (minutes = 5)
  minutesDisplay.textContent = minutes  
  updateDisplay(minutes,0)
  updateDefault(minutes)
}

function deincrement (){
  minutes = minutes > 5 ? Number(minutes) - 5 : (minutes = 60)
  minutesDisplay.textContent = minutes
  updateDisplay (minutes, 0)
}
return {
  countdown,
  updateDefault,
  timerIncrement,
  deincrement,
  updateDisplay,
  reset
}

}