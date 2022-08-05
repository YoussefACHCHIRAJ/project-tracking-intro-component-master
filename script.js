let openMenu = document.querySelector(".open");
let closeMenu = document.querySelector(".close");
let nav = document.querySelector("nav");

openMenu.addEventListener("click" , e=>{
    nav.style.display = "block";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
})
closeMenu.addEventListener("click" , e=>{
    nav.style.display = "none";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
})