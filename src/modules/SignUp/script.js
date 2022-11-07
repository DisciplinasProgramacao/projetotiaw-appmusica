const USER_DATA = "LOCALSTORAGE_USER_DATA"

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

function getFormData() {
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    photo: document.getElementById("upfile").value,
  }

  localStorage.setItem(USER_DATA, JSON.stringify(data))

  window.location.href = "http://localhost:5500/src/modules/Profile/index.html"
}