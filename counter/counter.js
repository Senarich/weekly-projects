const minusEl = document.getElementById("minus");
const plusEl = document.getElementById("plus");
const resultEl = document.getElementById("result");

let counter = 1;

minusEl.addEventListener("click", () => {
  counter--;
  resultEl.innerText = counter;
});

plusEl.addEventListener("click", () => {
  counter++;
  resultEl.innerText = counter;
});

resultEl.innerText = counter;
