const searchBtnEl = document.getElementById("searchBtn");
const searchIdEl = document.getElementById("searchId");
const searchedInfoEl = document.getElementById("searchedInfo");

const editBtnEl = document.getElementById("editBtn");
const taskIdEl = document.getElementById("taskId");
const userIdEl = document.getElementById("userId");
const completedEl = document.getElementById("completed");

const cancelBtnEl = document.getElementById("cancelBtn");

searchBtnEl.addEventListener("click", () => {
  const url = "http://localhost:3000/todos";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const searched = data.find((task) => task.id == searchIdEl.value);
      console.log(searched);
      taskIdEl.value = searched.title;
      userIdEl.value = searched.userId;
      console.log(searched.completed);

      completedEl.checked = searched.completed;
      searchIdEl.disabled = true;
    });
});

editBtnEl.addEventListener("click", () => {
  let bodyData = {
    title: taskIdEl.value,
    completed: completedEl.checked,
    userId: userIdEl.value,
  };
  const options = {
    method: "PUT",
    body: JSON.stringify(bodyData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const url = `http://localhost:3000/todos/${searchIdEl.value}`;
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      alert("Updated");
    });
});
cancelBtnEl.addEventListener("click", () => {
  window.location.href = "./index.html";
});
// searchId
//    searchBtn
//     searchedInfo
//     taskId

//    userId
//    completedId
//
//    editBtn
