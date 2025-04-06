//Do not change //////////////////////////////////
const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//Your Code Below Here////

import { calculateStarAverage } from "./logic.js";

// defines each relevant section within index.html to a variable
const reviewsSection = document.querySelector(".reviews");
const starDisplay = document.querySelector(".starRating");
const form = document.querySelector("form");

// loads a review onto the DOM
function renderReview(reviewObj) {
  const container = document.createElement("div");
  container.classList.add("review_container");

  const img = document.createElement("img");
  img.src = reviewObj.image;

  const infoDiv = document.createElement("div");
  const user = document.createElement("p");
  user.textContent = reviewObj.username;

  const stars = document.createElement("p");
  stars.textContent = `Rating: ${reviewObj.star}`;

  const text = document.createElement("p");
  text.textContent = reviewObj.review;

  infoDiv.append(user, stars, text);
  container.append(img, infoDiv);
  reviewsSection.appendChild(container);
}

// renders all current reviews utilizing renderReview function
reviews.forEach(renderReview);

// recalculates the star average based on reviews
function updateStarAverage() {
  const avg = calculateStarAverage(reviews);
  starDisplay.textContent = `Star Rating: ${avg} stars`;
}

updateStarAverage();

// add new review to review list
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newReview = {
    username: form.username.value,
    image: form.image.value,
    star: Number(form.star.value),
    review: form.review.value,
  };

  reviews.push(newReview);
  renderReview(newReview);
  updateStarAverage();
  form.reset();
});

