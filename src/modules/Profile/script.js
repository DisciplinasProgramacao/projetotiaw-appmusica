const USER_DATA = "LOCALSTORAGE_USER_DATA"

function setFormData() {
  const data = JSON.parse(localStorage.getItem(USER_DATA))

  
  if(!!data) {
    document.getElementById("name").value = data.email;
    document.getElementById("email").value = data.email;
    document.getElementById("phone").value = data.phone;
  }
};

setFormData()

function handleLogout() {
  localStorage.clear()
  window.location.href = "http://localhost:5500/src/modules/Login/index.html"
};
