const workButton = document.querySelector('#main_button');

const bouncingButton = setInterval(() => {
  workButton.style.bottom = '1.5em';
  setTimeout(() => {
    workButton.style.bottom = '2em';
  }, 150);
  setTimeout(() => {
    workButton.style.bottom = '1.5em';
  }, 300);
  setTimeout(() => {
    workButton.style.bottom = '2em';
  }, 450);
}, 3000);
