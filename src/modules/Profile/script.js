const CURRENT_USER = "LOCALSTORAGE_CURRENT_USER"
const USERS_DATA = "LOCALSTORAGE_USERS_DATA"

let users = localStorage.getItem(USERS_DATA);
let isEditing = false;

function setFormData() {
  const data = JSON.parse(localStorage.getItem(CURRENT_USER))

  if(!!data) {
    document.getElementById("name").value = data.name;
    document.getElementById("email").value = data.email;
    document.getElementById("phone").value = data.phone;
    document.getElementById("image").src = data.photo;
  }
};

setFormData()

function handleLogout() {
  window.location.href = "http://localhost:5500/src/modules/Login/index.html"
};

function handleEdit() {
  isEditing = !isEditing;

  if (isEditing === true) {
    document.getElementById("editButton").style.textDecoration = "underline";
    document.getElementById("name").disabled = false;
    document.getElementById("email").disabled = false;
    document.getElementById("phone").disabled = false;
  } else {
    document.getElementById("editButton").style.textDecoration = "none";
    document.getElementById("name").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("phone").disabled = true;
  }
}
