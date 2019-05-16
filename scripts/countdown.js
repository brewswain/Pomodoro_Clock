document
  .getElementById('play-button')
  .addEventListener('click', buttonStartTimer);

let countdown;
let animation = document.querySelector('#timerCircle');
const timerDisplay = document.querySelector('.countdown-text');

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

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    let circle = document.querySelector('circle'); //routine to edit animation speed.WIP

    circle.style.animation = `countdown ${seconds}s linear`;

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
  document.title = display;
  timerDisplay.textContent = display;
}

function buttonStartTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

//Animation sync to timer
/*
let style = document.createElement('style');
style.innerHTML =
	'svg circle {' +
		animation: countdown `{seconds}`s linear infinite forwards; +
    '}';
    

// Get the first script tag
var ref = document.querySelector('script');

// Insert our new styles before the first script tag
ref.parentNode.insertBefore(style, ref);
*/

function pauseCountdown() {
  clearInterval(id);
  id = true;
  currentTime = testPom;
}
