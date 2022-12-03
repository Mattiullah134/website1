const hamBurger = document.querySelector(".hamBurger");
const navMenu = document.querySelector(".nav-item");

hamBurger.addEventListener("click" , ()=>{

    hamBurger.classList.toggle("active");
    navMenu.classList.toggle("active");
})