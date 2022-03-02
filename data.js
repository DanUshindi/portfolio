const links = document.getElementById('mobile-menu-container');
const html = document.querySelector('html');
const closeMenu = document.querySelector('.active-close');
const closePop = document.querySelector('.vide');

const bigContainner = document.querySelector('.big-container-doc');

function menuFunction() {
  if (links.style.display === 'block') {
    links.style.display = 'none';
  } else {
    links.style.display = 'block';
    html.style.overflow = 'hidden';
  }
}

closeMenu.addEventListener('click', menuFunction);

function togglepopup() {
  document.querySelector('.popup').classList.toggle('active');

  bigContainner.classList.toggle('active');

  closePop.classList.remove('active');

  if (bigContainner.style.display === 'none') {
    html.style.overflow = 'hidden';
  } else {
    html.style.overflow = 'scroll';
  }
}
closePop.addEventListener('click', togglepopup);
