// getting the various elements from the the Document object model
const btnEl = document.getElementById("btn");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const bmiResultEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
  /* initializing the elements value  we got from the
     DOM and assigning them to the heightValue and weightValue
     variables respectively ad converting the height input value to
     metres by dividing it by 100 (1m=100cm) */
  const heightValue = heightInput.value / 100;
  const weightValue = weightInput.value;

  // body-mass INDEX calculation logic
  const bmiValue = weightValue / (heightValue * heightValue);

  //changing the result input value to be equal to the bmi value
  bmiResultEl.value = bmiValue.toFixed(3);

  // checking the bmi-value and setting conditions using the if statement
  if (bmiValue < 18.5) {
    weightConditionEl.innerText = "Under weight ";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.99) {
    weightConditionEl.innerText = "Normal weight ";
  } else if (bmiValue >= 25 && bmiValue <= 29.99) {
    weightConditionEl.innerText = "Over weight ";
  } else if (bmiValue >= 30) {
    weightConditionEl.innerText = "Obesity ";
  }
}

// adding a click event listener to the button,
// and to call the function CalculateBMI anytime the button is clicked
btnEl.addEventListener("click", calculateBMI);
