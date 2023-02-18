const iconHamburger = document.getElementById("iconHamburger");
iconHamburger.addEventListener("click", showHamburger);

function showHamburger() {
  let navLogin = document.getElementById("navLogin");
  iconHamburger.classList.toggle("fa-xmark");

  if (iconHamburger.classList == "fa-solid fa-bars fa-xmark") {
    navLogin.classList.add("nav__login--active");
  } else {
    navLogin.classList.remove("nav__login--active");
  }
}

// GliderJS
window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel"), {
    slidesToShow: 1,
    dots: ".carousel__indicator",
    rewind: true,
    draggable: true,
    arrows: {
        prev: ".carousel__prev",
        next: ".carousel__next",
    },
  });
});
