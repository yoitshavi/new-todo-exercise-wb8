const toDoInputEl = document.getElementById("toDoId");
const toDoBtnEl = document.getElementById("toDoBtn");
const toDoIdEl = document.getElementById("toDoId");
const toDoMessageDiv = document.getElementById("toDoMessage");

toDoBtnEl.addEventListener("click", () => {
  toDoMessageDiv.innerHTML = " ";
  fetch(`http://localhost:3000/${toDoIdEl.value}`)
    .then((response) => response.json())
    .then((data) => {
      toDoMessageDiv.innerHTML = `${data.title} is ${data.completed}`;
    });
});
