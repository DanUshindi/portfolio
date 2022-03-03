const links = document.getElementById('mobile-menu-container');
const html = document.querySelector('html');
const closeMenu = document.querySelector('.active-close');

function menuFunction() {
  if (links.style.display === 'block') {
    links.style.display = 'none';
    html.style.overflow = 'scroll';
  } else {
    links.style.display = 'block';
    html.style.overflow = 'hidden';
  }
}

closeMenu.addEventListener('click', menuFunction);

const popupWindow = [{
  name: 1,
  title: 'Project-one',
  image: './assets/images/project-one.png',
  description: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`,
  technologies: ['html', 'javascript', 'css'],
  live: 'link',
  source: 'source',
}, {
  name: 2,
  title: 'Project-one',
  image: './assets/images/calculator.png',
  description: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`,
  technologies: ['html', 'javascript', 'css'],
  live: 'link',
  source: 'source',
}, {
  name: 3,
  title: 'Project-one',
  image: './assets/images/calculator.png',
  description: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`,
  technologies: ['html', 'javascript', 'css'],
  live: 'link',
  source: 'source',
}];
const btn1 = document.querySelector('.popup-button1');
const btn2 = document.querySelector('.popup-button2');
const btn3 = document.querySelector('.popup-button3');

const show1 = document.querySelector('.popup');
const show2 = document.querySelector('.popup');
const show3 = document.querySelector('.popup');

const parrent = document.querySelector('.big-container-doc');

function popupShown(btn, show, popupWindow) {
  btn.addEventListener('click', () => {
    show.classList.add('popup-active');
    parrent.style.display = 'none';

    show.style.display = 'block';
    show.innerHTML = `<div>
    <div class="ellipse-one"></div>
    <div class="ellipse-two"></div>
    <div class="popup-overflow">
      <div class="popup-box">
        <div class="overlay"></div>
        <div class="column">
          <div class="popup-header"><h3 class="popup-title">Base Apparel coming soon page </h3> <div id="closePopup" class="vide" >&times;</div></div>
          <div class="image-container-popup"><img class="popupimage" src = "${popupWindow[0].image}"></div>
        </div>
        <div class="pop-container">
          <p class="about-popup"> A daily selection of privately
            personalized reads; no accounts or sign-ups
            required. has been the industry's standard
            dummy text ever since the 1500s, when an
            unknown printer took a standard dummy
            text.</p>
          <ul class="pop-tools-list  ">
            <li class="tools-item right-border">
              <a href="https://github.com/DanUshindi/Base/blob/main/style.css">css</a>
            </li>
            <li class="tools-item right-border ">
              <a href="https://github.com/DanUshindi/Base/blob/main/index.html">html</a>
            </li>
            <li class="lile right-border ">
              <a href="#">bootstrap</a>
            </li>
            <li class="tools-item ">
              <a href="#">Ruby</a>
            </li>
          </ul>
          <div class="pop-fnl-btn">
            <button type="button" class="pop-btn"> See live <img class="popup-icone" src="./assets/images/Icon.svg" alt="popup-see-live"></button>
    
            <button type="button" class="pop-btn"> See Project <i class="fab fa-github popup-icone"></i></button>
          </div>
        </div>
      </div>
     </div> 
  </div>`;
    const popupClose = document.querySelector('#closePopup');
    popupClose.addEventListener('click', () => {
      document.querySelector('.popup-active').style.display = 'none';
      parrent.style.display = 'block';
      show.classList.remove('.popup-active');
    });
  });
}
popupShown(btn1, show1, popupWindow, 0);
popupShown(btn2, show2, popupWindow, 1);
popupShown(btn3, show3, popupWindow, 2);
