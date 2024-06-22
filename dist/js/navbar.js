// NAVBAR FIXED
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
});

// HUMBERGER
const humberger = document.getElementById("humberger");
const navMenu = document.getElementById("nav-menu");

humberger.addEventListener("click", function () {
  humberger.classList.toggle("humberger-active");
  navMenu.classList.toggle("hidden");
});