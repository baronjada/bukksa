const bookCardBlurbs = document.querySelectorAll(".book-card-blurb");
bookCardBlurbs.forEach((blurb) =>
  blurb.addEventListener("click", () =>
    blurb.classList.toggle("shortened-blurb")
  )
);

/**Hamburger menu**/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
