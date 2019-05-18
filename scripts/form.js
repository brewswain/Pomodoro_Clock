function buttonCustomTimer() {
  workTime = customSession.value;
  breakTime = customBreak.value;
  console.log(workTime); //Submit is capturing custom timer length
  console.log(breakTime); // Submit is capturing custom break length

  //Strategy is to run countdown loop whilst using new workTime and breakTime values?
}
//
//
//
//
//
//
//
//let customSession = document.getElementById('mainMinutes');
//let customBreak = document.getElementById('breakMinutes');

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
