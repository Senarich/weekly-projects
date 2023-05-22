const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

updateClock();

function updateClock() {
  // getting h/m/s from the browser using the new data().get...
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM"; //setting the initial value of ampm to Am

  // if the hour value is greater than 12
  // subtract 12 from the our value
  // and change the ampm to "PM"
  if (h >= 12) {
    h = h - 12;
    ampm = "PM";
     
  }

  //checking if the h/m/s is less than 10 add zero.
  //using a ternary operator to set the conditions
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // displaying the values from the browser in our project
  // by changing the innertext of the each element
  hourEl.innerText = h;
  minutesEl.innerText = m;
  secondsEl.innerText = s;
  ampmEl.innerText = ampm;

  //the setTimeout() method calls the update clock function every second
  // to be able to update the second each time.
  setTimeout(() => {
    updateClock();
  }, 1000);
}
