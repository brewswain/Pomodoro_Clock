document.mainForm.addEventListener('submit', function(e) {
  ('use strict');
  let circle = document.querySelector('circle'); //routine to edit animation speed.WIP
  element = document.getElementById('timerCircle');

  // reset the transition by...

  e.preventDefault();
  const mins = this.mainMinutes.value;
  if (mins > 999) {
    alert('Please choose a lower amount of minutes(999 max).');
    return;
  }
  timer(mins * 60);
  this.reset();
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
});

document.breakForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.breakMinutes.value;
  if (mins > 999) {
    alert('Please choose a lower amount of minutes(999 max).');
    return;
  }
  timer(mins * 60);
  this.reset();
  titleText.textContent = 'Break Time!';
});
