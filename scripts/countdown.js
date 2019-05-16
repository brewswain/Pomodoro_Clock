document
  .getElementById('play-button')
  .addEventListener('click', buttonStartTimer);

//Reset Animation for circle
('use strict');
let circle = document.querySelector('circle'); //routine to edit animation speed.WIP
element = document.getElementById('timerCircle');

// reset the transition by...
element.addEventListener(
  'click',
  function(e) {
    e.preventDefault;

    // -> removing the class
    element.classList.remove('timerCircle');

    //-> triggering reflow /* The actual magic */
    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
    // element.offsetWidth = element.offsetWidth;
    // Do this instead:
    void element.offsetWidth;

    // -> and re-adding the class
    element.classList.add('timerCircle');
  },
  false
);

//Countdown timer funcitonality
let countdown;
let animation = document.querySelector('#timerCircle');
const timerDisplay = document.querySelector('.countdown-text');

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    circle.style.animation = `countdown ${seconds}s `;

    if (secondsLeft < 0) {
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

  timerDisplay.textContent = display;
}

function buttonStartTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

function pauseCountdown() {
  clearInterval(id);
  id = true;
  currentTime = testPom;
}
