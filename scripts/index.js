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

function submitForm(e) {
  e.preventDefault();
  const contactForm = document.querySelector('.contact-form');
  console.log(contactForm.elements);
  contactForm.reset();
}

window.onload = function() {
  const contactSubmit = document.querySelector('.submit');
  contactSubmit.addEventListener('click', submitForm);
};
