const links = document.getElementById('mobile-menu-container');
function menuFunction() {
  if (links.style.display === 'block') {
    links.style.display = 'none';
  } else {
    links.style.display = 'block';
  }
}

document.querySelector('.active-close').addEventListener('click', menuFunction);

if (links.style.display === 'block') {
  document.querySelector('.ellipse-three').style.display = 'block';
  document.querySelector('.ellipse-four').style.display = 'block';
} else {
  document.querySelector('.ellipse-three').style.display = 'none';
  document.querySelector('.ellipse-four').style.display = 'none';
}