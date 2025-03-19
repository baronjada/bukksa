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

/*Displaying book titles using loops*/

// let bookCardTitles = document.querySelectorAll(".book-card-book-title");
// bookCardTitles.forEach((book) => {
//   console.log(book.innerText);
// });
