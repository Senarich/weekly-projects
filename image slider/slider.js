const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imageContEl = document.querySelector(".image-container");
const imgEls = document.querySelectorAll("img");

let currentImage = 1;
let timeout; // variable to be used to clear the setTimeout function when the bnt is clicked

prevEl.addEventListener("click", () => {
  currentImage--;
  clearTimeout(timeout);
  updateImg();
});

nextEl.addEventListener("click", () => {
  currentImage++;
  clearTimeout(timeout);
  updateImg();
});
//calling the update function once
updateImg();

function updateImg() {
  // condition to ensure the images does not loop of to an empty img
  if (currentImage > imgEls.length) {
    currentImage = 1;
  } else if (currentImage < 1) {
    currentImage = imgEls.length;
  }
  //appending a style transform to the imageContEl and dynamically translate on x axis  using the set width of the image
  imageContEl.style.transform = ` translateX(-${(currentImage - 1) * 1000}px)`;

  // setting a timeout to change the images every 3secs and asigning  it to timeout variable
  timeout = setTimeout(() => {
    currentImage++;
    updateImg();
  }, 3000);
}
