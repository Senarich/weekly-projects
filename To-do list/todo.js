const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list")) || [];

list.forEach((task) => {
  toDoList(task);
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

function toDoList(task) {
  const newTask = task ? task.name : inputEl.value;
  if (!newTask) return;

  const liEl = document.createElement("li");
  liEl.innerText = newTask;
  ulEl.appendChild(liEl);
  inputEl.value = "";

  const checkedBtnEl = document.createElement("div");
  checkedBtnEl.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
  liEl.appendChild(checkedBtnEl);

  const trashBtnEl = document.createElement("div");
  trashBtnEl.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  liEl.appendChild(trashBtnEl);

  liEl.classList.toggle("checked", task && task.checked);

  checkedBtnEl.addEventListener("click", () => {
    liEl.classList.toggle("checked");
    updateLocalStorage();
  });

  trashBtnEl.addEventListener("click", () => {
    liEl.remove();
    updateLocalStorage();
  });

  updateLocalStorage();
}

function updateLocalStorage() {
  const liEls = document.querySelectorAll("li");
  list = Array.from(liEls).map((liEl) => ({
    name: liEl.innerText,
    checked: liEl.classList.contains("checked"),
  }));
  localStorage.setItem("list", JSON.stringify(list));
}
