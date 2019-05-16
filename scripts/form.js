let circle = document.querySelector('circle'); //routine to edit animation speed.WIP
element = document.getElementById('timerCircle');
('use strict');
// reset the transition by...
document.mainForm.addEventListener('submit', function(e) {
  e.preventDefault();
  animationResetSubmit();
  const mins = this.mainMinutes.value;
  if (mins > 999) {
    alert('Please choose a lower amount of minutes(999 max).');
    return;
  }
  timer(mins * 60);
  this.reset();
});

document.breakForm.addEventListener('submit', function(e) {
  e.preventDefault();
  animationResetSubmit();
  const mins = this.breakMinutes.value;
  if (mins > 999) {
    alert('Please choose a lower amount of minutes(999 max).');
    return;
  }
  timer(mins * 60);
  this.reset();
  titleText.textContent = 'Break Time!';
});

function animationResetSubmit() {
  element.addEventListener(
    'submit',
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
}
