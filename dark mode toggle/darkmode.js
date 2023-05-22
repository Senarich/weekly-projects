const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
const textBtn = document.querySelector(".text-btn");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
    bodyEl.style.color = "white";
    textBtn.innerText = `ON`;
  } else {
    bodyEl.style.background = "white";
    bodyEl.style.color = "black";
    textBtn.innerText = `OFF `;
  }
}

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});
