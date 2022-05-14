// Back To Top Button

var mybutton = document.querySelector(".btn-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 900
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Navbar Active Class

const links = document.querySelectorAll(".links");
const section = document.querySelectorAll("section");

function activePage() {
  let len = section.length;
  while (--len && window.scrollY + 120 < section[len].offsetTop) {}
  links.forEach((ltx) => ltx.classList.remove("active"));
  links[len].classList.add("active");
}
activePage();
window.addEventListener("scroll", activePage);

// Burger Menu Section

const burgerMenuIcon = document.querySelector(".burger-menu-icon");
const burgerMenuSection = document.querySelector(".burger-menu-section");
let BurgerMenuOpen = false;

burgerMenuIcon.addEventListener("click", () => {
  if (!BurgerMenuOpen) {
    burgerMenuIcon.classList.toggle("show");
    burgerMenuSection.style.display = "block";
    BurgerMenuOpen = true;
  } else {
    burgerMenuIcon.classList.remove("show");
    burgerMenuSection.style.display = "none";
    BurgerMenuOpen = false;
  }
});

// Remove Menu once Nav Link is clicked

document
  .querySelectorAll(".burger-menu-section .nav-links ul li a")
  .forEach((n) =>
    n.addEventListener("click", () => {
      burgerMenuIcon.classList.remove("show");
      burgerMenuSection.style.display = "none";
      BurgerMenuOpen = false;
    })
  );

// Remove Menu once Social Link is clicked

document
  .querySelectorAll(".burger-menu-section .social-links ul li a")
  .forEach((n) =>
    n.addEventListener("click", () => {
      burgerMenuIcon.classList.remove("show");
      burgerMenuSection.style.display = "none";
      BurgerMenuOpen = false;
    })
  );
