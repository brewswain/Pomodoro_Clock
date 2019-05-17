let workTime = 25;
let breakTime = 5;

let customSession = document.getElementById('mainMinutes');
let customBreak = document.getElementById('breakMinutes');
let customSessionSeconds = workTime * 60;
let customBreakSeconds = breakTime * 60;

let circle = document.querySelector('circle');
element = document.getElementById('timerCircle');

animationResetSubmit();

function animationResetSubmit() {
  ('use strict');
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

function timer(workTime) {
  customSessionSeconds--;
  let circle = document.querySelector('circle'); //routine to edit animation speed.WIP
  circle.style.animation = `countdown ${customSessionSeconds}s linear infinite`;
  circle.style.stroke = '#319fa7';
  animationResetSubmit();

  if (customSessionSeconds < 0) {
    clearInterval(countdown);
    alarm.currentTime = 0;
    alarm.play();
    seconds = (isBreak ? breakTime : workTime) * 60;
    isBreak = !isBreak;
    if (!isBreak) {
      function timer(breakTime) {
        customBreakSeconds--;
        let circle = document.querySelector('circle'); //routine to edit animation speed.WIP
        circle.style.animation = `countdown ${customBreakSeconds}s linear infinite`;
        circle.style.stroke = '#319fa7';
        animationResetSubmit();

        if (customSessionSeconds < 0) {
          clearInterval(countdown);
          alarm.currentTime = 0;
          alarm.play();
          seconds = (isBreak ? breakTime : workTime) * 60;
          isBreak = !isBreak;
          if (!isBreak) {
            function timer() {
              seconds--;
              let circle = document.querySelector('circle'); //routine to edit animation speed.WIP
              circle.style.animation = `countdown ${seconds}s linear infinite`;
              circle.style.stroke = '#e50914';
              animationResetSubmit();

              if (seconds < 0) {
                clearInterval(countdown);
                alarm.currentTime = 0;
                alarm.play();
                seconds = (isBreak ? breakTime : workTime) * 60;
                isBreak = !isBreak;
                countdown = setInterval(timer, 1000);
              }
            }
          }
        }
        countdown = setInterval(timer, 1000);
      }
    }
  }
}

//session length
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

//break length
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

/* refactor this for custom form 
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
*/
