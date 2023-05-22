const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonsValue = buttonsEl[i].textContent;
    if (buttonsValue === "C") {
      clearResult();
    } else if (buttonsValue === "=") {
      calculateResult();
    } else if (buttonsValue === "Del") {
      deleteNumber();
    } else {
      appendValue(buttonsValue);
    }
  });
}
function clearResult() {
  inputFieldEl.value = "";
}
function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value);
}
function appendValue(buttonsValue) {
  inputFieldEl.value += buttonsValue;
  // inputFieldEl.value =inputFieldEl.value + buttonsValue
}
function deleteNumber() {
  inputFieldEl.value = inputFieldEl.value.slice(0, -1);
}
