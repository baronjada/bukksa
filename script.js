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

// V2: 'Recent Rotation' homepage book cards section
let recentRotationLibrary = [];

function Book(title, author, blurb, coverImage) {
  this.title = title;
  this.author = author;
  this.blurb = blurb;
  this.coverImage = coverImage;
  this.id = crypto.randomUUID();
}

function addBookToRecentRotationLibrary(title, author, blurb, coverImage) {
  const recentRotationBook = new Book(title, author, blurb, coverImage);

  recentRotationLibrary.push(recentRotationBook);
}

const main = document.querySelector("main");

let RRBooksContainer = document.createElement("div");
main.append(RRBooksContainer);
RRBooksContainer.className = "recent-rotation-container";

let recentRotationHeading = document.createElement("h2");
recentRotationHeading.innerHTML = "Your recent rotation";
RRBooksContainer.append(recentRotationHeading);

const RRBooksGrid = document.createElement("div");
RRBooksGrid.className = "rr-book-grid";
RRBooksContainer.append(RRBooksGrid);

function displayRRLibrary() {
  for (let i = 0; i < recentRotationLibrary.length; i++) {
    const RRBookCardElement = document.createElement("div");
    RRBookCardElement.className = "rr-book-card";
    RRBooksGrid.append(RRBookCardElement);

    const RRTitleAuthorContainer = document.createElement("div");
    RRBookCardElement.append(RRTitleAuthorContainer);

    const RRBookTitle = document.createElement("h3");
    RRBookTitle.innerText = `${recentRotationLibrary[i].title}`;
    RRTitleAuthorContainer.append(RRBookTitle);
  }
}

addBookToRecentRotationLibrary(
  "The Pragmatic Programmer",
  "Andrew Hunt & David Thomas",
  "A foundational guide for developers that blends practical coding advice with timeless principles for working effectively. Covering topics from writing flexible, maintainable code to thinking critically about problems, it encourages constant learning and craftsmanship in software.",
  "/images/the-pragmatic-programmer.jpg"
);

addBookToRecentRotationLibrary(
  "The Alchemist",
  "Paulo Coelho",
  "A modern fable about Santiago, a young shepherd who follows a recurring dream of treasure in the Egyptian pyramids. Along the way, he encounters challenges and wisdom that teach him about love, courage, and the importance of pursuing one’s personal legend.",
  "/images/the-alchemist.jpg"
);

addBookToRecentRotationLibrary(
  "Girls That Invest",
  "Simran Kaur",
  "An accessible and empowering introduction to investing, written to help women take control of their financial futures. It breaks down investing into simple, practical steps, showing how to grow wealth and build confidence without complicated jargon.",
  "/images/girls-that-invest.jpg"
);

addBookToRecentRotationLibrary(
  "The Hunger Games",
  "Suzanne Collins",
  "In a divided dystopian society, Katniss Everdeen steps forward to take her sister’s place in a televised fight to the death. Faced with ruthless opponents and the Capitol’s control, she must rely on her instincts and resilience to survive against impossible odds.",
  "/images/the-hunger-games.jpg"
);

displayRRLibrary();
console.log(recentRotationLibrary);
