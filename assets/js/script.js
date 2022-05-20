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
  .querySelectorAll(".burger-menu-section .nav-buttons ul li a")
  .forEach((n) =>
    n.addEventListener("click", () => {
      burgerMenuIcon.classList.remove("show");
      burgerMenuSection.style.display = "none";
      BurgerMenuOpen = false;
    })
  );

// Email JS Contact Form Code

form = document.querySelector("#contact-form");

form.addEventListener("submit", function () {
  event.preventDefault();
  const target = event.target;

  const templateParams = {
    contact_name: target.name.value,
    contact_email: target.email.value,
    portfolio_message: target.message.value,
  };

  emailjs.send("gmail", "Portfolio", templateParams).then(
    function (response) {
      swal({
        title: "Thank You!",
        text: "Your message was sent successfully",
        icon: "success",
        button: false,
        timer: 3500,
      });
      form.reset();
    },
    function (error) {
      swal({
        title: "Unfortunately Your Message Was Not Sent!",
        text: "Please Try Again or Contact Us via our Contact Page!",
        icon: "error",
        button: false,
        timer: 3500,
      });
      form.reset();
    }
  );
});
