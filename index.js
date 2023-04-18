const timer = document.querySelector(".timer");

const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");
let isTimerPaused = true;
let startTime;
let elapsedTime;
let timerHours = 0, timerMinutes = 0, timerSeconds = 0;
let currentTimerId;

startButton.addEventListener("click", () => {
  if (isTimerPaused){
    isTimerPaused = false;
    startTime = Date.now();
    currentTimerId = setInterval(updateTimer, 100);
  }
});
pauseButton.addEventListener("click", () => {
  if (!isTimerPaused){
    isTimerPaused = true;
    clearInterval(currentTimerId);
  }
});
resetButton.addEventListener("click", () => {
  if (!isTimerPaused){
    clearInterval(currentTimerId);
  }
  startTime = 0;
  elapsedTime = 0;
  updateTimer();
});

function updateTimer(){
  
}

