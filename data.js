const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");
const navigation = document.querySelector('.nav-bar')

hamburger.addEventListener("click",() => {
  document.body.classList.toggle("nav-open");
})

navigation.addEventListener("mouseup",() => {
  document.body.classList.remove("nav-open");
});