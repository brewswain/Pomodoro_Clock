let countdown;
let seconds = 1500;
let isBreak = true;
let isSuspend = true;
let workTime = 25;
let breakTime = 5;

let customSession = document.getElementById('mainMinutes');
let customBreak = document.getElementById('breakMinutes');
const status = document.querySelector('#titleText');
const playButton = document.querySelector('#playButton');
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
  .querySelector('#refreshButton')
  .addEventListener('click', buttonRefreshTimer);

document
  .querySelector('#customTimer')
  .addEventListener('click', buttonCustomTimer);

animationResetSubmit(); //called from form.js
function circleAnimation() {
  if (isBreak) {
    circle.style.animation = `countdown ${seconds}s linear infinite`;
  } else if (!isBreak) {
    circle.style.animation = `countdown 300s linear infinite`;
  }
}

function timer() {
  seconds--;

  let circle = document.querySelector('circle'); //routine to edit animation speed.WIP
  //circle.style.animation = `countdown ${seconds}s linear infinite`;
  if (isBreak) {
    circle.style.stroke = '#319fa7';
  } else {
  }
  animationResetSubmit();

  if (seconds == 0) {
    clearInterval(countdown);
    circle.style.stroke = '#e50914';
    alarm.currentTime = 0;
    alarm.play();
    seconds = (isBreak ? breakTime : workTime) * 60;
    isBreak = !isBreak;
    if (isBreak) {
      circle.style.animation = `countdown ${seconds}s linear infinite`;
    } else if (!isBreak) {
      circle.style.animation = `countdown 300s linear infinite`;
    }
    countdown = setInterval(timer, 1000);
  }
}

function breakTimer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  clearInterval(countdown);
  displayTimeLeft(seconds);

  animationResetSubmit();

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

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

function buttonCustomTimer() {
  workTime = customSession.value;
  breakTime = customBreak.value;
  console.log(workTime); //Submit is capturing custom timer length
  console.log(breakTime); // Submit is capturing custom break length

  //Insert Custom Code Below
  clearInterval();
  if (isBreak) {
    seconds = workTime * 60;
    console.log(workTime);
  } else {
    seconds = breakTime;
    console.log(breakTime);
  }
  circleAnimation();
  isSuspend = !isSuspend;
  if (!isSuspend) {
    countdown = setInterval(timer, 1000);
  }
}

//

//Strategy is to run countdown loop whilst using new workTime and breakTime values? Or maybe I should make a custom loop that defines seconds as the custom workTime/breakTime values * 60

function displayTimeLeft(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainderSeconds = seconds % 60;
  timerDisplay.textContent = `${minutes}:${
    remainderSeconds < 10 ? '0' : ''
  }${remainderSeconds}`;
}

function buttonStartTimer() {
  circleAnimation();

  isSuspend = !isSuspend;
  if (!isSuspend) {
    countdown = setInterval(timer, 1000);
  }
}

function buttonPauseTimer() {
  circle.style.webkitAnimationPlayState = 'paused';
  clearInterval(countdown);
  isSuspend = !isSuspend;
}

function buttonRefreshTimer() {
  circle.style.webkitAnimationPlayState = 'paused';
  animationResetSubmit();
  clearInterval(countdown);

  seconds = 1500;
  countdown = 0;
  isPaused = true;
  isSuspend = true;
}

function updateHTML() {
  displayTimeLeft(seconds);

  isBreak
    ? (status.textContent = 'Focus Period')
    : (status.textContent = 'Break Time!');
}

window.setInterval(updateHTML, 100);

document.onclick = updateHTML;
