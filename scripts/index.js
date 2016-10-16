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

function removeValidation(node) {
  setTimeout(() => {
    node.remove();
  }, 5000);
}

function submitForm(e) {
  // e.preventDefault();
  const contactForm = document.querySelector('.contact-form');
  const contactContainerNode = document.querySelector('.contact_section').querySelector('.container');
  contactForm.reset();
  const validationEl = document.createElement('p');
  validationEl.classList.add('contact-validation');
  validationEl.textContent = 'Your message has been sent.';
  contactContainerNode.appendChild(validationEl);
  removeValidation(validationEl);
}

window.onload = function() {
  const contactSubmit = document.querySelector('.submit');
  contactSubmit.addEventListener('click', submitForm);
};
