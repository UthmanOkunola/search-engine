const users = [
  {
    Name: "Mark Otto",
    Phonenumber: "08034568797",
  },
  {
    Name: "Mark Thunderstorm",
    Phonenumber: "09087651234",
  },
  {
    Name: "Jacob Thornton",
    Phonenumber: "08123459876",
  },
  {
    Name: "Larry Bird",
    Phonenumber: "09056784321",
  },
  {
    Name: "Terry Longstaff",
    Phonenumber: "080937748421",
  },
];
// users.indexOf()
// users.filter()

let input = document.getElementById("input");
let tbody = document.getElementById("tbody");
let t = tbody.children;

input.addEventListener("input", function (event) {
  let keyword = event.target.value;
  let filteredUsers = filterArray(users, keyword);
  // filterNumber(users, keyword);
  renderList(filteredUsers);
  console.log(filteredUsers);
});

function renderList(items=users) {
  let html = "";
  for (let i = 0; i < items.length; i++) {
    let a = items[i].Name;
    let b = items[i].Phonenumber;
    html += 
            `
            <tr>
                <td scope="row">${i + 1}</td>
                <td>${a}</td>
                <td>${b}</td>
            </tr>
            `;
  }
  tbody.innerHTML = html;
  // t = tbody.querySelectorAll("tr");
}

window.addEventListener("load", function () {
  renderList();
});

function filterArray(arr, query) {
  return arr.filter(function (el) {
    return el.Name.toLowerCase().indexOf(query.toLowerCase()) !== -1 || el.Phonenumber.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
}

