const hasLocalData = localStorage.length

if (!!hasLocalData) {
  window.location.href = "http://localhost:5500/src/modules/Login/index.html"
} else {
  window.location.href = "http://localhost:5500/src/modules/SignUp/index.html"
}
