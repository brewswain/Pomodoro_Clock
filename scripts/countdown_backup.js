animationResetSubmit();
document
  .getElementById('playButton')
  .addEventListener('click', buttonStartTimer);
document
  .getElementById('pauseButton')
  .addEventListener('click', buttonPauseTimer);

let isBreak = true;
let isPaused = true;
let countdown;
seconds;
//let seconds = 1500;
let workTime = 25;
let breakTime = 5;

const now = Date.now();
const then = now + seconds * 1000;
const animation = document.querySelector('#timerCircle');
const timerDisplay = document.querySelector('.countdown-text');
const alarm = document.createElement('audio');
const rain = document.querySelector('.rain');

alarm.setAttribute(
  'src',
  'https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3'
);

/* Use this to give by default 25 minutes workflow, 5 minutes break. */
function timer(seconds) {
  clearInterval(countdown);
  displayTimeLeft(seconds);
  titleText.textContent = 'Focus Period';

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    let circle = document.querySelector('circle'); //routine to edit animation speed.WIP
    circle.style.animation = `countdown ${seconds}s linear infinite`;
    circle.style.stroke = '#319fa7';

    if (secondsLeft == 0) {
      alarm.currentTime = 0;
      alarm.play();
      clearInterval(countdown);
      titleText.textContent = 'Break Time!';
      breakTimer(seconds);
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function breakTimer(seconds) {
  clearInterval(countdown);
  displayTimeLeft(seconds);
  titleText.textContent = 'Break Time!';
  circle.style.stroke = '#e50914';

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    let circle = document.querySelector('circle');
    circle.style.animation = `countdown 300s linear infinite`;
    circle.style.stroke = '#e50914';

    if (secondsLeft == 0) {
      clearInterval(countdown);
      alarm.currentTime = 0;
      alarm.play();
      titleText.textContent = 'Focus Period';
      timer(seconds);
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? '0' : ''
  }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function buttonStartTimer() {
  const seconds = parseInt(this.dataset.time);
  clearInterval(countdown);
  isPaused = !isPaused;
  if (!isPaused) {
    countdown = setInterval(timer(seconds), 1000);
  }
}

function buttonPauseTimer() {
  if (!isPaused) {
    countdown = setInterval(countdown, 1000);
  }
}
/*time_left = time_remaining(countdown).total;
  isPaused = !isPaused;
  if (!isPaused) {
    countdown = null;
  }
  circle.style.webkitAnimationPlayState = 'paused';
}
*/
