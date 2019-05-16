('use strict');
let circle = document.querySelector('circle'); //routine to edit animation speed.WIP
element = document.getElementById('timerCircle');

animationResetSubmit();

document.mainForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const mins = this.mainMinutes.value;
  if (mins > 999) {
    alert('Please choose a lower amount of minutes(999 max).');
    return;
  }
  submitTimer(mins * 60);
  this.reset();
});

document.breakForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const mins = this.breakMinutes.value;
  if (mins > 999) {
    alert('Please choose a lower amount of minutes(999 max).');
    return;
  }
  submitBreakTimer(mins * 60);
  this.reset();
});

function animationResetSubmit() {
  element.addEventListener(
    'submit',
    function(e) {
      e.preventDefault;
      element.classList.remove('timerCircle');
      void element.offsetWidth;
      element.classList.add('timerCircle');
    },
    false
  );
}

/* refactor this for custom form */
function submitTimer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  clearInterval(countdown);
  displayTimeLeft(seconds);
  titleText.textContent = 'Focus Period';

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    let circle = document.querySelector('circle'); //routine to edit animation speed.WIP

    circle.style.animation = `countdown ${seconds}s linear infinite`;
    circle.style.stroke = '#319fa7';

    if (secondsLeft == 0) {
      clearInterval(countdown);
      alarm.currentTime = 0;
      alarm.play();
      titleText.textContent = 'Break Time!';
      submitBreakTimer(seconds);
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function submitBreakTimer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  titleText.textContent = 'Break Time!';
  circle.style.stroke = '#e50914';

  countdown = setInterval(() => {
    animationResetSubmit();
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    let circle = document.querySelector('circle'); //routine to edit animation speed.WIP

    circle.style.animation = `countdown ${seconds}s linear infinite`;
    circle.style.stroke = '#e50914';

    if (secondsLeft == 0) {
      clearInterval(countdown);
      alarm.currentTime = 0;
      alarm.play();
      titleText.textContent = 'Focus Period';
      submitTimer(seconds);
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}
