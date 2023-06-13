const usersDivEl = document.getElementById("usersDiv");
const tbody = document.querySelector("#usersTable tbody");

fetch("http://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((user) => {
      const row = tbody.insertRow();

      const nameCell = row.insertCell();
      nameCell.innerHTML = user.name;

      const userNameCell = row.insertCell();
      userNameCell.innerHTML = user.username;

      const userEmailCell = row.insertCell();
      userEmailCell.innerHTML = user.email;

      const userPhoneCell = row.insertCell();
      userPhoneCell.innerHTML = user.phone;

      const userWebsiteCell = row.insertCell();
      userWebsiteCell.innerHTML = user.website;

      const userCompanyCell = row.insertCell();
      userCompanyCell.innerHTML = user.company.name;
    });
  });
