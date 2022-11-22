const CURRENT_USER = "LOCALSTORAGE_CURRENT_USER"
const hasLocalData = JSON.parse(localStorage.getItem(CURRENT_USER))

if (hasLocalData !== null) {
  window.location.href = "http://localhost:5500/src/modules/Login/index.html"
} else {
  window.location.href = "http://localhost:5500/src/modules/SignUp/index.html"
}
