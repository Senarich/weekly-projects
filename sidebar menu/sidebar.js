const bars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closingbtn = document.querySelector(".fa-xmark");

bars.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closingbtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
