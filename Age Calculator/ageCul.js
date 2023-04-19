const btn = document.getElementById("btn");
const birthday = document.getElementById("birthday");
const result = document.getElementById("result");
const time = document.getElementById("time");


function calculateAge(event) {
  event.preventDefault();
  const birthdayValue = birthday.value;

  //checking for input value from the user
  if (birthdayValue === "") {
    alert("Please enter a valid date");
  } else {
    const age = getAge(birthdayValue);
    result.innerText = `Your Age is ${age} ${age > 1 ? "years" : "year"} old `;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}
// displaying the current date and time
timeEl = new Date();
time.innerText = timeEl;
btn.addEventListener("click", calculateAge);
