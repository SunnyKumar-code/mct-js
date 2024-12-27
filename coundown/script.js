const minMSB = document.getElementById("minMSB");
const minLSB = document.getElementById("minLSB");
const secMSB = document.getElementById("secMSB");
const secLSB = document.getElementById("secLSB");
const inputs = [minMSB, minLSB, secMSB, secLSB];
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
let timerInterval = null;
const getCurrentTime = () =>
  parseInt(inputs[0].value || 0) * 10 * 60 +
  parseInt(inputs[1].value || 0) * 60 +
  parseInt(inputs[2].value || 0) * 10 +
  parseInt(inputs[3].value || 0);
const updateDisplay = (time) => {
  const mins = Math.floor(time / 60);
  const secs = time % 60;
  inputs[0].value = Math.floor(mins / 10);
  inputs[1].value = mins % 10;
  inputs[2].value = Math.floor(secs / 10);
  inputs[3].value = secs % 10;
};
const toggleButtons = (isRunning) => {
  startButton.disabled = isRunning;
  stopButton.disabled = !isRunning;
};
startButton.addEventListener("click", () => {
    let time = getCurrentTime();
    if (time <= 0) return alert("Please enter a valid time!");
    timerInterval = setInterval(() => {
      if (time <= 0) {
        clearInterval(timerInterval);
        alert("Time's up!");
      } else {
        time--;
        updateDisplay(time);
      }
    }, 1000);
    toggleButtons(true);
  });
stopButton.addEventListener("click", () => clearInterval(timerInterval) || toggleButtons(false));
resetButton.addEventListener("click", () => {
    stopTimer();
    updateDisplay(getCurrentTime());
  });

updateDisplay(getCurrentTime());
