const email = document.querySelector('#email');
const fullName = document.querySelector('#fullname');
const msg = document.querySelector('#msg');
const form = document.querySelector('.contact-form');
const ErrorElement = document.querySelector('.error');
const infos = document.querySelectorAll('.wrt');

const setStorage = (data) => {
  const formData = JSON.stringify(data);
  localStorage.setItem('formData', formData);
};

const getStorage = () => {
  const data = JSON.parse(localStorage.getItem('formData'));
  return data;
};

const fillForm = (data) => {
  fullName.value = data.fullname;
  email.value = data.email;
  msg.value = data.comment;
};

form.addEventListener('submit', (e) => {
  if (email.value === email.value.toLowerCase()) {
    ErrorElement.container = '';
  } else {
    e.preventDefault();
    ErrorElement.innerHTML = 'Please, your email must be in Lower case ';
  }
});

infos.forEach((info) => {
  info.addEventListener('keyup', () => {
    const formData = {
      fullname: fullName.value,
      email: email.value,
      comment: msg.value,
    };
    setStorage(formData);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('formData')) {
    const data = getStorage(localStorage.getItem('formData'));
    fillForm(data);
  }
});
