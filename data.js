const links = document.getElementById('mobile-menu-container');
const html = document.querySelector('html');
const closeMenu = document.querySelector('.active-close');

function menuFunction() {
  if (links.style.display === 'block') {
    links.style.display = 'none';
  } else {
    links.style.display = 'block';
    html.style.overflow = 'hidden';
  }
}

closeMenu.addEventListener('click', menuFunction);