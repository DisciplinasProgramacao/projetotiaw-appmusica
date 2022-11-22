const USERS_DATA = "LOCALSTORAGE_USERS_DATA"
const CURRENT_USER = "LOCALSTORAGE_CURRENT_USER"
let users = JSON.parse(localStorage.getItem("LOCALSTORAGE_USERS_DATA"))|| [];

function getFile() {
  document.getElementById("upfile").click();
}

function sub(obj) {
  var file = obj.value;
  var fileName = file.split("\\");
  document.getElementById("button").innerHTML = fileName[fileName.length - 1];
  document.myForm.submit();
  event.preventDefault();
}

function validatePassword() {
  let password = document.getElementById("password").value
  let repeatedPassword = document.getElementById("repeatedPassword").value

  if (repeatedPassword !== password) {
    document.getElementById("passwordError").innerText = "As senhas devem ser iguais!"
    return false;
  } else {
    document.getElementById("passwordError").innerText = ""
    return true;
  }
}

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const repeatedPassword = document.getElementById("repeatedPassword").value;

  if ([name, email, phone, password, repeatedPassword].includes("")) {
    alert("Preencha todos os campos!");
    return false;
  }

  return true;
}

function getFormData() {
  const isValid = validateForm();

  if (isValid) {
    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      password: document.getElementById("password").value,
      photo: document.getElementById("upfile").value,
    }
  
    users.push(data)
  
    localStorage.setItem(CURRENT_USER, JSON.stringify(data))
    localStorage.setItem(USERS_DATA, JSON.stringify(users))
  
    window.location.href = "http://localhost:5500/src/modules/Profile/index.html"
  }
}