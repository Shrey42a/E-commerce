const toggle2 = document.querySelector(".toggle2");
const menu2 = document.querySelector(".menu2");
const items2 = document.querySelectorAll(".item2");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu2.classList.contains("active")) {
    menu2.classList.remove("active");
    toggle2.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu2.classList.add("active");
    toggle2.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}
