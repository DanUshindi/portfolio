const email = document.querySelector('.email');
const form = document.querySelector('.contact-form');
const ErrorElement = document.querySelector('.error');

form.addEventListener('submit', (e) => {
  if (email.value === email.value.toLowerCase() || ((email.value === email.value.toLowerCase()) && (email.value.charAt(0) !== (/^[0-9+#-]*$/)))) {
    ErrorElement.container = '';
  } else {
    e.preventDefault();
    ErrorElement.innerHTML = 'Please, your email must be in Lower case ';
  }
});