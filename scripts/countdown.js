let countdown;

const animation = document.querySelector('#timerCircle');
const timerDisplay = document.querySelector('.countdown-text');
const alarm = document.createElement('audio');
const rain = document.querySelector('.rain');
alarm.setAttribute(
  'src',
  'https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3'
);

//button functionality
document
  .querySelector('#playButton')
  .addEventListener('click', buttonStartTimer);
document
  .querySelector('#pauseButton')
  .addEventListener('click', buttonPauseTimer);
document
  .querySelector('#stopButton')
  .addEventListener('click', buttonStopTimer);
document
  .querySelector('#refreshButton')
  .addEventListener('click', buttonRefreshTimer);

animationResetSubmit();

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  titleText.textContent = 'Focus Period';
  clearInterval(countdown);

  let circle = document.querySelector('circle'); //routine to edit animation speed.WIP
  circle.style.animation = `countdown ${seconds}s linear infinite`;
  circle.style.stroke = '#319fa7';

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft == 0) {
      alarm.currentTime = 0;
      alarm.play();
      clearInterval(countdown);
      return;
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
  console.log(this);
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

function buttonPauseTimer() {}

function buttonStopTimer() {}

function buttonRefreshTimer() {}
