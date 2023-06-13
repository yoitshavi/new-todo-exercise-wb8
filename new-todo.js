const addBtnEl = document.getElementById("addBtn");
const taskIdEl = document.getElementById("taskId");
const userIdEl = document.getElementById("userId");

addBtnEl.addEventListener("click", () => {
  let bodyData = {
    title: taskIdEl.value,
    completed: false,
    userId: userIdEl.value,
  };
  const options = {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const url = "http://localhost:3000/todos";
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});
