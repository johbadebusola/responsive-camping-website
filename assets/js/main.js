/*=============== SHOW MENU ===============*/
const hamburger = document.getElementById("Hamburger");
const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const menu3 = document.getElementById("menu3");
const Nav = document.getElementById("navToggle")

hamburger.addEventListener("click", () => {
  menu1.classList.toggle("menu1");
  menu2.classList.toggle("menu2");
  menu3.classList.toggle("menu3");
  Nav.classList.toggle("active")
});
/*=============== REMOVE MENU MOBILE ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== GSAP ANIMATION ===============*/
