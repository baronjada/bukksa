const bookCardBlurbs = document.querySelectorAll(".book-card-blurb");
bookCardBlurbs.forEach((blurb) =>
  blurb.addEventListener("click", () => blurb.classList.add("shortened-blurb"))
);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const bookDetailsDialog = document.querySelector("dialog");

const showDialogButton = document.querySelectorAll(".view-book-button");
showDialogButton.forEach((button) => {
  button.addEventListener("click", () => {
    bookDetailsDialog.showModal();
    openCheck(bookDetailsDialog);
  });
});

const closeDialogButton = document.querySelector(".close-dialog-button");
closeDialogButton.addEventListener("click", (event) => {
  event.preventDefault();
  bookDetailsDialog.close();
  openCheck(bookDetailsDialog);
});

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}
