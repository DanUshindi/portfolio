let hamburger=document.querySelector(".hamburger");
let menu=document.querySelector(".nav-item")

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active")
    menu.classList.toggle("active")
})

menu.addEventListener("mouseup",() => {
    menu.classList.remove("active")
});