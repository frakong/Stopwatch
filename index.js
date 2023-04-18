const timer = document.querySelector(".timer");

const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");
let isTimerPaused = true;
let startTime;
let elapsedTime; //Difference between currenTime and startTime in milliseconds.
let currentTime;
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
    isTimerPaused = true;
  }
  
  timer.innerHTML = "00:00:00";
});

function updateTimer(){
  currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  timerSeconds = addLeadingZero(Math.floor(elapsedTime / 1000) % 60);
  timerMinutes = addLeadingZero(Math.floor(elapsedTime / 1000 / 60) % 60);
  timerHours = addLeadingZero(Math.floor(elapsedTime / 1000 / 60 / 60));

  function addLeadingZero(timerUnit){
    let timerUnitWithLeadingZero = "0" + timerUnit;
    return ((timerUnitWithLeadingZero.length == 2) ? timerUnitWithLeadingZero : timerUnit);
  }

  timer.innerHTML = `${timerHours}:${timerMinutes}:${timerSeconds}`;
}

