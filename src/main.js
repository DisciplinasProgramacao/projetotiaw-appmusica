const hasLocalData = localStorage.length

console.log(!!hasLocalData)

if (!!hasLocalData) {
  window.location.href = "http://localhost:5500/src/modules/Login/index.html"
} else {
  window.location.href = "http://localhost:5500/src/modules/SignUp/index.html"
}
