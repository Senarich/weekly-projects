const btnEl = document.getElementById("calculate");
const billEl = document.getElementById("bill");
const tipEl = document.getElementById("tip");
const totalSpan = document.getElementById("total");

//function to calculate the total
function calculateTotal() {
  const billValue = billEl.value;
  const tipValue = tipEl.value;

  // checking for the correct input value
  if (billValue === "" || billValue <= 0) {
    alert("please enter a valid bill value");
  } else if (tipValue === "" || tipValue <= 0) {
    alert("please enter a valid tip percentage");
  } else {
    // performing the tip calculations.
    const totalValue = billValue * (1 + tipValue / 100);

    /* changing the inner text of the span element dynamically 
    and limiting the decimal numbers to using the (toFixed()) in-built function*/

    totalSpan.innerText = totalValue.toFixed(2);
  }
}

btnEl.addEventListener("click", calculateTotal);
